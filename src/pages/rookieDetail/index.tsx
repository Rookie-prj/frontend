import { useNavigate, useParams } from 'react-router-dom';
import RookieCard from '../../components/rookie/rookieCard/rookieCard';
import Header from '../../components/header/header';
import useRookieDetail from '../../hooks/useRookieDetail';
import { Loading } from '../../components/common/loading';
import { RookieStats, RookieInfoSection } from '../../components/rookieDetail';
import { ProjectList } from '../../components/post';
import { FixedBottomBar } from '../../components/common/FixedBottomBar';
import RedirectModal from '../../components/rookieDetail/redirectModal';
import { useModal } from '../../hooks/useModal';
import CheerupModal from '../../components/rookieDetail/cheerupModal';
import { useState } from 'react';
import {
  CHEERUP_DESCRIPTION,
  CHEERUP_TITLE,
  REDIRECT_LOGIN_MESSAGE,
} from '../../utils/messageTemplate';
import { ROUTES } from '../../constants/routes';
import { useUserCheerUpMutation } from '../../components/rookieDetail/hook/useCheerUpMutation';
import { getAccessToken } from '../../api/token';
import useChatRooms from '../../hooks/useChatRooms';

function RookieDetail() {
  const { id } = useParams<{ id: string }>();
  const rookieId = Number(id);
  const {
    isOpen: isRedirectOpen,
    handleModalOpen: handleRedirectOpen,
    handleModalClose: handleRedirectClose,
  } = useModal();
  const {
    isOpen: isCheerupOpen,
    handleModalOpen: handleCheerupOpen,
    handleModalClose: handleCheerupClose,
  } = useModal();
  const { rookie, isLoading, isError } = useRookieDetail({ id: rookieId });
  const accessToken = getAccessToken();
  const [loginState, setLoginState] = useState<boolean>(accessToken ? true : false); // 임시 로그인 상태
  const { handleUserCheerUp } = useUserCheerUpMutation();
  localStorage.setItem('otherUserName', rookie?.name || '');
  localStorage.setItem('otherUserId', rookie?.userId.toString() || '');
  const { chatRooms } = useChatRooms();

  // 현재 rookie와 대화한 채팅방 찾기
  const findChatRoomId = () => {
    if (!rookie || !chatRooms || chatRooms.length === 0) {
      return undefined;
    }

    const existingChatRoom = chatRooms.find((room) =>
      room.participants.some((participant) => participant.userId === rookie.userId),
    );

    return existingChatRoom?.id;
  };

  const existingRoomId = findChatRoomId();
  console.log(existingRoomId);
  const navigate = useNavigate();
  if (isLoading) {
    return <Loading />;
  }

  const hadnleToChatRoom = () => {
    navigate(`${ROUTES.chat}/${existingRoomId}`);
  };

  return (
    <div style={{ paddingBottom: '100px' }}>
      <div style={{ marginLeft: '16px', marginBottom: '10px' }}>
        <Header type="backdrop" />
      </div>
      {rookie && <RookieCard rookie={rookie} type="detail" />}

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '27px' }}>
        {rookie && (
          <RookieStats
            publicPortfolioCount={rookie.publicPortfolioCount}
            responseRate={rookie.responseRate}
            passionMeter={rookie.passionMeter}
          />
        )}
      </div>
      {rookie && <RookieInfoSection rookie={rookie} />}
      <ProjectList limit={4} title="등록한 프로젝트" />
      <FixedBottomBar
        onSupport={loginState ? handleCheerupOpen : handleRedirectOpen}
        onMessage={loginState ? hadnleToChatRoom : handleRedirectOpen}
      />
      {/* 추후 로그인 상태로 제어 */}
      <RedirectModal
        isOpen={isRedirectOpen}
        onClose={handleRedirectClose}
        title={REDIRECT_LOGIN_MESSAGE}
        redirectTo={ROUTES.login}
      />

      {rookie && (
        <CheerupModal
          isOpen={isCheerupOpen}
          onClose={handleCheerupClose}
          onCheerUp={() => handleUserCheerUp(rookie.userId)}
          title={CHEERUP_TITLE(rookie.name)}
          description={CHEERUP_DESCRIPTION(rookie.name)}
        />
      )}
    </div>
  );
}

export default RookieDetail;
