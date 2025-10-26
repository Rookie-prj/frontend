import { useInfiniteQuery } from '@tanstack/react-query';
import { ROOKIE_QUERY_KEY } from './key';
import { ExploreCategoryValue } from '../../../constants/category';
import { getProjects } from '../api/project';
import { ProjectResponse } from '../../../models/project';

interface UseProjectsQueryParams {
  sortType?: ExploreCategoryValue;
  boardType?: string;
}

const useProjectsQuery = ({ sortType, boardType }: UseProjectsQueryParams = {}) => {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<ProjectResponse>({
      queryKey: ['projects', boardType],
      queryFn: async ({ pageParam = 0 }) => {
        return await getProjects({
          page: pageParam as number,
          size: 10,
          boardType,
        });
      },
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage || !lastPage.boards || lastPage.boards.length < 10) {
          return undefined;
        }
        return allPages.length;
      },
      initialPageParam: 0,
    });

  const projects = data?.pages.flatMap((page) => page.boards) ?? [];

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
