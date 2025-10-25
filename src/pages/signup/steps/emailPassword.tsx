import { SignupLayout } from '../../../components/layout/signupLayout/signupLayout';
import Input from '../../../components/common/input/input';
import { useSignupStore } from '../../../store/signupStore';
import { SIGNUP } from '../../../constants/signup';
import { useState } from 'react';

interface EmailPasswordProps {
  onNext: () => void;
  onPrev?: () => void;
  currentStep: number;
}

export const EmailPassword = ({ onNext, currentStep }: EmailPasswordProps) => {
  const { email, password, setEmail, setPassword } = useSignupStore();
  const [emailValue, setEmailValue] = useState(email || '');
  const [passwordValue, setPasswordValue] = useState(password || '');

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
    setPassword(value);
  };

  const isFormValid = emailValue.trim() !== '' && passwordValue.trim() !== '';

  return (
    <SignupLayout
      title={SIGNUP.REQUIRED_EMAIL_AND_PASSWORD}
      stepBar={false}
      onNext={onNext}
      headerType="backdrop"
      buttonText="회원가입"
      buttonVariant="signup"
      isFormValid={isFormValid}
    >
      <div
        style={{ display: 'flex', flexDirection: 'column', gap: '0.88rem', marginTop: '3.94rem' }}
      >
        <Input
          placeholder="이메일"
          showCharacterCount={false}
          showMaxLength={false}
          value={emailValue}
          onChange={handleEmailChange}
          type="email"
        />
        <Input
          placeholder="비밀번호"
          showCharacterCount={false}
          showMaxLength={false}
          value={passwordValue}
          onChange={handlePasswordChange}
          type="password"
        />
      </div>
    </SignupLayout>
  );
};
