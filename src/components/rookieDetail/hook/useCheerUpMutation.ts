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
      alert('지지 완료!');
    },
    onError: (error) => {
      //토스트로 변경
      alert('이미 지지한 사용자에요');
    },
  });

  const handleUserCheerUp = (targetUserId: number) => {
    userCheerupMutation.mutate(targetUserId);
  };

  return {
    handleUserCheerUp,
  };
};
