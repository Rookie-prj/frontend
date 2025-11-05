import { useMemo } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { PROJECT_QUERY_KEY, ROOKIE_QUERY_KEY } from './key';
import { ExploreCategoryValue } from '../../../constants/category';
import { getProjects } from '../api/project';
import { ProjectResponse } from '../../../models/project';
import { Project } from '../../../models/project';

interface UseProjectsQueryParams {
  sortType?: ExploreCategoryValue;
  boardType?: string;
  search?: string;
}

// 클라이언트 사이드 검색 필터링 함수
const filterProjectsByKeyword = (projects: Project[], keyword: string): Project[] => {
  if (!keyword || !keyword.trim()) return projects;

  const lowerKeyword = keyword.toLowerCase().trim();

  return projects.filter((project) => {
    // 문자열 필드 검색
    const searchableStringFields: (keyof Project)[] = ['title', 'description'];
    const hasStringMatch = searchableStringFields.some((field) => {
      const value = project[field];
      return value && typeof value === 'string' && value.toLowerCase().includes(lowerKeyword);
    });

    if (hasStringMatch) return true;

    // projectFields 배열 검색
    if (project.projectFields && Array.isArray(project.projectFields)) {
      const hasArrayMatch = project.projectFields.some(
        (field) => typeof field === 'string' && field.toLowerCase().includes(lowerKeyword),
      );
      if (hasArrayMatch) return true;
    }

    return false;
  });
};

const useProjectsQuery = ({ sortType, boardType, search }: UseProjectsQueryParams = {}) => {
  // 검색어 정규화
  const normalizedSearch = search && search.trim() ? search.trim() : undefined;

  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<ProjectResponse>({
      queryKey: [PROJECT_QUERY_KEY.project, boardType, normalizedSearch],
      queryFn: async ({ pageParam = 0 }) => {
        // 검색어가 있을 때만 검색 파라미터 전달 (백엔드 필터링 시도)
        return await getProjects({
          page: pageParam as number,
          size: 10,
          boardType,
          ...(normalizedSearch && { search: normalizedSearch }),
        });
      },
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage || !lastPage.boards || lastPage.boards.length < 10) {
          return undefined;
        }
        return allPages.length;
      },
      initialPageParam: 0,
      enabled: sortType === 'project' || !sortType,
    });

  const allProjects = data?.pages.flatMap((page) => page.boards) ?? [];

  // 클라이언트 사이드 필터링 적용
  const projects = useMemo(() => {
    if (normalizedSearch) {
      return filterProjectsByKeyword(allProjects, normalizedSearch);
    }
    return allProjects;
  }, [allProjects, normalizedSearch]);

  return {
    projects,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useProjectsQuery;
