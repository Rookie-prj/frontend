import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
export const EndDateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.38rem;
  width: 100%;
  margin-top: 0.49rem;
`;
export const EndDateLabel = styled.div`
  color: ${colors.gray[400]};
  font-size: 0.75rem;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
export const EndDateText = styled.span`
  color: ${colors.gray[600]};
  font-size: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
`;
export const EndDateLine = styled.div`
  height: 1.75px;
  background: ${colors.gray[200]};
  width: 100%;
  margin-top: 0.18rem;
`;
