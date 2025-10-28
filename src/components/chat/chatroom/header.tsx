import * as S from './header.styles';
import backdrop from '../../../assets/icons/backdrop.svg';
import { useNavigate } from 'react-router-dom';

export default function ChatRoomHeader() {
  const navigate = useNavigate();
  const otherUserName = localStorage.getItem('otherUserName');
  return (
    <S.HeaderContainer>
      <img src={backdrop} alt="backdrop" onClick={() => navigate(-1)} />
      <S.HeaderTitle>{otherUserName}</S.HeaderTitle>
    </S.HeaderContainer>
  );
}
