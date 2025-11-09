import { useNavigate } from 'react-router-dom';
import backdrop from '../../../assets/icons/backdrop.svg';
import { BackDropContainer, BackDropWithSkipContainer, BackDropImage } from './backDrop.styles';
import { ROUTES } from '../../../constants/routes';

interface BackDropProps {
  variant?: 'default' | 'white';
}

const BackDrop = ({ variant = 'default' }: BackDropProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <BackDropContainer onClick={handleClick}>
      <BackDropImage src={backdrop} alt="backdrop" $variant={variant} />
    </BackDropContainer>
  );
};

export default BackDrop;

export const BackDropWithSkip = () => {
  const navigate = useNavigate();
  const handleSkip = () => {
    navigate(ROUTES.home);
  };
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <BackDropWithSkipContainer onClick={handleClick}>
      <BackDropImage src={backdrop} alt="backdrop" onClick={handleSkip} $variant="default" />
      <p>건너뛰기</p>
    </BackDropWithSkipContainer>
  );
};
