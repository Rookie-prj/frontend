import React from 'react';
import * as S from './notificationItem.styles';
import { Notification } from '../../models/notification';
import fire from '../../assets/img/fire.svg';

interface NotificationItemProps {
  notification: Notification;
  onClick?: () => void;
}

/**
 * 개별 알림 아이템 컴포넌트
 */
export const NotificationItem: React.FC<NotificationItemProps> = ({ notification, onClick }) => {
  // 시간 포맷 함수
  const formatTimeAgo = (dateString: string): string => {
    const now = new Date();
    const date = new Date(dateString);
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMinutes < 1) {
      return '방금 전';
    } else if (diffInMinutes < 60) {
      return `${diffInMinutes}분 전`;
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else if (diffInDays < 7) {
      return `${diffInDays}일 전`;
    } else {
      return date.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    }
  };

  // 알림 타입별 타이틀 추출 (임시로 "루키 응원 알림"으로 설정)
  const getNotificationTitle = (message: string): string => {
    if (message.includes('응원')) return '루키 응원 알림';
    if (message.includes('지원')) return '프로젝트 지원 알림';
    if (message.includes('댓글')) return '댓글 알림';
    if (message.includes('초대')) return '프로젝트 초대 알림';
    if (message.includes('메시지')) return '새 메시지 알림';
    if (message.includes('마감')) return '프로젝트 마감 알림';
    if (message.includes('업데이트')) return '프로젝트 업데이트 알림';
    if (message.includes('조회')) return '포트폴리오 조회 알림';
    return '알림';
  };

  return (
    <S.NotificationItemContainer onClick={onClick} isUnread={!notification.read}>
      <S.IconWrapper>
        <img src={fire} alt="알림 아이콘" width={16} height={16} />
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
