import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteMyProject } from '../api/library';
import { LIBRARY_QUERY_KEY } from '../key';

export const useDeleteMyProjectMutation = () => {
  const queryClient = useQueryClient();

  const deleteMyProjectMutation = useMutation({
    mutationFn: (boardId: number) => deleteMyProject(boardId),
    onSuccess: () => {
      // 성공 시 캐시 무효화하여 최신 데이터 가져오기
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.myProjectBoards] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.savedBoards] });
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
