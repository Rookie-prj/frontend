import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
export const ProjectCategorySectionContainer = styled.div<{
  slideIndex: number;
  isActive: boolean;
}>`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 1.13rem;
  margin-right: 1.13rem;
  justify-content: space-between;
  margin-top: ${({ slideIndex, isActive }) => {
    if (!isActive) return '0';
    return slideIndex === 1 ? '1.87rem' : '1.06rem';
  }};
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

  font-size: 0.75rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
