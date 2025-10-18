import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { colors } from '../../../style/colors';

const slideUp = keyframes`
  from {
    transform: translateY(100%);
  }
  to {
    transform: translateY(0);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalBaseContainer = styled.div`
  display: flex;
  border-radius: 1rem 1rem 0 0;
  background: ${colors.white};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.06);
  padding: 1.8125rem 0.9375rem 2.6875rem 1rem;
  flex-direction: column;
  align-items: flex-start;
  animation: ${slideUp} 0.3s ease-out;
  transform: translateY(0);
`;

export const ModalTitle = styled.div`
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.625rem;
  letter-spacing: -0.0225rem;
  color: ${colors.gray[800]};
`;
