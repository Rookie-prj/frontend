import styled from '@emotion/styled';
import { typography } from '../../style/theme';

export const PostListContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.63rem;
  margin: 0 1rem;
  padding-bottom: 1rem;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > * {
    flex: 0 0 calc((100% - 1rem - 0.63rem) / 2);
    min-width: 0;
  }
`;

export const PostListTitle = styled.h4`
  margin-bottom: 17px;
  padding-left: 16px;
  font: ${typography.subhead.subhead5};
`;
