import { useMutation, useQueryClient } from '@tanstack/react-query';
import { modifyProjectActive } from '../api/library';
import { LIBRARY_QUERY_KEY } from '../key';

export const useModifyProjectActiveMutation = () => {
  const queryClient = useQueryClient();

  const modifyProjectActiveMutation = useMutation({
    mutationFn: ({ boardId, isActive }: { boardId: number; isActive: boolean }) =>
      modifyProjectActive(boardId, isActive),
    onSuccess: () => {
      // 성공 시 캐시 무효화하여 최신 데이터 가져오기
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.myProjectBoards] });
      queryClient.invalidateQueries({ queryKey: [LIBRARY_QUERY_KEY.savedBoards] });
    },
    onError: (error) => {
      console.error('프로젝트 상태 변경 실패:', error);
      alert('프로젝트 상태 변경에 실패했습니다. 다시 시도해주세요.');
    },
  });

  const handleModifyProjectActive = (boardId: number, isActive: boolean) => {
    modifyProjectActiveMutation.mutate({ boardId, isActive });
  };

  return { handleModifyProjectActive, isLoading: modifyProjectActiveMutation.isPending };
};
