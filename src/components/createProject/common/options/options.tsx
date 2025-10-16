import { OptionsContainer, OptionsText } from './options.styles';

interface OptionsProps {
  text: string;
  icon?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Options = ({ text, icon, isActive, onClick }: OptionsProps) => {
  return (
    <OptionsContainer isActive={isActive} onClick={onClick}>
      {icon && <img src={icon} alt="icon" />}
      <OptionsText>{text}</OptionsText>
    </OptionsContainer>
  );
};

export default Options;
