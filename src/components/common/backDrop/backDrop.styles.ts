import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
export const BackDropContainer = styled.div`
  width: 100%;
  display: flex;
  height: 2.5rem;
  padding-top: 0.37rem;
  align-items: center;
  padding-left: 1rem;
`;

export const BackDropWithSkipContainer = styled(BackDropContainer)`
  justify-content: space-between;
  p {
    color: ${colors.gray[400]};
    font-size: ${typography.subhead.subhead1.fontSize};
    font-weight: ${typography.subhead.subhead1.fontWeight};
    line-height: ${typography.subhead.subhead1.lineHeight};
    letter-spacing: ${typography.subhead.subhead1.letterSpacing};
  }
`;
