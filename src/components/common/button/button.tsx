import { ButtonContainer } from './button.styles';
interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  size?: 'small' | 'medium' | 'large';
  variant?: 'primary' | 'gray';
  disabled?: boolean;
}
const Button = ({
  children,
  onClick,
  size = 'small',
  variant = 'primary',
  disabled = false,
}: ButtonProps) => {
  return (
    <ButtonContainer
      $size={size}
      onClick={disabled ? undefined : onClick}
      variant={variant}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};

export default Button;
