import { ChatRoom as ChatRoomType } from '../../models/chat';
import ChatCard from './chatCard';
import { CHAT_MESSAGES } from '../../constants/chat';
import { useMyProfileDetail } from '../../hooks/useMyProfile';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import { useMarkMessagesReadMutation } from './hook/useMarkMessagesReadMutation';

interface ChatCardListProps {
  chatRooms: ChatRoomType[];
}

function ChatCardList({ chatRooms }: ChatCardListProps) {
  const { profile } = useMyProfileDetail();
  const { handleMarkMessagesAsRead } = useMarkMessagesReadMutation();
  const navigate = useNavigate();

  const getOtherParticipants = (participants: ChatRoomType['participants']) => {
    // 자기 자신을 제외한 다른 참여자들
    return participants.filter((p) => p.userId !== profile?.userId);
  };

  const handleMessageAsRead = (roomId: string) => {
    handleMarkMessagesAsRead(roomId);
    navigate(`${ROUTES.chat}/${roomId}`);
  };
  return (
    <>
      {chatRooms.map((room) => {
        const otherParticipants = getOtherParticipants(room.participants);
        const userName =
          otherParticipants.length === 1
            ? otherParticipants[0].name
            : `참여자 ${room.participants.length}명`;
        const profileImageUrl = otherParticipants[0]?.profileImageUrl;
        const lastMessageContent = room.lastMessage?.content || CHAT_MESSAGES.NO_MESSAGE;

        return (
          <ChatCard
            key={room.id}
            userId={otherParticipants[0].userId}
            userName={userName}
            lastMessage={lastMessageContent}
            unreadCount={room.unreadCount}
            profileImage={profileImageUrl}
            onClick={() => handleMessageAsRead(room.id)}
          />
        );
      })}
    </>
  );
}

export default ChatCardList;
