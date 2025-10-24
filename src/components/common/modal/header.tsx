import { PropsWithChildren, ReactNode, useContext } from 'react';
import * as S from './modal.styles';
import { ModalContext } from '../../../context/modalContext';
interface HeaderProps {
  title?: string;
  className?: string;
  img?: ReactNode;
}
function Header({ className, img, title, children, ...props }: PropsWithChildren<HeaderProps>) {
  const { onClose } = useContext(ModalContext);
  //const classNames = `${S.headerBaseStyle} ${className ?? ''}`;
  return (
    <S.HeaderBase className={className ?? ''} {...props}>
      {title && <S.LabelBase>{title}</S.LabelBase>}
      {children}
      <div onClick={onClose}>{img ? img : ''}</div>
    </S.HeaderBase>
  );
}

export default Header;
