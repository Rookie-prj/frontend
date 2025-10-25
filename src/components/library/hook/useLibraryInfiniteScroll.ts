import { useInfiniteQuery } from '@tanstack/react-query';
import { LibraryCategoryValue } from '../../../constants/category';
import { getSavedBoards, getMyProjectBoards } from '../api/library';
import { SavedLibraryResponse } from '../../../models/saved';
import { MyProjectLibraryResponse } from '../../../models/myProject';

const useSavedBoardsQuery = (sortType: LibraryCategoryValue) => {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<SavedLibraryResponse>({
      queryKey: ['savedBoards'],
      queryFn: async ({ pageParam = 0 }) => {
        return await getSavedBoards({ page: pageParam as number, size: 10 });
      },
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage || !lastPage.boards || lastPage.boards.length < 10) {
          return undefined;
        }
        return allPages.length;
      },
      initialPageParam: 0,
    });

  const savedBoards = data?.pages.flatMap((page) => page.boards) ?? [];

  return {
    savedBoards,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

const useMyProjectBoardsQuery = (sortType: LibraryCategoryValue) => {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage, isFetchingNextPage } =
    useInfiniteQuery<MyProjectLibraryResponse>({
      queryKey: ['myProjectBoards'],
      queryFn: async ({ pageParam = 0 }) => {
        return await getMyProjectBoards({ page: pageParam as number, size: 10 });
      },
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage || !lastPage.boards || lastPage.boards.length < 10) {
          return undefined;
        }
        return allPages.length;
      },
      initialPageParam: 0,
      enabled: sortType === 'my_project',
    });

  const myProjectBoards = data?.pages.flatMap((page) => page.boards) ?? [];

  return {
    myProjectBoards,
    isLoading,
    isFetching,
    hasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  };
};

export { useSavedBoardsQuery, useMyProjectBoardsQuery };
