import { CSSProperties } from 'react';
import { SerializedStyles } from '@emotion/react';
import { ChipButton, ChipVariant, ChipSize } from './chip.styles';

export interface ChipProps {
  label: string;
  variant?: ChipVariant;
  size?: ChipSize;
  isActive?: boolean;
  onClick?: () => void;
  style?: CSSProperties;
  css?: SerializedStyles;
}

export function Chip({
  label,
  variant = 'default',
  size = 'medium',
  isActive = false,
  onClick,
  style,
  css,
}: ChipProps) {
  return (
    <ChipButton
      $variant={variant}
      $size={size}
      $isActive={isActive}
      onClick={onClick}
      style={style}
      css={css}
    >
      {label}
    </ChipButton>
  );
}
