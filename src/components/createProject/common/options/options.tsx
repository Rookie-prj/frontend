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
      {icon && (
        <img
          src={icon}
          alt="icon"
          // style={{ width: '1.5rem', height: '1.5rem', marginRight: '0.5rem' }}
        />
      )}
      <OptionsText>{text}</OptionsText>
    </OptionsContainer>
  );
};

export default Options;
