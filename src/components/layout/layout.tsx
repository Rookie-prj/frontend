import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import NavigationBar from '../navigationBar/navigationBar';

interface LayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
}

const Layout = ({ children, hideNavigation = false }: LayoutProps) => {
  const location = useLocation();
  const shouldHideNavigation = hideNavigation || location.pathname === '/';

  return (
    <>
      {children}
      {!shouldHideNavigation && <NavigationBar />}
    </>
  );
};

export default Layout;
