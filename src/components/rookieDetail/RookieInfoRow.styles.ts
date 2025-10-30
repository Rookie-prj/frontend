import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const InfoRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

export const Label = styled.div`
  color: ${colors.gray[600]};
  font-size: 12px;
  font-weight: 500;
  line-height: 1.5em;
  letter-spacing: -0.01em;
`;

export const Value = styled.div`
  color: ${colors.gray[950]};
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43em;
  letter-spacing: -0.01em;
  word-break: keep-all;
`;
