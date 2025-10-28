import { useMutation, useQueryClient } from '@tanstack/react-query';
import { removeBookmark } from '../api/bookmark';
import { ProjectResponse } from '../../../models/project';
import { PROJECT_QUERY_KEY } from './key';
import { LIBRARY_QUERY_KEY } from '../../library/key';
import { getAccessToken } from '../../../api/token';
import axios from 'axios';
import HttpError from '../../../api/httpError';

export const useRemoveBookmarkMutation = (onError?: () => void) => {
  const queryClient = useQueryClient();

  const removeBookmarkMutation = useMutation({
    mutationFn: (boardId: number) => removeBookmark(boardId),
    // 낙관적 업데이트: mutation 실행 전에 캐시 업데이트
    onMutate: async (boardId: number) => {
      // 진행 중인 다른 쿼리 취소
      await queryClient.cancelQueries({ queryKey: [PROJECT_QUERY_KEY.project] });

      // 이전 값 백업
      const previousData = queryClient.getQueryData<ProjectResponse>([PROJECT_QUERY_KEY.project]);

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

      return { previousData };
    },
    onSuccess: () => {
      // 서버와 동기화
      queryClient.invalidateQueries({ queryKey: [PROJECT_QUERY_KEY.project] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.savedBoards] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.myProjectBoards] });
    },
    onError: (error: HttpError, boardId, context) => {
      // 실패 시 이전 데이터로 롤백
      if (context?.previousData) {
        queryClient.setQueryData([PROJECT_QUERY_KEY.project], context.previousData);
        queryClient.setQueryData([LIBRARY_QUERY_KEY.savedBoards], context.previousData);
        queryClient.setQueryData([LIBRARY_QUERY_KEY.myProjectBoards], context.previousData);
      }
      console.error('북마크 삭제 실패:', error);

      // 500 에러 또는 인증 오류 체크
      const isAuthError = error.status === 401 || error.status === 500 || !getAccessToken();
      console.log('isAuthError', isAuthError);
      if (isAuthError && onError) {
        onError();
      } else if (!isAuthError) {
        alert('북마크 삭제에 실패했습니다. 다시 시도해주세요.');
      }
    },
  });

  return { handleRemoveBookmark: removeBookmarkMutation.mutate };
};
