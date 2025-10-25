import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export const MultiSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const MultiSelectLabel = styled.div`
  font-size: 0.875rem;
  font-weight: 500;
  color: ${colors.gray[500]};
`;

export const TagsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.div<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.3125rem 0.625rem 0.3125rem 0;
  padding: 0.88rem 0.75rem;
  border: 1.5px solid ${({ isSelected }) => (isSelected ? colors.green[200] : colors.gray[200])};
  border-radius: 0.5rem;
  background: ${({ isSelected }) => (isSelected ? colors.green[50] : 'white')};
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  min-height: 2.5rem;
`;

export const TagText = styled.span<{ isSelected: boolean }>`
  color: ${colors.black};
  font-size: ${typography.subhead.subhead2.fontSize};
  font-style: normal;
  font-weight: ${typography.subhead.subhead2.fontWeight};
  line-height: ${typography.subhead.subhead2.lineHeight};
  letter-spacing: ${typography.subhead.subhead2.letterSpacing};
`;

export const SelectionBadge = styled.div`
  position: absolute;
  top: -0.25rem;
  right: -0.25rem;
  width: 1.25rem;
  height: 1.25rem;
  background: ${colors.green[200]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.75rem;
  font-weight: 600;
  color: white;
`;
