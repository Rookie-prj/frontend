import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addBookmark } from '../api/bookmark';
import { ProjectResponse } from '../../../models/project';
import { PROJECT_QUERY_KEY } from './key';
import { LIBRARY_QUERY_KEY } from '../../library/key';
import { getAccessToken } from '../../../api/token';
import HttpError from '../../../api/httpError';

export const useAddBookmarkMutation = (options?: {
  onError?: () => void;
  onSuccess?: (message: string) => void;
}) => {
  const { onError, onSuccess } = options || {};
  const queryClient = useQueryClient();

  const addBookmarkMutation = useMutation({
    mutationFn: (boardId: number) => addBookmark(boardId),
    // 낙관적 업데이트: mutation 실행 전에 캐시 업데이트
    onMutate: async (boardId: number) => {
      // 진행 중인 다른 쿼리 취소
      await queryClient.cancelQueries({ queryKey: [PROJECT_QUERY_KEY.project] });

      // 이전 값 백업
      const previousData = queryClient.getQueryData<ProjectResponse>([PROJECT_QUERY_KEY.project]);

      // 낙관적 업데이트: 북마크 카운트 증가
      if (previousData) {
        queryClient.setQueryData<ProjectResponse>([PROJECT_QUERY_KEY.project], (old) => {
          if (!old) return old;
          return {
            ...old,
            boards: old.boards.map((board) =>
              board.boardId === boardId ? { ...board, bookmark: board.bookmark + 1 } : board,
            ),
          };
        });
      }

      return { previousData };
    },
    onSuccess: () => {
      // 서버와 동기화
      queryClient.invalidateQueries({ queryKey: [PROJECT_QUERY_KEY.project] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.savedBoards] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.myProjectBoards] });
      if (onSuccess) {
        onSuccess('북마크가 추가되었습니다.');
      }
    },
    onError: (error: HttpError, boardId, context) => {
      // 실패 시 이전 데이터로 롤백
      if (context?.previousData) {
        queryClient.setQueryData([PROJECT_QUERY_KEY.project], context.previousData);
        queryClient.setQueryData([LIBRARY_QUERY_KEY.savedBoards], context.previousData);
        queryClient.setQueryData([LIBRARY_QUERY_KEY.myProjectBoards], context.previousData);
      }

      // 500 에러 또는 인증 오류 체크
      const isAuthError = error.status === 401 || error.status === 500 || !getAccessToken();
      if (isAuthError && onError) {
        onError();
      }
    },
  });
  const handleAddBookmark = (boardId: number) => {
    addBookmarkMutation.mutate(boardId);
  };

  return { handleAddBookmark };
};
