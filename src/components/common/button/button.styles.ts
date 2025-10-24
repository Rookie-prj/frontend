import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const ButtonContainer = styled.button<{ $size?: 'small' | 'large' }>`
  background-color: ${colors.green[200]};
  color: ${colors.gray[800]};
  border-radius: 0.75rem;
  display: flex;
  width: 100%;
  text-align: center;
  font-size: ${({ $size }) => ($size === 'small' ? '0.875rem' : '1rem')};
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  height: ${({ $size }) => ($size === 'small' ? '3.125rem' : '3.625rem')};
  padding: ${({ $size }) => ($size === 'small' ? '1rem 2rem' : '1rem 9.875rem')};
`;
