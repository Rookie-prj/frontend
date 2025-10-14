import { ButtonContainer } from './button.styles';
interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}
const Button = ({ children, onClick }: ButtonProps) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};

export default Button;
