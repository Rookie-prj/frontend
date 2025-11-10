import RookieCard from '../../components/rookie/rookieCard/rookieCard';
import { Loading } from '../../components/common/loading';
import { RookieStats, RookieInfoSection } from '../../components/rookieDetail';
import { FixedBottomBar } from '../../components/common/FixedBottomBar';
import RedirectModal from '../../components/rookieDetail/redirectModal';
import { useModal } from '../../hooks/useModal';
import { useState } from 'react';
import { REDIRECT_LOGIN_MESSAGE } from '../../utils/messageTemplate';
import { ROUTES } from '../../constants/routes';
import { getAccessToken } from '../../api/token';
import { useMyProfileDetail } from '../../hooks/useMyProfile';
import Button from '../../components/common/button/button';
import { useNavigate } from 'react-router-dom';
import { MyProfileHeader } from '../../components/myprofile';
import * as S from './index.styles';

function MyProfile() {
  const navigate = useNavigate();
  const {
    isOpen: isRedirectOpen,
    handleModalOpen: handleRedirectOpen,
    handleModalClose: handleRedirectClose,
  } = useModal();

  const { profile, isLoading, isError } = useMyProfileDetail();
  const accessToken = getAccessToken();
  const [loginState, setLoginState] = useState<boolean>(accessToken ? true : false); // 임시 로그인 상태

  if (isLoading) {
    return <Loading />;
  }

  return (
    <S.MyProfileContainer>
      <MyProfileHeader />
      {profile && <RookieCard rookie={profile} type="detail" />}

      <S.StatsWrapper>
        {profile && (
          <RookieStats
            publicPortfolioCount={profile.publicPortfolioCount}
            responseRate={profile.responseRate}
            passionMeter={profile.passionMeter}
          />
        )}
      </S.StatsWrapper>

      {profile && <RookieInfoSection rookie={profile} />}

      <S.ButtonWrapper>
        <Button
          variant="primary"
          onClick={() => navigate(`${ROUTES.signup}?signup.step=currentStudyDetail`)}
        >
          내 프로필 수정하기
        </Button>
      </S.ButtonWrapper>

      {/* 추후 로그인 상태로 제어 */}
      <RedirectModal
        isOpen={isRedirectOpen}
        onClose={handleRedirectClose}
        title={REDIRECT_LOGIN_MESSAGE}
        redirectTo={ROUTES.login}
      />
    </S.MyProfileContainer>
  );
}

export default MyProfile;
