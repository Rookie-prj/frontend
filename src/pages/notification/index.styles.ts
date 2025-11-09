import styled from '@emotion/styled';
import { colors } from '../../style/colors';
import { typography } from '../../style/theme';

export const Title = styled.h2`
  font-size: ${typography.headline.headline4.fontSize};
  font-weight: ${typography.headline.headline4.fontWeight};
  line-height: ${typography.headline.headline4.lineHeight};
  letter-spacing: ${typography.headline.headline4.letterSpacing};
  color: ${colors.gray[800]};
  padding: 10px 16px 17px 16px;
`;
