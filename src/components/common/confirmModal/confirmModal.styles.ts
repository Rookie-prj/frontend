import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export const ConfirmModalContainer = styled.div`
  width: 260px;
  height: 123px;
  background-color: ${colors.white};
  border: 1.25px solid ${colors.gray[100]};
  border-radius: 16px;
  padding: 27px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.div`
  width: 149px;
  height: 20px;
  color: ${colors.gray[700]};
  font-size: ${typography.subhead.subhead3.fontSize};
  font-weight: ${typography.subhead.subhead3.fontWeight};
  line-height: ${typography.subhead.subhead3.lineHeight};
  text-align: center;
  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  width: 227px;
  height: 43px;
`;

export const ConfirmButton = styled.button`
  width: 227px;
  height: 43px;
  background-color: ${colors.green[200]};
  border: none;
  border-radius: 8px;
  color: ${colors.black};
  font-size: ${typography.subhead.subhead3.fontSize};
  font-weight: ${typography.subhead.subhead3.fontWeight};
  line-height: ${typography.subhead.subhead3.lineHeight};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${colors.green[300]};
  }

  &:active {
    background-color: ${colors.green[400]};
  }
`;
