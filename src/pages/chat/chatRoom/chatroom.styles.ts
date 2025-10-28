import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px;
  padding-bottom: 100px;
  width: 100%;
  min-height: calc(100vh - 100px);
  overflow-y: auto;
  max-height: calc(100vh - 200px);
`;

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  font-size: 16px;
  color: #666;
`;

export const chatRoomsContainer = styled.div`
  background-color: ${colors.gray[100]};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const InputWrapper = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  padding: 16px;
  background-color: ${colors.gray[50]};
  width: 100%;
  max-width: 425px;
`;
