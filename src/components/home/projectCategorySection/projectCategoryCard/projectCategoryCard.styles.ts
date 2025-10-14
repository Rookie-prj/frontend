import styled from '@emotion/styled';
import { colors } from '../../../../style/colors';

interface ContainerProps {
  layout?: 'row' | 'col';
  isActive?: boolean;
}

export const ProjectCategoryCardContainer = styled.div<ContainerProps>`
  display: flex;
  padding: ${({ layout }) => (layout === 'row' ? '0.8125rem' : '')};
  height: ${({ layout }) => (layout === 'row' ? '6.125rem' : '10.875rem')};
  align-items: ${({ layout }) => (layout === 'row' ? '' : 'center')};
  // gap: 0.625rem;
  flex-direction: column;
  justify-content: ${({ layout }) => (layout === 'row' ? 'center' : 'flex-start')};
  cursor: pointer;
  border-radius: 0.75rem;
  border: 1px solid
    ${({ isActive, layout }) =>
      isActive && layout === 'col' ? colors.green[200] : colors.gray[150]};
  background: ${({ isActive, layout }) =>
    isActive && layout === 'col' ? colors.green[50] : colors.gray[50]};
  transition: background 0.2s ease;
`;
export const ProjectCategoryCardContent = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0.12rem;
`;
export const ProjectCategoryCardTag = styled.p<ContainerProps>`
  color: ${colors.gray[400]};
  font-size: 0.75rem;
  font-weight: 500;
  display: ${({ layout }) => layout === 'col' && 'flex'};
  justify-content: ${({ layout }) => layout === 'col' && 'center'};
  width: ${({ layout }) => layout === 'col' && '100%'};
  line-height: 1.125rem;
  font-style: normal;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
export const ProjectCategoryCardTitle = styled.h4`
  color: ${colors.gray[950]};
  font-style: normal;
  font-weight: 700;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
  white-space: nowrap;
  flex: 1;
`;
export const ProjectCategoryCardIconWrapper = styled.div<ContainerProps>`
  display: flex;
  padding-top: ${({ layout }) => (layout === 'row' ? '' : '1rem')};
  padding-bottom: ${({ layout }) => (layout === 'row' ? '0' : '1rem')};
  flex-shrink: 0;
`;
