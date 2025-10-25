import { PropsWithChildren } from 'react';
import * as S from './modal.styles';
import { SerializedStyles } from '@emotion/react';
interface BodyProps extends PropsWithChildren {
  className?: string;
  css?: SerializedStyles;
}
function Body({ children, className, css }: BodyProps) {
  return (
    <S.BodyBase className={className ?? ''} css={css}>
      {children}
    </S.BodyBase>
  );
}

export default Body;
