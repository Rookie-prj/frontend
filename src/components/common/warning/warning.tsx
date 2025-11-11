import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
import warningIcon from '../../../assets/icons/warning.svg';

const WarningContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.19rem;
`;

const WarningIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
  flex-shrink: 0;
`;

const WarningText = styled.p`
  color: ${colors.red[300]};
  font-size: ${typography.caption.caption3.fontSize};
  font-weight: ${typography.caption.caption3.fontWeight};
  line-height: ${typography.caption.caption3.lineHeight};
  letter-spacing: ${typography.caption.caption3.letterSpacing};
  margin: 0;
`;

interface WarningProps {
  message: string;
  show?: boolean;
}

export const Warning = ({ message, show = false }: WarningProps) => {
  if (!show) return null;

  return (
    <WarningContainer>
      <WarningIcon src={warningIcon} alt="warning" />
      <WarningText>{message}</WarningText>
    </WarningContainer>
  );
};
