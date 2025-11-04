import { useQuery } from '@tanstack/react-query';
import { getChatRoomMessages } from '../../../api/chat';

export const CHAT_MESSAGES_QUERY_KEY = 'chatMessages';

interface UseChatMessagesParams {
  roomId: string;
  enabled?: boolean;
  refetchInterval?: number | false;
}

/**
 * 채팅방 메시지 조회 훅
 *
 * @param roomId - 채팅방 ID
 * @param enabled - 조회 활성화 여부 (기본값: true)
 * @param refetchInterval - 자동 새로고침 간격 (밀리초, 기본값: 3000ms, false로 설정하면 폴링 비활성화)
 *
 * @example
 * ```tsx
 * // 3초마다 자동 새로고침 (기본값)
 * const { messages, isLoading } = useChatMessages({ roomId: '1' });
 *
 * // 5초마다 자동 새로고침
 * const { messages } = useChatMessages({ roomId: '1', refetchInterval: 5000 });
 *
 * // 폴링 비활성화
 * const { messages } = useChatMessages({ roomId: '1', refetchInterval: false });
 * ```
 */
export const useChatMessages = ({
  roomId,
  enabled = true,
  refetchInterval = 3000,
}: UseChatMessagesParams) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [CHAT_MESSAGES_QUERY_KEY, roomId],
    queryFn: () => getChatRoomMessages(roomId),
    enabled: enabled && !!roomId,
    // 폴링 활성화: 지정된 시간(밀리초)마다 자동으로 데이터를 다시 가져옴
    refetchInterval: refetchInterval !== false ? refetchInterval : false,
    // 포커스 되었을 때 자동 새로고침
    refetchOnWindowFocus: true,
    // 브라우저가 백그라운드에서 포그라운드로 돌아올 때 자동 새로고침
    refetchOnMount: true,
  });

  return {
    messages: data ?? [],
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useChatMessages;
