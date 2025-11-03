/** @jsxImportSource @emotion/react */
import * as S from './messageItem.styles';
import { ChatMessage } from '../../../models/chat';
import { useMyProfileDetail } from '../../../hooks/useMyProfile';
import ProfileEx from '../../../assets/icons/profileEx.svg';
import profileDefault from '../../../assets/icons/rookieGray.svg';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const isMyMessage = message.senderId === profile?.userId;
  const validateProfileImage = profileImage && profileImage !== '';
  // 메시지 앞뒤 따옴표 제거
  const cleanContent = message.content.replace(/^["']|["']$/g, '');
  const isProfileMessage = cleanContent.includes('루키프로필 확인하기');

  const handleGotoProfile = () => {
    // 프로필 보기 버튼 클릭 시 동작 구현
    navigate(`/explore/rookie/${message.senderId}`);
  };

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
        {!isProfileMessage && (
          <S.MessageBubble isMyMessage={isMyMessage}>{cleanContent}</S.MessageBubble>
        )}
        {isProfileMessage && (
          <S.MessageBubble isMyMessage={isMyMessage}>
            {!isMyMessage && (
              <S.IsProfileMessageWrapper>
                <img
                  src={profileDefault}
                  alt="나의 프로필"
                  width={30}
                  height={30}
                  style={{ marginRight: '8px' }}
                />
                <>
                  {participantName}님이 당신에게 <br />
                  자신을 소개했어요!
                </>
                <S.ProfileButton
                  onClick={handleGotoProfile}
                  css={css`
                    border-radius: 999px;
                  `}
                >
                  루키 프로필 확인하기
                </S.ProfileButton>
              </S.IsProfileMessageWrapper>
            )}
            {isMyMessage && (
              <span style={{ display: 'flex', justifyContent: 'start', alignItems: 'center' }}>
                <img
                  src={profileDefault}
                  alt="나의 프로필"
                  width={30}
                  height={30}
                  style={{ marginRight: '8px' }}
                />
                나의 프로필을 보냈습니다.
              </span>
            )}
          </S.MessageBubble>
        )}
      </div>
    </S.MessageWrapper>
  );
}

export default MessageItem;
