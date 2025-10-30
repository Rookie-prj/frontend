import Button from '../../../components/common/button/button';
import { SIGNUP } from '../../../constants/signup';
import rookieGreenLogo from '../../../assets/img/rookie-green-logo.svg';
import { LogoContainer, WelcomeText } from './complete.styles';
import { useNavigate } from 'react-router-dom';
import { BaseContainerWithSpaceBetween } from '../../../components/container/container.styles';
import { useSignupStore } from '../../../store/signupStore';
import { useState } from 'react';
import onboardingComplete from '../../../assets/img/onboarding-complete.svg';
interface CompleteProps {
  onSubmit: () => void;
}
export const Complete = ({ onSubmit }: CompleteProps) => {
  const navigate = useNavigate();
  const signupStore = useSignupStore();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setIsLoading(true);

      console.log('=== signup Store 데이터 ===');
      console.log('전체 store 데이터:', signupStore);
      console.log('=======================');

      // 회원가입 API 호출
      await onSubmit();
      navigate('/home');
    } catch (error) {
      console.error('❌ 회원가입 완료 처리 중 오류:', error);
      // 에러가 발생해도 로딩 상태는 해제
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <BaseContainerWithSpaceBetween>
      <LogoContainer>
        <img src={rookieGreenLogo} alt="Rookie Logo" />

        <WelcomeText>{SIGNUP.WELCOME}</WelcomeText>
        <div style={{ marginTop: '2.924rem' }}>
          <img src={onboardingComplete} alt="Onboarding Complete" />
        </div>
      </LogoContainer>
      <div style={{ marginBottom: '1.7rem', marginTop: '1.7rem' }}>
        <Button onClick={handleSubmit} size="large" disabled={isLoading}>
          {isLoading ? '회원가입 중...' : '다음'}
        </Button>
      </div>
    </BaseContainerWithSpaceBetween>
  );
};
