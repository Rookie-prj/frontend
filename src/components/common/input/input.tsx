import { InputCharacterLimit, InputContainer, InputField, InputWrapper } from './input.styles';
import x from '../../../assets/icons/x.svg';

interface InputProps {
  placeholder: string;
  value: string | null;
  onChange: (value: string) => void;
  maxLength?: number;
  showCharacterCount?: boolean;
}

const Input = ({
  placeholder,
  value,
  onChange,
  maxLength = 2000,
  showCharacterCount = true,
}: InputProps) => {
  const handleClear = () => onChange('');

  const getCharacterLimitText = () => {
    if (!showCharacterCount) return null;
    if (maxLength === 22) return '22자 이내';
    return `${value?.length || 0}/${maxLength}`;
  };

  return (
    <InputContainer>
      <InputWrapper>
        <InputField
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
        />
        {value && <img src={x} alt="clear" onClick={handleClear} style={{ cursor: 'pointer' }} />}
      </InputWrapper>
      {getCharacterLimitText() && (
        <InputCharacterLimit>{getCharacterLimitText()}</InputCharacterLimit>
      )}
    </InputContainer>
  );
};

export default Input;
