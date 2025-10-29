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

        // otherParticipants가 비어있거나 첫 번째 참여자가 없으면 렌더링하지 않음
        if (otherParticipants.length === 0 || !otherParticipants[0]) {
          return null;
        }

        const firstParticipant = otherParticipants[0];
        const userName =
          otherParticipants.length === 1
            ? firstParticipant.name
            : `참여자 ${room.participants.length}명`;
        const profileImageUrl = firstParticipant.profileImageUrl;
        const lastMessageContent = room.lastMessage?.content || CHAT_MESSAGES.NO_MESSAGE;

        return (
          <ChatCard
            key={room.id}
            userId={firstParticipant.userId}
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
