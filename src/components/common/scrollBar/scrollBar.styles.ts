import styled from '@emotion/styled';

interface ScrollContainerProps {
  $gap: string;
  $direction: 'row' | 'column';
}

export const ScrollContainer = styled.div<ScrollContainerProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: center;
  gap: ${({ $gap }) => $gap};

  overflow-x: ${({ $direction }) => ($direction === 'row' ? 'auto' : 'hidden')};
  overflow-y: ${({ $direction }) => ($direction === 'column' ? 'auto' : 'hidden')};

  &::-webkit-scrollbar {
    display: none;
  }

  scrollbar-width: none;

  -ms-overflow-style: none;

  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;

  & > * {
    flex-shrink: 0;
  }
`;
