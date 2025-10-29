import { colors } from '../../../style/colors';
import styled from '@emotion/styled';
export const PositionContainer = styled.div`
  margin-bottom: 3rem;
`;

export const PositionTitle = styled.h3`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.gray[800]};
  margin: 0 0 0.75rem 0;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
`;

export const PositionCards = styled.div`
  display: flex;
  gap: 0.5rem;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &:has(> *:only-child) > * {
    width: 100%;
    min-width: auto;
  }
`;

export const PositionCard = styled.div`
  background: ${colors.green[100]};
  border-radius: 0.625rem;
  padding: 0.8rem 1rem;
  position: relative;
  overflow: hidden;
  min-width: 19.375rem;
  height: 6.5rem;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const PositionCardContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: auto;
`;

export const PositionCardTitle = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.gray[900]};
  margin: 0;
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
`;

export const PositionCount = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: ${colors.gray[900]};
  line-height: 1.375rem;
  letter-spacing: -0.01rem;
`;

export const BackgroundShape = styled.div`
  position: absolute;
  right: 0%;
  bottom: 12%;
  z-index: 0;
`;

export const StatusBadge = styled.div`
  background: ${colors.gray[400]};
  border-radius: 999px;
  padding: 0.3125rem 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.405rem;
  height: 1.5625rem;
  width: fit-content;
  margin-bottom: auto;
`;

export const StatusDot = styled.div`
  width: 0.3125rem;
  height: 0.3125rem;
  background: ${colors.green[200]};
  border-radius: 50%;
  flex-shrink: 0;
`;

export const StatusText = styled.span`
  font-size: 0.625rem;
  font-weight: 700;
  color: ${colors.white};
  line-height: normal;
  white-space: nowrap;
`;
