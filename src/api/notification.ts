import { apiClient } from '../api';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { NotificationList } from '../models';

/**
 * 읽지 않은 알림 목록 조회
 */
export const getUnreadNotifications = async (): Promise<NotificationList> => {
  return apiClient.get<NotificationList>(API_ENDPOINT.NOTIFICATIONS_UNREAD);
};

/**
 * 특정 알림을 읽음 처리
 * @param notificationId 읽음 처리할 알림 ID
 */
export const markNotificationAsRead = async (notificationId: number): Promise<void> => {
  return apiClient.patch<void>(`/api/notifications/${notificationId}/read`);
};
