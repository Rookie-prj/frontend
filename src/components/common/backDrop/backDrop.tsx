import { useNavigate } from 'react-router-dom';
import backdrop from '../../../assets/icons/backdrop.svg';
import { BackDropContainer } from './backDrop.styles';

const BackDrop = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };

  return (
    <BackDropContainer onClick={handleClick}>
      <img src={backdrop} alt="backdrop" />
    </BackDropContainer>
  );
};

export default BackDrop;
