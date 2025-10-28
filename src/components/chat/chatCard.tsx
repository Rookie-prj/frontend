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

interface ChatCardProps {
  userId: number;
  userName: string;
  lastMessage: string;
  unreadCount: number;
  profileImage?: string;
  onClick?: () => void;
}

function ChatCard({
  userId,
  userName,
  lastMessage,
  unreadCount,
  profileImage,
  onClick,
}: ChatCardProps) {
  const handleClick = () => {
    localStorage.setItem('otherUserId', userId.toString());
    localStorage.setItem('otherUserName', userName);
    onClick?.();
  };

  const cleanLastMessage = lastMessage.replace(/^["']|["']$/g, '');
  return (
    <Container onClick={handleClick}>
      <ContentWrapper>
        <ProfileImage>
          <img src={profileImage || profileEx} alt="profile" />
        </ProfileImage>
        <MessageContent>
          <UserName>{userName}</UserName>
          <LastMessage>{cleanLastMessage}</LastMessage>
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

export default ChatCard;
