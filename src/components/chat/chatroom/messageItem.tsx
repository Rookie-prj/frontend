import * as S from './messageItem.styles';
import { ChatMessage } from '../../../models/chat';
import { useMyProfileDetail } from '../../../hooks/useMyProfile';
import ProfileEx from '../../../assets/icons/profileEx.svg';

interface MessageItemProps {
  message: ChatMessage;
  participantName: string;
  profileImage: string;
}

/**
 * 채팅 메시지 아이템 컴포넌트
 * 내 메시지는 오른쪽 정렬, 다른 사람 메시지는 왼쪽 정렬
 */
function MessageItem({ message, participantName, profileImage }: MessageItemProps) {
  const { profile } = useMyProfileDetail();
  const isMyMessage = message.senderId === profile?.userId;
  const validateProfileImage = profileImage && profileImage !== '';
  // 메시지 앞뒤 따옴표 제거
  const cleanContent = message.content.replace(/^["']|["']$/g, '');

  return (
    <S.MessageWrapper isMyMessage={isMyMessage}>
      {!isMyMessage && (
        <S.ProfileImage src={validateProfileImage ? profileImage : ProfileEx} alt="profile" />
      )}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: isMyMessage ? 'flex-end' : 'flex-start',
        }}
      >
        {!isMyMessage && <S.ParticipantName>{participantName}</S.ParticipantName>}
        <S.MessageBubble isMyMessage={isMyMessage}>{cleanContent}</S.MessageBubble>
      </div>
    </S.MessageWrapper>
  );
}

export default MessageItem;
