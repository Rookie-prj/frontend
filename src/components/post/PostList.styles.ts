import styled from '@emotion/styled';
import { typography } from '../../style/theme';

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.63rem;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 1rem;

  overflow-x: auto;
  overflow-y: hidden;

  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex-shrink: 0;
    scroll-snap-align: start;
  }
`;

export const PostListTitle = styled.h4`
  margin-bottom: 17px;
  padding-left: 16px;
  font: ${typography.subhead.subhead5};
`;
