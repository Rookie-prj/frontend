import { ReactNode } from 'react';
import NavigationBar from '../navigationBar/navigationBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      {children}
      <NavigationBar />
    </>
  );
};

export default Layout;
