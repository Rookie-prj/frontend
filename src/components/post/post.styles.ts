import styled from '@emotion/styled';

interface PostContainerProps {
  maxRows?: number;
}

export const PostContainer = styled.div<PostContainerProps>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: ${({ maxRows }) => (maxRows ? `repeat(${maxRows}, auto)` : 'unset')};

  margin: 0 1rem;
  gap: 0.63rem;
  justify-content: center;
  margin-top: 0.12rem;
`;
