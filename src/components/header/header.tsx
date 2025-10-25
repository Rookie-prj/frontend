import { HeaderContainer, HeaderTitle, Title } from './header.styles';
import logo from '../../assets/icons/logo.svg';
import search from '../../assets/icons/search.svg';
import { Interpolation, Theme } from '@emotion/react';
import BackDrop, { BackDropWithSkip } from '../../components/common/backDrop/backDrop';

type BackdropType = 'backdrop' | 'backdropWithSkip';
type ContainerType = 'logo' | 'title' | 'search';
type HeaderType = BackdropType | ContainerType;

type HeaderProps = {
  type: HeaderType;
  title?: string;
};

const Header = ({ type, title }: HeaderProps) => {
  const isBackdropType = (type: HeaderType): type is BackdropType => {
    return type === 'backdrop' || type === 'backdropWithSkip';
  };

  const HeaderCase: Record<HeaderType, React.ReactNode> = {
    backdrop: <BackDrop />,
    backdropWithSkip: <BackDropWithSkip />,
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

  if (isBackdropType(type)) {
    return <>{HeaderCase[type]}</>;
  }

  return <HeaderContainer>{HeaderCase[type]}</HeaderContainer>;
};

export default Header;
