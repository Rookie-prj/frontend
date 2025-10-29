import { colors } from '../../style/colors';
import styled from '@emotion/styled';
import { typography } from '../../style/theme';

export const CategoryBarContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
`;

export const CategoryBarItem = styled.div<{ $isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px;
  border-bottom: 2.5px solid ${({ $isActive }) => ($isActive ? colors.gray[800] : colors.gray[200])};
  width: 100%;
  cursor: pointer;
`;
export const ItemWrapper = styled.div`
  width: 100%;
`;

export const CategoryBarText = styled.p<{ $isActive?: boolean }>`
  font-size: ${typography.subhead.subhead4.fontSize};
  font-weight: ${({ $isActive }) => ($isActive ? 700 : typography.subhead.subhead4.fontWeight)};
  line-height: ${typography.subhead.subhead4.lineHeight};
  letter-spacing: ${typography.subhead.subhead4.letterSpacing};

  color: ${({ $isActive }) => ($isActive ? colors.gray[800] : colors.gray[200])};
`;
