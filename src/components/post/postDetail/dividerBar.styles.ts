import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const Divider = styled.div`
  width: calc(100% + 2rem);
  height: 0.375rem;
  flex-shrink: 0;
  background: ${colors.gray[100]};
  margin: 0 -16px;
`;
