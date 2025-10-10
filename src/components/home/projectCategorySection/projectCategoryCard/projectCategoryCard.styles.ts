import styled from '@emotion/styled';
import { colors } from '../../../../style/colors';

export const ProjectCategoryCardContainer = styled.div`
  display: flex;
  height: 100%;
  padding: 0.8125rem;
  flex-direction: column;
  justify-content: center;

  border-radius: 0.75rem;
  background-color: ${colors.gray[50]};
`;
export const ProjectCategoryCardContent = styled.div`
  display: flex;
  flex-direction: row;

  justify-content: center;
  align-items: flex-start;
  margin-top: 0.12rem;
`;
export const ProjectCategoryCardTag = styled.p`
  color: ${colors.gray[400]};
  font-size: 0.75rem;
  font-weight: 500;
  width: 100%;
  line-height: 1.125rem;
  font-style: normal;
  line-height: 1.125rem; /* 150% */
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
export const ProjectCategoryCardIconWrapper = styled.div`
  display: flex;
  align-items: flex-start;

  height: 100%;
  flex-shrink: 0;
`;
export const ProjectCategoryCardIcon = styled.div``;
