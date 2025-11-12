import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getBookmarks, addBookmark, removeBookmark } from '../api/bookmark';
import { Bookmark } from '../models/bookmark';

export const BOOKMARK_QUERY_KEY = {
  bookmarks: ['bookmarks'] as const,
};

/**
 * 북마크 목록 조회 훅
 */
export const useBookmarksQuery = () => {
  const { data, isLoading, isFetching, error } = useQuery<Bookmark[]>({
    queryKey: BOOKMARK_QUERY_KEY.bookmarks,
    queryFn: getBookmarks,
  });

  return {
    bookmarks: data || [],
    isLoading,
    isFetching,
    error,
  };
};

/**
 * 북마크 추가 훅
 */
export const useAddBookmarkMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: addBookmark,
    onSuccess: () => {
      // 북마크 목록 다시 조회
      queryClient.invalidateQueries({ queryKey: BOOKMARK_QUERY_KEY.bookmarks });
    },
  });

  return {
    addBookmark: mutation.mutate,
    addBookmarkAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};

/**
 * 북마크 삭제 훅
 */
export const useRemoveBookmarkMutation = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: removeBookmark,
    onSuccess: () => {
      // 북마크 목록 다시 조회
      queryClient.invalidateQueries({ queryKey: BOOKMARK_QUERY_KEY.bookmarks });
    },
  });

  return {
    removeBookmark: mutation.mutate,
    removeBookmarkAsync: mutation.mutateAsync,
    isLoading: mutation.isPending,
    error: mutation.error,
  };
};
