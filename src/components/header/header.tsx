import { HeaderContainer, HeaderTitle, Title } from './header.styles';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import { Interpolation, Theme } from '@emotion/react';
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
    search: (
      <>
        <Title>탐색</Title>
        <img src={search} alt="search" />
      </>
    ),
  };
  return <HeaderContainer>{HeaderCase[type]}</HeaderContainer>;
};

export default Header;
