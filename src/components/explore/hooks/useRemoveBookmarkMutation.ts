import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeBookmark } from '../api/bookmark';
import { ProjectResponse } from '../../../models/project';
import { PROJECT_QUERY_KEY } from './key';
import { LIBRARY_QUERY_KEY } from '../../library/key';
import { getAccessToken } from '../../../api/token';
import HttpError from '../../../api/httpError';
import { BOOKMARK_QUERY_KEY } from '../../../hooks/useBookmarks';
import { Bookmark } from '../../../models/bookmark';

export const useRemoveBookmarkMutation = (options?: {
  onError?: () => void;
  onSuccess?: (message: string) => void;
}) => {
  const { onError, onSuccess } = options || {};
  const queryClient = useQueryClient();

  const removeBookmarkMutation = useMutation({
    mutationFn: (boardId: number) => removeBookmark(boardId),
    throwOnError: false,
    // 낙관적 업데이트: mutation 실행 전에 캐시 업데이트
    onMutate: async (boardId: number) => {
      // 진행 중인 다른 쿼리 취소
      await queryClient.cancelQueries({ queryKey: [PROJECT_QUERY_KEY.project] });
      await queryClient.cancelQueries({ queryKey: BOOKMARK_QUERY_KEY.bookmarks });

      // 이전 값 백업
      const previousData = queryClient.getQueryData<ProjectResponse>([PROJECT_QUERY_KEY.project]);
      const previousBookmarks = queryClient.getQueryData<Bookmark[]>(BOOKMARK_QUERY_KEY.bookmarks);

      // 낙관적 업데이트: 북마크 카운트 감소
      if (previousData) {
        queryClient.setQueryData<ProjectResponse>([PROJECT_QUERY_KEY.project], (old) => {
          if (!old) return old;
          return {
            ...old,
            boards: old.boards.map((board) =>
              board.boardId === boardId
                ? { ...board, bookmark: Math.max(0, board.bookmark - 1) }
                : board,
            ),
          };
        });
      }

      // 낙관적 업데이트: 북마크 목록에서 제거
      if (previousBookmarks) {
        queryClient.setQueryData<Bookmark[]>(BOOKMARK_QUERY_KEY.bookmarks, (old) => {
          if (!old) return old;
          return old.filter((bookmark) => bookmark.boardId !== boardId);
        });
      }

      return { previousData, previousBookmarks };
    },
    onSuccess: () => {
      // 서버와 동기화
      queryClient.invalidateQueries({ queryKey: [PROJECT_QUERY_KEY.project] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.savedBoards] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.myProjectBoards] });
      queryClient.invalidateQueries({ queryKey: BOOKMARK_QUERY_KEY.bookmarks });
      queryClient.invalidateQueries({ queryKey: ['boardDetail'] });
      if (onSuccess) {
        onSuccess('북마크가 삭제되었습니다.');
      }
    },
    onError: (error: HttpError, boardId, context) => {
      console.error('북마크 삭제 실패:', error);

      // 실패 시 이전 데이터로 롤백
      if (context?.previousData) {
        queryClient.setQueryData([PROJECT_QUERY_KEY.project], context.previousData);
        queryClient.setQueryData([LIBRARY_QUERY_KEY.savedBoards], context.previousData);
        queryClient.setQueryData([LIBRARY_QUERY_KEY.myProjectBoards], context.previousData);
      }

      // 북마크 목록 롤백
      if (context?.previousBookmarks) {
        queryClient.setQueryData(BOOKMARK_QUERY_KEY.bookmarks, context.previousBookmarks);
      }

      // boardDetail 쿼리도 롤백
      queryClient.invalidateQueries({ queryKey: ['boardDetail'] });

      // 에러 핸들러 호출
      if (onError) {
        onError();
      }
    },
  });

  return { handleRemoveBookmark: removeBookmarkMutation.mutate };
};
