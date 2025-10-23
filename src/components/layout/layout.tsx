import { ReactNode } from 'react';
import NavigationBar from '../navigationBar/navigationBar';

interface LayoutProps {
  children: ReactNode;
  hideNavigation?: boolean;
}

const Layout = ({ children, hideNavigation = false }: LayoutProps) => {
  return (
    <>
      {children}
      {!hideNavigation && <NavigationBar />}
    </>
  );
};

export default Layout;
