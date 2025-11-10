import React from 'react';
import * as S from './notificationList.styles';
import { NotificationItem } from './notificationItem';
import { Notification } from '../../models/notification';
import EmptyState from '../../components/common/emptyState';
import rookieyGray from '../../assets/icons/rookieGray.svg';

interface NotificationListProps {
  notifications: Notification[];
  onNotificationClick?: (notification: Notification) => void;
}

export const NotificationList: React.FC<NotificationListProps> = ({
  notifications,
  onNotificationClick,
}) => {
  if (notifications.length === 0) {
    return (
      <div style={{ height: '80vh', display: 'flex', alignItems: 'center' }}>
        <EmptyState icon={rookieyGray} message={`아직 도착한 \n 알림이 없어요`} />
      </div>
    );
  }
  return (
    <S.NotificationListContainer>
      {notifications.map((notification) => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onClick={() => onNotificationClick?.(notification)}
        />
      ))}
    </S.NotificationListContainer>
  );
};
