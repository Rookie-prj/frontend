import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useChatMessages } from '../../../components/chat/hook/useChatMessages';
import MessageItem from '../../../components/chat/chatroom';
import ChatInput from '../../../components/chat/chatInput';
import * as S from './chatroom.styles';
import { Loading } from '../../../components/common/loading';
import useMessageMutation from '../../../components/chat/hook/useMessageMutation';
import ChatRoomHeader from '../../../components/chat/chatroom/header';
import useChatRoomDetail from '../../../components/chat/hook/useChatRoomDetail';
import { ChatRoom as ChatRoomType } from '../../../models/chat';

function Chatroom() {
  const { id } = useParams();
  const { messages, isLoading } = useChatMessages({
    roomId: id as string,
    refetchInterval: 500,
  });
  const otherUserId = localStorage.getItem('otherUserId');
  const { handleSendMessage } = useMessageMutation();
  const messageEndRef = useRef<HTMLDivElement>(null);
  const { data: chatRoomDetail } = useChatRoomDetail({
    roomId: id as string,
  });

  const participantProfile = chatRoomDetail?.participants?.find(
    (p) => p.userId === Number(otherUserId),
  );
  const participantName = participantProfile?.name || '';
  const profileImage = participantProfile?.profileImageUrl || '';

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
          <MessageItem
            key={message.id}
            participantName={participantName}
            profileImage={profileImage}
            message={message}
          />
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
