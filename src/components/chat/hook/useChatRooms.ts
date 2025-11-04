import { useQuery } from '@tanstack/react-query';
import { getMyChatRooms } from '../../../api/chat';

export const CHAT_ROOMS_QUERY_KEY = 'chatRooms';

const useChatRooms = () => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [CHAT_ROOMS_QUERY_KEY],
    queryFn: () => getMyChatRooms(),
  });

  return {
    chatRooms: data ?? [],
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useChatRooms;
