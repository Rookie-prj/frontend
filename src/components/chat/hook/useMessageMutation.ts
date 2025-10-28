import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendMessage } from '../../../api/chat';
import { ChatMessage } from '../../../models/chat';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../../constants/routes';

const CHAT_ROOMS_QUERY_KEY = 'chatRooms';

/**
 * localStorage에 roomId를 저장하는 헬퍼 함수
 */
const saveRoomIdToLocalStorage = (roomId: string): void => {
  localStorage.setItem('roomIdKey', roomId);
};

/**
 * localStorage에서 roomId를 가져오는 헬퍼 함수
 */
export const getRoomIdFromLocalStorage = (): string | null => {
  return localStorage.getItem('roomIdKey');
};

/**
 * 메시지 전송 뮤테이션 훅
 * 새 채팅방을 생성하고 메시지를 전송
 */
export const useMessageMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const messageMutation = useMutation({
    mutationFn: ({
      targetUserId,
      content,
      roomId,
    }: {
      targetUserId: number;
      content: string;
      roomId: string;
    }) => sendMessage(targetUserId, content),
    onSuccess: (data: ChatMessage, variables) => {
      // roomId를 localStorage에 저장
      if (data.roomId) {
        saveRoomIdToLocalStorage(data.roomId);
      }

      // roomId가 다르면 리다이렉트
      if (variables.roomId && data.roomId && data.roomId !== variables.roomId) {
        if (navigate) {
          navigate(`${ROUTES.chat}/${data.roomId}`);
        }
      }

      // 채팅방 목록 새로고침
      queryClient.invalidateQueries({ queryKey: [CHAT_ROOMS_QUERY_KEY] });
    },
    onError: (error) => {
      console.error('메시지 전송 실패:', error);
    },
  });

  const handleSendMessage = ({
    targetUserId,
    content,
    roomId,
  }: {
    targetUserId: number;
    content: string;
    roomId: string;
  }) => {
    messageMutation.mutate({ targetUserId, content, roomId });
  };

  return {
    handleSendMessage,
    isLoading: messageMutation.isPending,
    error: messageMutation.error,
    data: messageMutation.data,
  };
};

export default useMessageMutation;
