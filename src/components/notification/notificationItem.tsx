import React from 'react';
import * as S from './notificationItem.styles';
import { Notification } from '../../models/notification';
import fire from '../../assets/img/fire.svg';
import getNotificationTitle from './util/getNotificationTitle';
import { useNavigate } from 'react-router-dom';
import formatTimeAgo from './util/formatTimeAgo';
import getWhereToGo from './util/getWhereTogo';

interface NotificationItemProps {
  notification: Notification;
  onClick?: () => void;
}

/**
 * 개별 알림 아이템 컴포넌트
 */
export const NotificationItem: React.FC<NotificationItemProps> = ({ notification, onClick }) => {
  const navigate = useNavigate();

  const whereToGo = getWhereToGo(
    notification.message,
    notification.supporterId,
    notification.projectId,
  );
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(whereToGo);
  };

  return (
    <S.NotificationItemContainer onClick={handleClick} isUnread={!notification.read}>
      <S.IconWrapper>
        <img src={fire} alt="알림 아이콘" width={18} height={18} />
      </S.IconWrapper>
      <S.ContentWrapper>
        <S.TitleAndMessageWrapper>
          <S.Title>{getNotificationTitle(notification.message)}</S.Title>
          <S.Message>{notification.message}</S.Message>
        </S.TitleAndMessageWrapper>
        <S.TimeStamp>{formatTimeAgo(notification.createdAt)}</S.TimeStamp>
      </S.ContentWrapper>
    </S.NotificationItemContainer>
  );
};
