import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-5px);
  }
`;

export const ToastContainer = styled.div<{ isClosing: boolean }>`
  max-width: 425px;
  width: 100%;
  min-height: 56px;
  padding: 16px 10px;
  background-color: ${colors.green[100]};
  border-radius: 6px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  position: absolute;
  bottom: -70px;
  gap: 10px;
  animation: ${({ isClosing }) => (isClosing ? fadeOut : fadeIn)} 0.3s ease-in-out;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const MessageText = styled.p`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: ${colors.gray[700]};
  margin: 0;
  flex: 1;
  word-break: keep-all;
`;

export const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  svg {
    width: 10px;
    height: 10px;
  }
`;
