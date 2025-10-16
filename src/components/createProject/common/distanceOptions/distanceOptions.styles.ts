import styled from '@emotion/styled';
import { colors } from '../../../../style/colors';

export const DistanceOptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  width: 100%;
`;

export const DistanceOption = styled.div<{ isActive?: boolean }>`
  background: ${({ isActive }) => (isActive ? colors.green[50] : 'white')};
  border: 1.5px solid ${({ isActive }) => (isActive ? colors.green[200] : colors.gray[150])};
  border-radius: 0.625rem;
  padding: 1.4375rem 1.48rem;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:hover {
    border-color: ${colors.green[200]};
  }
`;

export const DistanceIcon = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ isActive }) => (isActive ? colors.green[50] : 'white')};
  border-radius: 0.5rem;
`;

export const DistanceText = styled.span<{ fontWeight?: 600 | 700 }>`
  font-weight: ${({ fontWeight = 600 }) => fontWeight};
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[600]};
  flex: 1;
`;

export const CheckIcon = styled.div<{ isVisible: boolean }>`
  width: 1.375rem;
  height: 1.375rem;
  background: ${colors.green[200]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  transition: opacity 0.2s ease;
`;

export const DistanceSubText = styled.div`
  color: ${colors.gray[500]};
  font-size: 0.6875rem;
  font-weight: 400;
  line-height: 1rem;
`;
