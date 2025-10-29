import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translate(-50%, 0);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -20px);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 0;
    transform: translate(-50%, 0);
  }
`;

export const ToastContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  bottom: 100px;
  left: 50%;
  max-width: 430px;
  padding: 0 16px;
  width: 100%;
  z-index: 1000;
  animation: ${({ isVisible }) => (isVisible ? fadeIn : fadeOut)} 0.3s ease-in-out forwards;
  pointer-events: none;
`;

export const ToastBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  min-height: 40px;
  padding: 16px 10px;
  background-color: #bdf9cb;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.05);
`;

export const ToastMessage = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: -0.01em;
  color: #364153;
  text-align: left;
`;
