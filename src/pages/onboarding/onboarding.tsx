import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';
import Button from '../../components/common/button/button';
import Questions from '../../components/createProject/common/questions/questions';
import { INTRO_SLIDES } from '../../constants/intro';
import RookieGreenLogo from '../../assets/img/rookie-green-logo.svg';

const OnboardingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 0 1rem;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-top: 4rem;
`;

const TitleContainer = styled.div`
  text-align: center;
  margin-top: 0.69rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.span`
  color: ${colors.gray[900]};
  text-align: center;
  font-size: ${typography.headline.headline4.fontSize};
  font-weight: ${typography.headline.headline4.fontWeight};
  line-height: ${typography.headline.headline4.lineHeight};
  letter-spacing: ${typography.headline.headline4.letterSpacing};
`;

const GifContainer = styled.div`
  width: 14.89975rem;
  height: 14.03075rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const GifWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const GifImage = styled.img<{ $isActive: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
  position: absolute;
`;

const ProgressDots = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const Dot = styled.div<{ $isActive: boolean }>`
  width: 6.909px;
  height: 6.909px;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? colors.gray[950] : colors.gray[300])};
  transition: background-color 0.3s ease;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  margin-top: auto;
  margin-bottom: 3.19rem;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;
const SignupLink = styled.a`
  text-decoration: underline;
  display: flex;
  justify-content: center;
  text-underline-offset: 2px;
  color: ${colors.gray[600]};
  font-size: ${typography.caption.caption3.fontSize};
  font-style: normal;
  font-weight: ${typography.caption.caption3.fontWeight};
  line-height: ${typography.caption.caption3.lineHeight};
  letter-spacing: ${typography.caption.caption3.letterSpacing};
`;

const Onboarding = () => {
  const navigate = useNavigate();
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % INTRO_SLIDES.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleLogin = () => {
    navigate('/login');
  };

  const handleGuest = () => {
    navigate('/home');
  };

  return (
    <OnboardingContainer>
      <ContentContainer>
        <Questions
          number={
            INTRO_SLIDES[currentSlideIndex].id === 1
              ? 'one'
              : INTRO_SLIDES[currentSlideIndex].id === 2
              ? 'two'
              : INTRO_SLIDES[currentSlideIndex].id === 3
              ? 'three'
              : 'four'
          }
          justifyContent="center"
        />
        <TitleContainer>
          <Title>{INTRO_SLIDES[currentSlideIndex].title}</Title>
          {currentSlideIndex === 0 && (
            <LogoContainer>
              <img src={RookieGreenLogo} alt="Rookie Green Logo" />
              <Title>{INTRO_SLIDES[currentSlideIndex].subtitle}</Title>
            </LogoContainer>
          )}
          {currentSlideIndex !== 0 && <Title>{INTRO_SLIDES[currentSlideIndex].subtitle}</Title>}
        </TitleContainer>
      </ContentContainer>
      <GifWrapper>
        <GifContainer>
          {INTRO_SLIDES.map((slide, index) => (
            <GifImage
              key={index}
              src={slide.gif}
              alt={`Intro ${index + 1}`}
              $isActive={index === currentSlideIndex}
            />
          ))}
        </GifContainer>
        <ProgressDots>
          {INTRO_SLIDES.map((_, index) => (
            <Dot key={index} $isActive={index === currentSlideIndex} />
          ))}
        </ProgressDots>
      </GifWrapper>

      <ButtonContainer>
        <Button onClick={handleGuest} size="large" variant="gray">
          지금 바로 둘러보기
        </Button>
        <Button onClick={handleLogin} size="large" variant="primary">
          로그인하기
        </Button>
        <SignupLink href="/signup">회원가입하기</SignupLink>
      </ButtonContainer>
    </OnboardingContainer>
  );
};

export default Onboarding;
