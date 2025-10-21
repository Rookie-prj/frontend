import { useInfiniteQuery } from '@tanstack/react-query';
import { getRookie } from '../api';
import { ROOKIE_QUERY_KEY } from './key';

const useRookieQuery = () => {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [ROOKIE_QUERY_KEY.rookie],
      queryFn: async ({ pageParam = 0 }) => {
        return await getRookie({ page: pageParam, size: 10 });
      },
      getNextPageParam: (lastPage: any, allPages) => {
        if (!lastPage || (Array.isArray(lastPage) && lastPage.length < 10)) {
          return undefined;
        }
        return allPages.length;
      },
      initialPageParam: 0,
    });

  return {
    data,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export default useRookieQuery;
