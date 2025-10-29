import { useQuery } from '@tanstack/react-query';
import { getChatRoomDetail } from '../../../api/chat';

const CHAT_ROOM_DETAIL_QUERY_KEY = 'chatRoomDetail';

interface UseChatRoomDetailParams {
  roomId: string | undefined;
  enabled?: boolean;
}

/**
 * 채팅방 상세 조회 훅
 *
 * @param roomId - 채팅방 ID (undefined일 경우 요청하지 않음)
 * @param enabled - 조회 활성화 여부 (기본값: true)
 *
 * @example
 * ```tsx
 * const { chatRoom, isLoading, refetch } = useChatRoomDetail({
 *   roomId: '123',
 *   enabled: true
 * });
 * ```
 */
export const useChatRoomDetail = ({ roomId, enabled = true }: UseChatRoomDetailParams) => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: [CHAT_ROOM_DETAIL_QUERY_KEY, roomId],
    queryFn: () => {
      return getChatRoomDetail(roomId as string);
    },
    enabled: enabled && roomId !== 'undefined' && roomId !== null && roomId !== '',
  });

  return {
    data,
    isLoading,
    isError,
    error,
  };
};

export default useChatRoomDetail;
