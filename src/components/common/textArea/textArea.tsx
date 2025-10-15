import {
  FieldCharacterLengthText,
  FieldCharacterLimit,
  FieldCharacterLimitWrapper,
  FieldContainer,
} from '../../../components/container/filedContainer.styles';
import { TextAreaContainer, TextAreaField } from './textArea.styles';
interface TextAreaProps {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  maxLength: number;
}
const TextArea = ({ placeholder, value, onChange, maxLength = 2000 }: TextAreaProps) => {
  return (
    <FieldContainer>
      <TextAreaContainer>
        <TextAreaField
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          maxLength={maxLength}
        />
      </TextAreaContainer>
      <FieldCharacterLimitWrapper>
        <FieldCharacterLengthText>{value.length}</FieldCharacterLengthText>
        <FieldCharacterLimit>{`/${maxLength}`}</FieldCharacterLimit>
      </FieldCharacterLimitWrapper>
    </FieldContainer>
  );
};

export default TextArea;
