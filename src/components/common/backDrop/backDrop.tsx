import { useNavigate } from 'react-router-dom';
import backdrop from '../../../assets/icons/backdrop.svg';
import { BackDropContainer, BackDropWithSkipContainer } from './backDrop.styles';
import { ROUTES } from '../../../constants/routes';
interface BackDropProps {
  onClick?: () => void;
}
const BackDrop = ({ onClick }: BackDropProps) => {
  const navigate = useNavigate();
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
    navigate(-1);
  };

  return (
    <BackDropContainer onClick={handleClick}>
      <img src={backdrop} alt="backdrop" />
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
      <img src={backdrop} alt="backdrop" onClick={handleSkip} />
      <p>건너뛰기</p>
    </BackDropWithSkipContainer>
  );
};
