import {
  Container,
  ContentWrapper,
  ProfileImage,
  MessageContent,
  UserName,
  LastMessage,
  Badge,
  BadgeText,
} from './chatRoom.styles';
import profileEx from '../../assets/icons/profileEx.svg';

interface ChatRoomProps {
  userName: string;
  lastMessage: string;
  unreadCount: number;
  profileImage?: string;
}

function ChatRoom({ userName, lastMessage, unreadCount }: ChatRoomProps) {
  return (
    <Container>
      <ContentWrapper>
        <ProfileImage>
          <img src={profileEx} alt="profile" />
        </ProfileImage>
        <MessageContent>
          <UserName>{userName}</UserName>
          <LastMessage>{lastMessage}</LastMessage>
        </MessageContent>
        {unreadCount > 0 && (
          <Badge>
            <BadgeText>{unreadCount > 99 ? '99+' : unreadCount}</BadgeText>
          </Badge>
        )}
      </ContentWrapper>
    </Container>
  );
}

export default ChatRoom;
