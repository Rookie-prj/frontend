import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

interface CompletenessCardProps {
  isActive?: boolean;
}

export const CompletenessCard = styled.div<CompletenessCardProps>`
  background: ${({ isActive }) => (isActive ? colors.green[50] : colors.white)};
  border: 1.5px solid ${({ isActive }) => (isActive ? colors.green[200] : colors.gray[150])};
  border-radius: 0.625rem;
  padding: 1.12rem;
  cursor: pointer;
  width: 100%;
  transition: all 0.2s ease;
`;

export const CardContent = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const PercentageText = styled.p`
  color: ${colors.green[200]};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.25rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
`;

export const TitleText = styled.p`
  color: ${colors.black};
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const DescriptionText = styled.p`
  color: ${colors.gray[500]};
  font-size: 0.6875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const CompletenessContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.5rem;
  width: 100%;
`;
