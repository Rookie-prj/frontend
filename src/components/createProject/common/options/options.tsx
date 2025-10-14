import { OptionsContainer, OptionsText } from './options.styles';

interface OptionsProps {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}
const Options = ({ text, isActive, onClick }: OptionsProps) => {
  return (
    <OptionsContainer isActive={isActive} onClick={onClick}>
      <OptionsText>{text}</OptionsText>
    </OptionsContainer>
  );
};

export default Options;
