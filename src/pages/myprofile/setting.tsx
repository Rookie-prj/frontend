import { useNavigate } from 'react-router-dom';
import rightArrow from '../../assets/icons/rightArrow.svg';
import { clearAuthData } from '../../api/token';
import { ROUTES } from '../../constants/routes';
import { LINKS } from '../../constants/links';
import ConfirmModal from '../../components/common/confirmModal/confirmModal';
import { useModal } from '../../hooks/useModal';
import Header from '../../components/header/header';
import * as S from './setting.styles';
import DeleteConfirmModal from '../../components/common/deleteModal/deleteConfirmModal';

const MyProfileSetting = () => {
  const navigate = useNavigate();
  const { isOpen, handleModalClose, handleModalOpen } = useModal();

  const handleLogout = () => {
    handleModalOpen();
  };

  const handleConfirmLogout = () => {
    clearAuthData();
    navigate(ROUTES.login);
  };

  const handleTerms = () => {
    window.open(LINKS.TERMS_OF_SERVICE, '_blank');
  };

  return (
    <>
      <S.Container>
        <div style={{ padding: '0', marginBottom: '16px' }}>
          <Header type="backdrop" />
        </div>
        <S.Title>설정</S.Title>

        <S.SettingItem onClick={handleLogout}>
          <S.SettingText>로그아웃하기</S.SettingText>
          <S.IconImage src={rightArrow} alt="arrow" />
        </S.SettingItem>

        <S.SettingItem onClick={handleTerms}>
          <S.SettingText>이용약관</S.SettingText>
          <S.IconImage src={rightArrow} alt="arrow" />
        </S.SettingItem>
      </S.Container>

      <DeleteConfirmModal
        isOpen={isOpen}
        onClose={handleModalClose}
        onConfirm={handleConfirmLogout}
        message="정말 로그아웃하시겠어요?"
      />
    </>
  );
};

export default MyProfileSetting;
