import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
import warningIcon from '../../../assets/icons/warning.svg';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4375rem;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessageBox = styled.div`
  background-color: #ffdcd6;
  border: 1.5px solid ${colors.red[300]};
  border-radius: 0.5rem;
  padding: 1rem 1.0625rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  min-height: 3.4375rem;
`;

const ErrorMessageText = styled.p`
  color: ${colors.gray[300]};
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
  margin: 0;
  text-align: left;
`;

const ErrorFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const ErrorIconWrapper = styled.div`
  display: flex;
  gap: 0.1875rem;
  align-items: center;
`;

const WarningIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
`;

const ErrorText = styled.p`
  color: ${colors.red[300]};
  font-size: ${typography.caption.caption3.fontSize};
  font-weight: ${typography.caption.caption3.fontWeight};
  line-height: ${typography.caption.caption3.lineHeight};
  letter-spacing: ${typography.caption.caption3.letterSpacing};
  margin: 0;
`;

const CharacterCount = styled.p`
  color: ${colors.gray[300]};
  font-size: ${typography.caption.caption1.fontSize};
  font-weight: ${typography.caption.caption1.fontWeight};
  line-height: ${typography.caption.caption1.lineHeight};
  letter-spacing: ${typography.caption.caption1.letterSpacing};
  margin: 0;
  text-align: right;
`;

interface FieldErrorProps {
  errorMessage: string;
  currentValue?: string;
  maxLength?: number;
  showCharacterCount?: boolean;
}

export const FieldError = ({
  errorMessage,
  currentValue,
  maxLength,
  showCharacterCount = false,
}: FieldErrorProps) => {
  return (
    <ErrorContainer>
      <ErrorMessageBox>
        {currentValue && <ErrorMessageText>{currentValue}</ErrorMessageText>}
      </ErrorMessageBox>
      <ErrorFooter>
        <ErrorIconWrapper>
          <WarningIcon src={warningIcon} alt="warning" />
          <ErrorText>{errorMessage}</ErrorText>
        </ErrorIconWrapper>
        {showCharacterCount && maxLength && <CharacterCount>{maxLength}자 이내</CharacterCount>}
      </ErrorFooter>
    </ErrorContainer>
  );
};
