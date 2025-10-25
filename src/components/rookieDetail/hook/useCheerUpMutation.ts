import { useMutation } from '@tanstack/react-query';
import { postUserCheerUp } from '../api/postCheerup';

export const useUserCheerUpMutation = () => {
  const userCheerupMutation = useMutation({
    mutationFn: (targetUserId: number) => {
      const response = postUserCheerUp({ targetUserId });
      return response;
    },
    onSuccess: (data) => {
      //토스트로 변경
      alert('Cheer up successful!');
    },
    onError: (error) => {
      //토스트로 변경
      alert('Cheer up failed. Please try again.');
    },
  });

  const handleUserCheerUp = (targetUserId: number) => {
    userCheerupMutation.mutate(targetUserId);
  };

  return {
    handleUserCheerUp,
  };
};
