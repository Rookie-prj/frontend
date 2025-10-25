import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.12rem 0.5rem;
`;

export const CategoryItem = styled.div<{ isSelected: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.5rem 1rem;
  border-radius: 6.1875rem;
  border: 1.5px solid ${({ isSelected }) => (isSelected ? colors.green[200] : colors.gray[70])};

  background: ${({ isSelected }) => (isSelected ? colors.green[50] : 'white')};
  cursor: pointer;
  transition: all 0.2s ease;
  min-height: 8rem;
`;

export const CategoryIcon = styled.div`
  width: 4rem;
  height: 3.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CategoryLabel = styled.span<{ isSelected: boolean }>`
  font-size: 0.875rem;
  font-weight: 600;
  color: ${({ isSelected }) => (isSelected ? colors.green[600] : colors.gray[700])};
  text-align: center;
  line-height: 1.25rem;
`;
