import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getRookie } from '../api/rookie';
import { ROOKIE_QUERY_KEY } from './key';
import { ExploreCategoryValue } from '../../../constants/category';
import { Rookie } from '../../../models/rookie';

interface UseRookieQueryParams {
  sortType: ExploreCategoryValue;
  search?: string;
  roleType?: string;
}

// 클라이언트 사이드 검색 필터링 함수
const filterRookiesByKeyword = (rookies: Rookie[], keyword: string): Rookie[] => {
  if (!keyword || !keyword.trim()) return rookies;

  const lowerKeyword = keyword.toLowerCase().trim();

  // 검색 가능한 필드 목록
  const searchableFields: (keyof Rookie)[] = [
    'name',
    'currentStudy',
    'currentStudyDetail',
    'major',
    'favoriteSubject',
    'toolset',
  ];

  return rookies.filter((rookie) => {
    return searchableFields.some((field) => {
      const value = rookie[field];
      return value && typeof value === 'string' && value.toLowerCase().includes(lowerKeyword);
    });
  });
};

const useRookieQuery = ({ sortType, search, roleType }: UseRookieQueryParams) => {
  // 검색어 정규화
  const normalizedSearch = search && search.trim() ? search.trim() : undefined;

  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [ROOKIE_QUERY_KEY.rookie, normalizedSearch, roleType],
      queryFn: async ({ pageParam = 0 }) => {
        // 검색어가 있을 때만 검색 파라미터 전달 (백엔드 필터링 시도)
        return await getRookie({
          page: pageParam,
          size: 10,
          roleType,
          ...(normalizedSearch && { search: normalizedSearch }),
        });
      },
      getNextPageParam: (lastPage: any, allPages) => {
        if (!lastPage || (Array.isArray(lastPage) && lastPage.length < 10)) {
          return undefined;
        }
        return allPages.length;
      },
      initialPageParam: 0,
      enabled: sortType === 'rookie',
    });

  const allRookies = data?.pages.flat() ?? [];
  const rookies = useMemo(() => {
    if (normalizedSearch) {
      return filterRookiesByKeyword(allRookies, normalizedSearch);
    }
    return allRookies;
  }, [allRookies, normalizedSearch]);

  const shouldDisableNextPage = normalizedSearch && rookies.length === 0 && allRookies.length > 0;

  return {
    rookies,
    isLoading,
    isFetching,
    hasNextPage: shouldDisableNextPage ? false : hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useRookieQuery;
