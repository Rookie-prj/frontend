import styled from '@emotion/styled';
import { typography } from '../../style/theme';
export const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 2.4375rem;
  padding: 0.28rem 1rem;
  //margin-bottom: 0.88rem;
  // margin-top: 2.31rem;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  gap: 0.625rem;
  flex-shrink: 0;
`;

export const HeaderTitle = styled.div`
  font-size: ${typography.headline.headline4.fontSize};
  font-weight: ${typography.headline.headline4.fontWeight};
  line-height: ${typography.headline.headline4.lineHeight};
  letter-spacing: ${typography.headline.headline4.letterSpacing};
`;
export const Title = styled.h3`
  font-size: ${typography.headline.headline4.fontSize};
  font-weight: ${typography.headline.headline4.fontWeight};
  line-height: ${typography.headline.headline4.lineHeight};
  letter-spacing: ${typography.headline.headline4.letterSpacing};
`;
