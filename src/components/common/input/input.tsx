import {
  FieldCharacterLimit,
  FieldContainer,
  FieldInput,
  FieldWrapper,
} from '../../container/filedContainer.styles';
import x from '../../../assets/icons/x.svg';

interface InputProps {
  placeholder: string;
  value: string | null;
  onChange: (value: string) => void;
  maxLength?: number;
  showCharacterCount?: boolean;
  showMaxLength?: boolean;
  type?: string;
}

const Input = ({
  placeholder,
  value,
  onChange,
  maxLength = 2000,
  showCharacterCount = true,
  showMaxLength = true,
  type = 'text',
}: InputProps) => {
  const handleClear = () => onChange('');

  const getCharacterLimitText = () => {
    if (!showCharacterCount || !showMaxLength) return null;
    if (maxLength === 22) return '22자 이내';
    return `${value?.length || 0}/${maxLength}`;
  };

  return (
    <FieldContainer>
      <FieldWrapper>
        <FieldInput
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          type={type}
        />
        {value && <img src={x} alt="clear" onClick={handleClear} style={{ cursor: 'pointer' }} />}
      </FieldWrapper>
      {getCharacterLimitText() && (
        <FieldCharacterLimit>{getCharacterLimitText()}</FieldCharacterLimit>
      )}
    </FieldContainer>
  );
};

export default Input;
