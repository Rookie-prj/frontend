import Button from '../../../components/common/button/button';
import { SIGNUP } from '../../../constants/signup';
import rookieGreenLogo from '../../../assets/img/rookie-green-logo.svg';
import { LogoContainer, WelcomeText } from './complete.styles';
import { useNavigate } from 'react-router-dom';
import { BaseContainerWithSpaceBetween } from '../../../components/container/container.styles';
export const Complete = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate('/');
  };

  return (
    <BaseContainerWithSpaceBetween>
      <LogoContainer>
        <img src={rookieGreenLogo} alt="Rookie Logo" />
        <WelcomeText>{SIGNUP.WELCOME}</WelcomeText>
      </LogoContainer>

      <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
        <Button onClick={handleNext} size="large">
          다음
        </Button>
      </div>
    </BaseContainerWithSpaceBetween>
  );
};
