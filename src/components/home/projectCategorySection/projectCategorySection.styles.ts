import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
export const ProjectCategorySectionContainer = styled.div<{
  slideIndex: number;
  isActive: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin: 1rem;
`;
export const ProjectCategorySectionTitle = styled.p`
  color: ${colors.gray[800]};
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.0225rem;
`;
export const ProjectCategorySectionButton = styled.button`
  color: ${colors.gray[30]};
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;

export const ProjectCategoryCardsContainer = styled.div`
  display: grid;
  height: 12.875rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.62rem;
  padding: 0 1rem;
`;
