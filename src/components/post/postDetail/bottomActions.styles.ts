import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export const ActionButtonsContainer = styled.div`
  background: ${colors.gray[50]};
  padding: 0.625rem 0.9375rem;
  width: 100%;
  display: flex;
  gap: 0.3125rem;
  justify-content: center;
`;

export const ActionButton = styled.button`
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  height: 58px;
`;

export const SecondaryButton = styled(ActionButton)`
  background: ${colors.gray[150]};
  color: ${colors.gray[800]};
  flex: 1;
  max-width: 136px;
`;

export const PrimaryButton = styled(ActionButton)`
  background: ${colors.green[200]};
  color: ${colors.gray[800]};
  flex: 1;
  max-width: 202px;
`;
