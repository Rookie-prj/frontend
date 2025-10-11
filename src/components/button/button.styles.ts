import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const ButtonContainer = styled.button`
  background-color: ${colors.green[200]};
  color: ${colors.white};
  border-radius: 0.75rem;
  display: flex;

  height: 3.125rem;
  padding: 1rem 9.875rem;
  justify-content: center;
  align-items: center;
`;
