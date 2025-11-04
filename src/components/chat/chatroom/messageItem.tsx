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
  const isFileMessage = cleanContent.includes('포트폴리오');

  const handleGotoProfile = () => {
    // 프로필 보기 버튼 클릭 시 동작 구현
    navigate(`/explore/rookie/${message.senderId}`);
  };

  const handleDownload = () => {
    if (!message.fileUrl) {
      console.error('파일 URL이 없습니다.');
      return;
    }

    // 파일 다운로드
    const link = document.createElement('a');
    link.href = message.fileUrl;
    link.download = message.fileName || '다운로드_파일';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
        {!isProfileMessage && !isFileMessage && (
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
        {isFileMessage && (
          <S.FileMessageContainer isMyMessage={isMyMessage}>
            <S.FileInfo>
              <S.FileName>
                {message.fileName || cleanContent.split(':')[1]?.trim() || '파일'}
              </S.FileName>
            </S.FileInfo>
            <S.DownloadButton onClick={handleDownload}>
              <S.DownloadIcon>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M9 2V12M9 12L5 8M9 12L13 8M3 16H15"
                    stroke="#4A5565"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </S.DownloadIcon>
              <S.DownloadText>다운받기</S.DownloadText>
            </S.DownloadButton>
          </S.FileMessageContainer>
        )}
      </div>
    </S.MessageWrapper>
  );
}

export default MessageItem;
