import { colors } from '../../../style/colors';
import styled from '@emotion/styled';

export const StepBarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.2rem;
  width: 100%;
  padding-top: 2.75rem;
  padding-bottom: 2rem;
`;
export const StepBarItem = styled.div<{ active?: boolean }>`
  flex: 1;
  height: 0.25rem;
  background-color: ${({ active }) => (active ? colors.green[200] : colors.gray[200])};
  border-radius: 0.125rem;
`;
