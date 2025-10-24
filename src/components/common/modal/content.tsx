import { forwardRef, PropsWithChildren } from 'react';
import * as S from './modal.styles';
interface ContentProps extends PropsWithChildren {
  className?: string;
}
const Content = forwardRef<HTMLDivElement, ContentProps>(function Content(
  { children, className, ...props },
  ref,
) {
  const classNames = ` ${className ?? ''}`;
  return (
    <S.ContentBase ref={ref} {...props} className={classNames}>
      {children}
    </S.ContentBase>
  );
});

export default Content;
