import Button from '../../../components/common/button/button';
import { SIGNUP } from '../../../constants/signup';
import rookieGreenLogo from '../../../assets/img/rookie-green-logo.svg';
import { LogoContainer, WelcomeText } from './complete.styles';
import { useNavigate } from 'react-router-dom';
import { BaseContainerWithSpaceBetween } from '../../../components/container/container.styles';
import { useSignupStore } from '../../../store/signupStore';

interface CompleteProps {
  onSubmit: () => void;
}
export const Complete = ({ onSubmit }: CompleteProps) => {
  const navigate = useNavigate();
  const signupStore = useSignupStore();

  const handleSubmit = () => {
    console.log('=== signup Store 데이터 ===');
    console.log('전체 store 데이터:', signupStore);
    console.log('=======================');

    onSubmit();
    navigate('/');
  };

  return (
    <BaseContainerWithSpaceBetween>
      <LogoContainer>
        <img src={rookieGreenLogo} alt="Rookie Logo" />
        <WelcomeText>{SIGNUP.WELCOME}</WelcomeText>
      </LogoContainer>

      <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
        <Button onClick={handleSubmit} size="large">
          다음
        </Button>
      </div>
    </BaseContainerWithSpaceBetween>
  );
};
