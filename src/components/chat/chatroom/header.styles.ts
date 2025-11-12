import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 16px;
  background-color: ${colors.gray[50]};
  position: fixed;
  width: 100%;
  max-width: 425px;
`;

export const HeaderTitle = styled.h3`
  font-size: ${typography.subhead.subhead2.fontSize};
  font-weight: ${typography.subhead.subhead2.fontWeight};
  line-height: ${typography.subhead.subhead2.lineHeight};
  letter-spacing: ${typography.subhead.subhead2.letterSpacing};
  color: ${colors.gray[950]};
  position: absolute;
  left: 43%;
  transform: translateX(-50%);
  top: 50%;
  transform: translateY(-50%);
`;
