import {
  FieldCharacterLimit,
  FieldContainer,
  FieldInput,
  FieldWrapper,
} from '../../container/filedContainer.styles';
import x from '../../../assets/icons/x.svg';
import { Warning } from '../warning/warning';
import { colors } from '../../../style/colors';
import styled from '@emotion/styled';

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

interface InputProps {
  placeholder: string;
  value: string | null;
  onChange: (value: string) => void;
  maxLength?: number;
  showCharacterCount?: boolean;
  showMaxLength?: boolean;
  type?: string;
  warningMessage?: string;
  showWarning?: boolean;
}

const Input = ({
  placeholder,
  value,
  onChange,
  maxLength = 2000,
  showCharacterCount = true,
  showMaxLength = true,
  type = 'text',
  warningMessage,
  showWarning = false,
}: InputProps) => {
  const handleClear = () => onChange('');

  const getCharacterLimitText = () => {
    if (!showCharacterCount || !showMaxLength) return null;
    if (maxLength === 22) return '22자 이내';
    return `${value?.length || 0}/${maxLength}`;
  };

  return (
    <FieldContainer>
      <FieldWrapper
        style={
          showWarning
            ? {
                borderColor: '#ff6C22',
                backgroundColor: '#ffdcd6',
              }
            : undefined
        }
      >
        <FieldInput
          placeholder={placeholder}
          value={value || ''}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
          type={type}
          $warning={showWarning}
          style={showWarning ? { color: colors.gray[300] } : undefined}
        />
        {value && <img src={x} alt="clear" onClick={handleClear} style={{ cursor: 'pointer' }} />}
      </FieldWrapper>
      {(getCharacterLimitText() || (showWarning && warningMessage)) && (
        <FooterContainer>
          {showWarning && warningMessage ? (
            <Warning message={warningMessage} show={showWarning} />
          ) : (
            <div />
          )}
          {getCharacterLimitText() && (
            <FieldCharacterLimit>{getCharacterLimitText()}</FieldCharacterLimit>
          )}
        </FooterContainer>
      )}
    </FieldContainer>
  );
};

export default Input;
