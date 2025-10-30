import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  margin-top: 3.375rem;
`;

export const WelcomeText = styled.h1`
  font-weight: ${typography.headline.headline4.fontWeight};
  font-size: ${typography.headline.headline4.fontSize};
  line-height: ${typography.headline.headline4.lineHeight};
  color: ${colors.gray[800]};
  text-align: center;
  margin: 0;
  white-space: pre-line;
  letter-spacing: ${typography.headline.headline4.letterSpacing};
`;
