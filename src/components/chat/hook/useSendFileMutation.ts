import { useMutation, useQueryClient } from '@tanstack/react-query';
import { sendFileToChat } from '../../../api/chat';
import { ChatMessage } from '../../../models/chat';
import { CHAT_MESSAGES_QUERY_KEY } from './useChatMessages';
import { CHAT_ROOMS_QUERY_KEY } from './useChatRooms';

interface SendFileParams {
  targetUserId: number;
  content: string;
  file: File;
  roomId?: string;
}

interface UseSendFileMutationOptions {
  onSuccess?: (data: ChatMessage) => void;
  onError?: (error: Error) => void;
}

const useSendFileMutation = (options?: UseSendFileMutationOptions) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ targetUserId, content, file }: SendFileParams) =>
      sendFileToChat(targetUserId, content, file),
    onSuccess: (data, variables) => {
      // 채팅 메시지 쿼리 무효화하여 새로고침
      if (variables.roomId) {
        queryClient.invalidateQueries({
          queryKey: [CHAT_MESSAGES_QUERY_KEY, variables.roomId],
        });
      }
      queryClient.invalidateQueries({
        queryKey: [CHAT_ROOMS_QUERY_KEY],
      });

      options?.onSuccess?.(data);
    },
    onError: (error: Error) => {
      console.error('파일 전송 실패:', error);
      options?.onError?.(error);
    },
  });

  const handleSendFile = ({ targetUserId, content, file, roomId }: SendFileParams) => {
    mutation.mutate({ targetUserId, content, file, roomId });
  };

  return {
    handleSendFile,
    isLoading: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useSendFileMutation;
