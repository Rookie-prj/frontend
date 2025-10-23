import { ReactNode, CSSProperties } from 'react';
import { ScrollContainer } from './scrollBar.styles';
import { SerializedStyles } from '@emotion/react';

export interface ScrollBarProps {
  children: ReactNode;
  gap?: string;
  style?: CSSProperties;
  css?: SerializedStyles;
  direction?: 'row' | 'column';
}

export function ScrollBar({
  children,
  gap = '8px',
  style,
  css,
  direction = 'row',
}: ScrollBarProps) {
  return (
    <ScrollContainer $gap={gap} $direction={direction} style={style} css={css}>
      {children}
    </ScrollContainer>
  );
}
