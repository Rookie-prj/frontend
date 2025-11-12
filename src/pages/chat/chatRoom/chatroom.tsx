import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useChatMessages } from '../../../components/chat/hook/useChatMessages';
import MessageItem from '../../../components/chat/chatroom';
import ChatInput from '../../../components/chat/chatInput';
import * as S from './chatroom.styles';
import useMessageMutation from '../../../components/chat/hook/useMessageMutation';
import ChatRoomHeader from '../../../components/chat/chatroom/header';
import useChatRoomDetail from '../../../components/chat/hook/useChatRoomDetail';
import { Chip } from '../../../components/common/chip';
import clip from '../../../assets/icons/portFolioclip.svg';
import PortfolioBottomSheet from '../../../components/chat/portfolioBottomSheet/portfolioBottomSheet';
import ProfileSendBottomSheet from '../../../components/chat/profileSendBottomSheet/profileSendBottomSheet';
import { useModal } from '../../../hooks/useModal';
import useSendFileMutation from '../../../components/chat/hook/useSendFileMutation';

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

  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const {
    isOpen: isProfileModalOpen,
    handleModalOpen: handleProfileModalOpen,
    handleModalClose: handleProfileModalClose,
  } = useModal();

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

  const { handleSendFile } = useSendFileMutation({
    onSuccess: () => {
      console.log('파일 전송 성공');
    },
    onError: (error) => {
      console.error('파일 전송 실패:', error);
    },
  });

  const handleGiveProfile = () => {
    const profileMessage = `루키프로필 확인하기`;
    handleSendMessageToRoom(profileMessage);
    handleProfileModalClose();
  };

  const handleFileSelected = (file: File) => {
    handleSendFile({
      targetUserId: Number(otherUserId),
      content: '포트폴리오를 보냅니다',
      file: file,
      roomId: id,
    });
  };

  return (
    <>
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
          <div style={{ display: 'flex', gap: '6px', marginBottom: '8px' }}>
            <Chip
              label="내 프로필 보내기"
              size="large"
              variant="chatRoomProfile"
              onClick={handleProfileModalOpen}
            />
            <Chip
              label={
                <>
                  <img src={clip} alt="clip" style={{ marginRight: '6px' }} />
                  포트폴리오 PDF 보내기
                </>
              }
              onClick={handleModalOpen}
              variant="chatRoomPdf"
              size="large"
              isActive={true}
            />
          </div>

          <ChatInput onSendMessage={handleSendMessageToRoom} />
        </S.InputWrapper>
      </S.chatRoomsContainer>
      <PortfolioBottomSheet
        isOpen={isOpen}
        onClose={handleModalClose}
        onFileSelected={handleFileSelected}
      />
      <ProfileSendBottomSheet
        isOpen={isProfileModalOpen}
        onClose={handleProfileModalClose}
        onConfirm={handleGiveProfile}
      />
    </>
  );
}

export default Chatroom;
