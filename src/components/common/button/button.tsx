import { SerializedStyles } from '@emotion/react';
import { ButtonContainer } from './button.styles';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'gray';
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
  return (
    <ButtonContainer
      $size={size}
      onClick={disabled ? undefined : onClick}
      variant={variant}
      disabled={disabled}
      css={css}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
