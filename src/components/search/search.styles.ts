import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const SearchPageContainer = styled.div`
  background: #fafbfe;
  min-height: 100vh;
  padding: 0 1rem;
  padding-top: 0.44rem;
`;

export const RecommendSection = styled.div`
  margin-bottom: 2.44rem;
`;

export const SectionTitle = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[800]};
  letter-spacing: -0.00875rem;
  margin: 0 0 0.63rem 0;
`;

export const FilterChipContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  flex-wrap: wrap;
`;

export const FilterChip = styled.button<{ isSelected?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  height: 2.0625rem;
  padding: 0.5rem 0.6875rem;
  border-radius: 999px;
  border: 1px solid ${colors.gray[500]};
  background: ${colors.gray[100]};
  cursor: pointer;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 0.625rem;
  line-height: normal;
  color: ${colors.gray[600]};
  white-space: nowrap;
  transition: all 0.2s;

  &:hover {
    background: ${colors.gray[200]};
  }
`;

export const RecentSearchSection = styled.div``;

export const RecentSearchHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const RecentSearchTitle = styled.p`
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[800]};
  letter-spacing: -0.00875rem;
  margin: 0;
`;

export const DeleteAllButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.125rem;
  color: ${colors.gray[400]};
  letter-spacing: -0.0075rem;
  white-space: nowrap;
`;

export const RecentSearchList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RecentSearchItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0;
`;

export const RecentSearchItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex: 1;
`;

export const SearchIcon = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecentSearchText = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${colors.gray[800]};
  letter-spacing: -0.00875rem;
  margin: 0;
  white-space: nowrap;
`;

export const DeleteButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  width: 1.25rem;
  height: 1.25rem;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
