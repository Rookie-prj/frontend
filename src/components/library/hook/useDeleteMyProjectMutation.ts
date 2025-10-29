import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMyProject } from '../api/library';
import { LIBRARY_QUERY_KEY } from '../key';
import { PROJECT_QUERY_KEY } from '../../explore/hooks/key';

export const useDeleteMyProjectMutation = (options?: { onSuccess?: (message: string) => void }) => {
  const { onSuccess } = options || {};
  const queryClient = useQueryClient();

  const deleteMyProjectMutation = useMutation({
    mutationFn: (boardId: number) => deleteMyProject(boardId),
    onSuccess: () => {
      // 성공 시 캐시 무효화하여 최신 데이터 가져오기
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.myProjectBoards] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.savedBoards] });
      queryClient.invalidateQueries({ queryKey: [PROJECT_QUERY_KEY.project] });
      if (onSuccess) {
        onSuccess('프로젝트가 삭제되었습니다.');
      }
    },
    onError: (error) => {
      console.error('내 프로젝트 삭제 실패:', error);
    },
  });

  return {
    handleDeleteMyProject: deleteMyProjectMutation.mutate,
    isLoading: deleteMyProjectMutation.isPending,
  };
};
