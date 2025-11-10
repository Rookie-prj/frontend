import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const SlideBarContainer = styled.div`
  display: flex;
  padding: 0.25rem 0.38rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0.44rem;
  flex-shrink: 0;
  border-radius: 6.1875rem;
  background: rgba(3, 7, 18, 0.2);
`;
export const SlideBarDot = styled.div<{ active?: boolean }>`
  width: ${({ active }) => (active ? '0.35288rem' : '0.20513rem')};
  height: ${({ active }) => (active ? '0.35288rem' : '0.20513rem')};
  aspect-ratio: 3.28/3.28;
  cursor: pointer;
  background-color: ${({ active }) => (active ? colors.green[200] : colors.white)};
  border-radius: 50%;
`;
