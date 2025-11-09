import { useMutation, useQueryClient } from '@tanstack/react-query';
import { markNotificationAsRead } from '../api/notification';
import { NOTIFICATION_KEY } from './key';

/**
 * 특정 알림 읽음 처리 mutation 훅
 */
export const useMarkNotificationAsRead = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (notificationId: number) => markNotificationAsRead(notificationId),
    onSuccess: () => {
      // 알림 목록 쿼리 무효화하여 새로고침
      queryClient.invalidateQueries({
        queryKey: [NOTIFICATION_KEY.unread, NOTIFICATION_KEY.all],
      });
    },
    onError: (error: Error) => {
      console.error('알림 읽음 처리 실패:', error);
    },
  });
};
