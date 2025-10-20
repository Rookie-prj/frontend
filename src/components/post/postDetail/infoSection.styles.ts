import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding-bottom: 2rem;
  padding-top: 1.5rem;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InfoLabel = styled.span`
  color: ${colors.gray[400]};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;

export const InfoValue = styled.span`
  color: ${colors.gray[800]};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
