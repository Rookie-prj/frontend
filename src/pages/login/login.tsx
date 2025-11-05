import { SignupLayout } from '../../components/layout/signupLayout/signupLayout';
import Input from '../../components/common/input/input';
import { useSignupStore } from '../../store/signupStore';
import { SIGNUP } from '../../constants/signup';
import { useState } from 'react';
import { loginUser } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { saveAccessToken, saveUserInfo } from '../../api/token';
import { SignupLink } from '../onboarding/onboarding';
import RedirectModal from '../../components/rookieDetail/redirectModal';
import { useModal } from '../../hooks/useModal';
import HttpError from '../../api/httpError';

const Login = () => {
  const { email, password, setEmail, setPassword } = useSignupStore();
  const [emailValue, setEmailValue] = useState(email || '');
  const [passwordValue, setPasswordValue] = useState(password || '');
  const [isLoading, setIsLoading] = useState(false);
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const navigate = useNavigate();

  const handleEmailChange = (value: string) => {
    setEmailValue(value);
    setEmail(value);
  };

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
    setPassword(value);
  };

  const handleLogin = async () => {
    try {
      setIsLoading(true);

      const loginData = {
        emailId: emailValue,
        password: passwordValue,
      };

      const result = await loginUser(loginData);

      console.log('✅ 로그인 API 응답:', result);

      // API 응답이 성공적이면 (HTTP 200) 로그인 성공으로 간주
      console.log('🎉 로그인이 완료되었습니다!');

      // 액세스 토큰이 있다면 저장 (localStorage)
      if (result.accessToken) {
        saveAccessToken(result.accessToken);
        console.log('🔐 액세스 토큰 저장 완료');
      }

      // 사용자 정보가 있다면 저장
      if (result.user) {
        saveUserInfo(result.user);
        console.log('👤 사용자 정보 저장 완료:', result.user);
      }
      console.log('🏠 /home으로 리다이렉트 시도');
      navigate('/home');
      console.log('✅ navigate 호출 완료');
    } catch (error) {
      if (error instanceof HttpError && error.status === 500) {
        handleModalOpen();
      }
      console.error('❌ 로그인 실패:', error);
      //alert('로그인 중 오류가 발생했습니다. 이메일과 비밀번호를 확인해주세요.');
    } finally {
      setIsLoading(false);
    }
  };

  const isFormValid = emailValue.trim() !== '' && passwordValue.trim() !== '';

  return (
    <>
      <SignupLayout
        title="로그인"
        stepBar={false}
        onNext={handleLogin}
        headerType="backdrop"
        buttonText={isLoading ? '로그인 중...' : '로그인'}
        buttonVariant="signup"
        isFormValid={isFormValid && !isLoading}
      >
        <div
          style={{ display: 'flex', flexDirection: 'column', gap: '0.88rem', marginTop: '1.44rem' }}
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
        <RedirectModal
          isOpen={isOpen}
          onClose={handleModalClose}
          redirectTo="/signup"
          title={
            <span>
              가입된 계정이 없어요.
              <br />
              지금 바로 루키로 시작해볼까요?
            </span>
          }
          buttonText="회원가입하기"
        />
        <SignupLink href="/signup" $justifyContent="flex-start" style={{ marginTop: '0.75rem' }}>
          회원가입하기
        </SignupLink>
      </SignupLayout>
      <RedirectModal
        isOpen={isOpen}
        onClose={handleModalClose}
        redirectTo="/signup"
        title={
          <span>
            가입된 계정이 없어요.
            <br />
            지금 바로 루키로 시작해볼까요?
          </span>
        }
        buttonText="회원가입하기"
      />
    </>
  );
};

export default Login;
