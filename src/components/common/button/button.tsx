import { ButtonContainer } from './button.styles';
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size?: 'small' | 'large';
  variant?: 'primary' | 'gray';
}
const Button = ({ children, onClick, size = 'small', variant = 'primary' }: ButtonProps) => {
  return (
    <ButtonContainer $size={size} onClick={onClick} variant={variant}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
