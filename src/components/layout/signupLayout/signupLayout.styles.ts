import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
export const StepSubText = styled.p`
  color: ${colors.gray[400]};
  font-size: ${typography.subhead.subhead1.fontSize};
  font-style: normal;
  font-weight: ${typography.subhead.subhead1.fontWeight};
  line-height: ${typography.subhead.subhead1.lineHeight};
  letter-spacing: ${typography.subhead.subhead1.letterSpacing};
  margin-top: 0.25rem;
`;
