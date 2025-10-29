import { useMutation } from '@tanstack/react-query';
import { postUserCheerUp } from '../api/postCheerup';

interface UseUserCheerUpMutationOptions {
  onSuccess?: (message: string) => void;
  onError?: (message: string) => void;
}

export const useUserCheerUpMutation = (options?: UseUserCheerUpMutationOptions) => {
  const userCheerupMutation = useMutation({
    mutationFn: (targetUserId: number) => {
      const response = postUserCheerUp({ targetUserId });
      return response;
    },
    onSuccess: (data) => {
      const message = '응원이 전달됐어요! 루키의 도전이 계속될 거예요.';
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
    onError: (error) => {
      const message = '이미 지지한 사용자에요';
      if (options?.onError) {
        options.onError(message);
      }
    },
  });

  const handleUserCheerUp = (targetUserId: number) => {
    userCheerupMutation.mutate(targetUserId);
  };

  return {
    handleUserCheerUp,
  };
};
