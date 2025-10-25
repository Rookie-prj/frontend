import { HeaderContainer, HeaderTitle, Title } from './header.styles';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import BackDrop from '../../components/common/backDrop/backDrop';
import profile from '../../assets/icons/profile.svg';
type HeaderType = 'backdrop' | 'logo' | 'title' | 'search' | 'library';

type HeaderProps = {
  type: HeaderType;
  title?: string;
};

const Header = ({ type, title }: HeaderProps) => {
  const HeaderCase: Record<HeaderType, React.ReactNode> = {
    backdrop: <BackDrop />,
    logo: (
      <>
        <img src={logo} alt="logo" />
        <img src={search} alt="search" />
      </>
    ),
    title: <HeaderTitle>{title}</HeaderTitle>,
    search: (
      <>
        <Title>탐색</Title>
        <img src={search} alt="search" style={{ cursor: 'pointer' }} />
      </>
    ),
    library: (
      <>
        <Title>라이브러리</Title>

        <img src={profile} alt="profileIcon" style={{ cursor: 'pointer' }} />
      </>
    ),
  };
  return <HeaderContainer>{HeaderCase[type]}</HeaderContainer>;
};

export default Header;
