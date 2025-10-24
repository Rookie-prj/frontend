import styled from '@emotion/styled';
import { colors } from '../../../../style/colors';

export const QuestionsContainer = styled.div<{
  align?: 'center' | 'flex-start';
  hasNumber?: boolean;
  justifyContent?: string;
}>`
  display: flex;
  flex-direction: row;
  gap: ${({ hasNumber }) => (hasNumber ? '0.44rem' : '0')};
  align-items: ${({ align = 'center' }) => align};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'none'};
`;
export const QuestionsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const QuestionsText = styled.div`
  color: ${colors.gray[600]};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;
export const QuestionsTextDetail = styled.div`
  color: ${colors.gray[400]};
  font-size: 0.75rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.125rem;
  letter-spacing: -0.0075rem;
`;
export const QuestionsNumber = styled.img`
  display: flex;
`;
