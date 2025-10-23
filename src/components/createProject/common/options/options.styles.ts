import styled from '@emotion/styled';
import { colors } from '../../../../style/colors';

interface OptionsContainerProps {
  isActive?: boolean;
}
export const OptionsContainer = styled.div<OptionsContainerProps>`
  display: flex;
  align-items: center;
  white-space: nowrap;
  padding: 0.75rem 0.875rem;
  flex-direction: row;
  gap: 0.4rem;
  border-radius: 0.5rem;
  border: 1.5px solid ${({ isActive }) => (isActive ? colors.green[200] : colors.gray[150])};
  background: ${({ isActive }) => (isActive ? colors.green[50] : colors.white)};
  cursor: pointer;
`;

export const OptionsText = styled.p`
  color: ${colors.gray[900]};
  font-size: 0.8125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const OptionsScrollWrapper = styled.div`
  display: flex;
  gap: 0.63rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  padding-top: 0.62rem;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;
