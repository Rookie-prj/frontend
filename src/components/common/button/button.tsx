import { SerializedStyles } from '@emotion/react';
import { ButtonContainer } from './button.styles';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'gray' | 'disabled';
  disabled?: boolean;
  css?: SerializedStyles;
}
const Button = ({
  children,
  onClick,
  size = 'small',
  variant = 'primary',
  disabled = false,
  css,
}: ButtonProps) => {
  const isDisabled = disabled || variant === 'disabled';
  return (
    <ButtonContainer
      $size={size}
      onClick={isDisabled ? undefined : onClick}
      variant={variant}
      disabled={isDisabled}
      css={css}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
