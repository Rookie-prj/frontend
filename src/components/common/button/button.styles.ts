import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const ButtonContainer = styled.button`
  background-color: ${colors.green[200]};
  color: ${colors.gray[800]};
  border-radius: 0.75rem;
  display: flex;
  width: 100%;

  text-align: center;

  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  height: 3.125rem;
  padding: 1rem 9.875rem;
  justify-content: center;
  align-items: center;
`;
