import { useParams } from 'react-router-dom';
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
import { getAccessToken } from '../../api/token';

function MyProfile() {
  const { id } = useParams<{ id: string }>();
  const rookieId = Number(id);
  const {
    isOpen: isRedirectOpen,
    handleModalOpen: handleRedirectOpen,
    handleModalClose: handleRedirectClose,
  } = useModal();

  const { rookie, isLoading, isError } = useRookieDetail({ id: rookieId });
  const accessToken = getAccessToken();
  const [loginState, setLoginState] = useState<boolean>(accessToken ? true : false); // 임시 로그인 상태

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !rookie) {
    return (
      <div>
        <div style={{ marginLeft: '16px', marginBottom: '10px' }}>
          <Header type="backdrop" />
        </div>
        <div style={{ padding: '20px', textAlign: 'center' }}>
          루키 정보를 불러오는데 실패했습니다.
        </div>
      </div>
    );
  }

  return (
    <div style={{ paddingBottom: '100px' }}>
      <div style={{ marginLeft: '16px', marginBottom: '10px' }}>
        <Header type="backdrop" />
      </div>
      <RookieCard rookie={rookie} type="detail" />

      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '27px' }}>
        <RookieStats
          publicPortfolioCount={rookie.publicPortfolioCount}
          responseRate={rookie.responseRate}
          passionMeter={rookie.passionMeter}
        />
      </div>
      <RookieInfoSection rookie={rookie} />
      <ProjectList limit={4} title="등록한 프로젝트" />
      <FixedBottomBar
        onSupport={() => console.log('support')}
        onMessage={() => console.log('message')}
      />
      {/* 추후 로그인 상태로 제어 */}
      <RedirectModal
        isOpen={isRedirectOpen}
        onClose={handleRedirectClose}
        title={REDIRECT_LOGIN_MESSAGE}
        redirectTo={ROUTES.login}
      />
    </div>
  );
}

export default MyProfile;
