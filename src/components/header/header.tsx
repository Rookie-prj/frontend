import { HeaderContainer, HeaderTitle } from './header.styles';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
type HeaderType = 'backdrop' | 'logo' | 'title' | 'search';

type HeaderProps = {
  type: HeaderType;
  title?: string;
};

const Header = ({ type, title }: HeaderProps) => {
  const HeaderCase: Record<HeaderType, React.ReactNode> = {
    backdrop: <div>Backdrop</div>,
    logo: (
      <>
        <img src={logo} alt="logo" />
        <img src={search} alt="search" />
      </>
    ),
    title: <HeaderTitle>{title}</HeaderTitle>,
    search: <div>Search</div>,
  };
  return <HeaderContainer>{HeaderCase[type]}</HeaderContainer>;
};

export default Header;
