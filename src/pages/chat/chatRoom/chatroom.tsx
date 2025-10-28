import { Client } from '@stomp/stompjs';
import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useChatMessages } from '../../../hooks/useChatMessages';
import MessageItem from '../../../components/chat/chatroom';
import ChatInput from '../../../components/chat/chatInput';
import * as S from './chatroom.styles';
import { Loading } from '../../../components/common/loading';
import { useMyProfileDetail } from '../../../hooks/useMyProfile';
import useMessageMutation, {
  getRoomIdFromLocalStorage,
} from '../../../components/chat/hook/useMessageMutation';
import ChatRoomHeader from '../../../components/chat/chatroom/header';

function Chatroom() {
  const { id } = useParams();
  const { messages, isLoading, error, refetch } = useChatMessages({
    roomId: id as string,
    refetchInterval: 500,
  });
  const { profile } = useMyProfileDetail();
  const roomId = getRoomIdFromLocalStorage();
  const otherUserId = localStorage.getItem('otherUserId');
  const { handleSendMessage } = useMessageMutation();
  const messageEndRef = useRef<HTMLDivElement>(null);

  // 메시지가 변경될 때마다 스크롤을 맨 아래로 이동
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessageToRoom = (content: string) => {
    handleSendMessage({ targetUserId: Number(otherUserId), content, roomId: id as string });
  };

  if (isLoading) {
    return (
      <div>
        <Loading showText={true} />
      </div>
    );
  }

  return (
    <S.chatRoomsContainer>
      <ChatRoomHeader />
      <S.MessageContainer>
        {messages.map((message) => (
          <MessageItem key={message.id} message={message} />
        ))}
        <div ref={messageEndRef} />
      </S.MessageContainer>
      <S.InputWrapper>
        <ChatInput onSendMessage={handleSendMessageToRoom} />
      </S.InputWrapper>
    </S.chatRoomsContainer>
  );
}

export default Chatroom;
