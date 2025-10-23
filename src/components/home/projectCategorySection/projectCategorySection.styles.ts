import styled from '@emotion/styled';
interface ContainerProps {
  layout?: 'row' | 'col';
}

export const ProjectCategoryCardsContainer = styled.div<ContainerProps>`
  display: grid;
  height: ${({ layout }) => (layout === 'row' ? '12.875rem' : '')};
  padding-bottom: ${({ layout }) => (layout === 'row' ? '0' : '2rem')};
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.62rem;

  padding-left: ${({ layout }) => (layout === 'row' ? '1rem' : '0')};
  padding-right: ${({ layout }) => (layout === 'row' ? '1rem' : '0')};
`;
