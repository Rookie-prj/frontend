import { HeaderContainer, HeaderTitle, Title } from './header.styles';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import profile from '../../assets/icons/profile.svg';
import BackDrop, { BackDropWithSkip } from '../../components/common/backDrop/backDrop';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';

type BackdropType = 'backdrop' | 'backdropWithSkip';
type ContainerType = 'logo' | 'title' | 'search' | 'library';
type HeaderType = BackdropType | ContainerType;

type HeaderProps = {
  type: HeaderType;
  title?: string;
};

const Header = ({ type, title }: HeaderProps) => {
  const isBackdropType = (type: HeaderType): type is BackdropType => {
    return type === 'backdrop' || type === 'backdropWithSkip';
  };
  const navigate = useNavigate();

  const HeaderCase: Record<HeaderType, React.ReactNode> = {
    backdrop: <BackDrop />,
    backdropWithSkip: <BackDropWithSkip />,

    logo: (
      <>
        <img src={logo} alt="logo" />
        <img
          src={search}
          alt="search"
          onClick={() => navigate(ROUTES.search)}
          style={{ cursor: 'pointer' }}
        />
      </>
    ),
    title: <HeaderTitle>{title}</HeaderTitle>,
    search: (
      <>
        <Title>탐색</Title>
        <img
          src={search}
          alt="search"
          onClick={() => navigate(ROUTES.search)}
          style={{ cursor: 'pointer' }}
        />
      </>
    ),
    library: (
      <>
        <Title>라이브러리</Title>

        <img
          src={profile}
          alt="profileIcon"
          onClick={() => navigate(ROUTES.myprofile)}
          style={{ cursor: 'pointer' }}
        />
      </>
    ),
  };

  if (isBackdropType(type)) {
    return <>{HeaderCase[type]}</>;
  }

  return <HeaderContainer>{HeaderCase[type]}</HeaderContainer>;
};

export default Header;
