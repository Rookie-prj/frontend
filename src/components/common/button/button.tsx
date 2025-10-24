import { ButtonContainer } from './button.styles';
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  size?: 'small' | 'large';
}
const Button = ({ children, onClick, size = 'small' }: ButtonProps) => {
  return (
    <ButtonContainer $size={size} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
};

export default Button;
