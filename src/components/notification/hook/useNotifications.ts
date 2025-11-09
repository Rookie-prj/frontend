import { useQuery } from '@tanstack/react-query';
import { getALLNotifications } from '../api/notification';

/**
 * 읽지 않은 알림 목록 조회 훅
 */
export const useALLNotifications = () => {
  return useQuery({
    queryKey: ['notifications', 'unread'],
    queryFn: getALLNotifications,
    // 30초마다 자동으로 알림 목록 갱신
    refetchInterval: 30000,
    // 화면에 포커스될 때마다 갱신
    refetchOnWindowFocus: true,
  });
};
