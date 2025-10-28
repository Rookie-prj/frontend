import { useMutation, useQueryClient } from '@tanstack/react-query';
import { markMessagesAsRead } from '../../../api/chat';

const CHAT_ROOMS_QUERY_KEY = 'chatRooms';

/**
 * 메시지 읽음 처리 뮤테이션 훅
 * 특정 채팅방의 모든 메시지를 읽음 상태로 변경합니다.
 */
export const useMarkMessagesReadMutation = () => {
  const queryClient = useQueryClient();

  const markReadMutation = useMutation({
    mutationFn: (roomId: string) => markMessagesAsRead(roomId),
    onSuccess: (_, roomId) => {
      // 채팅방 목록의 unreadCount를 업데이트하기 위해 캐시 무효화
      queryClient.invalidateQueries({ queryKey: [CHAT_ROOMS_QUERY_KEY] });
    },
  });

  const handleMarkMessagesAsRead = (roomId: string) => {
    markReadMutation.mutate(roomId);
  };

  return {
    handleMarkMessagesAsRead,
    isLoading: markReadMutation.isPending,
    isError: markReadMutation.isError,
    error: markReadMutation.error,
    isSuccess: markReadMutation.isSuccess,
  };
};

export default useMarkMessagesReadMutation;
