import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 60px 20px;
  text-align: center;
`;

export const EmptyIcon = styled.img`
  width: 50.11px;
  height: 50.11px;
  margin-bottom: 24px;
`;

export const EmptyMessage = styled.div`
  color: ${colors.gray[300]};
  font-size: ${typography.subhead.subhead2.fontSize};
  font-weight: ${typography.subhead.subhead2.fontWeight};
  line-height: ${typography.subhead.subhead2.lineHeight};
  letter-spacing: ${typography.subhead.subhead2.letterSpacing};
  margin-bottom: 8px;
`;

export const EmptySubMessage = styled.div`
  color: ${colors.gray[500]};
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5em;
`;
