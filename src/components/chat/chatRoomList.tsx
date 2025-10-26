import { ChatRoom as ChatRoomType } from '../../models/chat';
import ChatRoom from './chatRoom';
import { CHAT_MESSAGES } from '../../constants/chat';

interface ChatRoomListProps {
  chatRooms: ChatRoomType[];
}

function ChatRoomList({ chatRooms }: ChatRoomListProps) {
  return (
    <>
      {chatRooms.map((room) => (
        <ChatRoom
          key={room.id}
          userName={room.userName || `참여자 ${room.participants.length}명`}
          lastMessage={room.lastMessage || CHAT_MESSAGES.NO_MESSAGE}
          unreadCount={room.unreadCount}
        />
      ))}
    </>
  );
}

export default ChatRoomList;
