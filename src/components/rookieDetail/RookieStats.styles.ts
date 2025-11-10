import styled from '@emotion/styled';
import { colors } from '../../style/colors';

export const StatsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 343px;
  height: 52px;
  position: relative;
`;

export const StatItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

export const StatValue = styled.div`
  color: ${colors.gray[950]};
  font-size: 18px;
  font-weight: 700;
  line-height: 1.44em;
  letter-spacing: -0.02em;
  text-align: center;
`;

export const StatLabel = styled.div`
  color: ${colors.gray[800]};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: -0.01em;
  text-align: center;
  white-space: nowrap;
`;

export const Divider = styled.div`
  width: 0;
  height: 52px;
  border-left: 1px solid ${colors.gray[150]};
`;

export const LevelBadge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50.91px;
  height: 27px;
`;

export const PassionMeterContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.6;
  }
`;

export const PassionMeterIcon = styled.div`
  width: 12px;
  height: 12px;
  background: ${colors.white};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const PassionMeterText = styled.div`
  color: ${colors.gray[800]};
  font-size: 10px;
  font-weight: 500;
  line-height: 1.2em;
  letter-spacing: -0.01em;
  width: 35px;
  text-align: center;
`;
