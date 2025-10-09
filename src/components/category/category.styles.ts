import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export interface CategoryItemProps {
  active?: boolean;
  categoryType?: 'home' | 'hot';
}

export const CategoryWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding-bottom: 0.44rem;
  border-bottom: 2px solid #f5f7fa; /* 흰색 줄 */
  background: white;
`;

export const CategoryItem = styled.div<CategoryItemProps>`
  font-size: 1rem;
  display: flex;
  font-style: normal;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
  justify-content: center;
  font-weight: 700;
  color: ${({ active }) => (active ? colors.gray[900] : colors.gray[200])};
  width: ${({ categoryType }) => {
    switch (categoryType) {
      case 'home':
        return '1.8125rem';
      case 'hot':
        return '2.5625rem';
      default:
        return '1.8125rem';
    }
  }};
  position: relative;
  margin-left: ${({ categoryType }) => {
    switch (categoryType) {
      case 'home':
        return '1rem';
      case 'hot':
        return '1.13rem';
    }
  }};
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -0.55rem; /* 흰 줄 위에 오도록 */
    left: 0;
    width: 100%;
    height: 2px;

    background: ${({ active }) => (active ? '#1c1c1c' : 'transparent')};
  }
`;
