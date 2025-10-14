import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
export const ViewAllContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  justify-content: space-between;
  margin: 0.88rem 1rem;
`;
export const ViewAllTitle = styled.p`
  color: ${colors.gray[800]};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.0225rem;
`;
export const ViewAllButton = styled.button`
  color: ${colors.gray[30]};
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
