import React from 'react';
import * as S from './messageItem.styles';
import { ChatMessage } from '../../../models/chat';
import { useMyProfileDetail } from '../../../hooks/useMyProfile';

interface MessageItemProps {
  message: ChatMessage;
}

/**
 * 채팅 메시지 아이템 컴포넌트
 * 내 메시지는 오른쪽 정렬, 다른 사람 메시지는 왼쪽 정렬
 */
function MessageItem({ message }: MessageItemProps) {
  const { profile } = useMyProfileDetail();
  const isMyMessage = message.senderId === profile?.userId;

  // 메시지 앞뒤 따옴표 제거
  const cleanContent = message.content.replace(/^["']|["']$/g, '');

  return (
    <S.MessageWrapper isMyMessage={isMyMessage}>
      <S.MessageBubble isMyMessage={isMyMessage}>{cleanContent}</S.MessageBubble>
    </S.MessageWrapper>
  );
}

export default MessageItem;
