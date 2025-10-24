import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { IntroContainer, IntroContent } from './intro.styles';
import RookieLogo from '../../assets/img/rookie-logo.svg';

const Intro = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 1000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <IntroContainer>
      <IntroContent>
        <img src={RookieLogo} alt="Rookie Logo" />
      </IntroContent>
    </IntroContainer>
  );
};

export default Intro;
