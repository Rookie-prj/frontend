import { useNavigate } from 'react-router-dom';
import leftArrow from '../../assets/icons/profile-backdrop.svg';
import setting from '../../assets/icons/setting.svg';
import styled from '@emotion/styled';
import { ROUTES } from '../../constants/routes';

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 2.4375rem;
  padding-top: 0.28rem;
  padding-right: 16px;
  padding-left: 5px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2.5rem;
  flex-shrink: 0;
`;

const Title = styled.h3`
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: #030712;
  margin: 0;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyProfileHeader = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleSettings = () => {
    navigate(ROUTES.myprofileSetting);
  };

  return (
    <HeaderContainer>
      <IconButton onClick={handleBack}>
        <img src={leftArrow} alt="back" width={40} height={40} />
      </IconButton>
      <Title>나의 프로필</Title>
      <IconButton onClick={handleSettings}>
        <img src={setting} alt="settings" width={28} height={28} />
      </IconButton>
    </HeaderContainer>
  );
};

export default MyProfileHeader;
