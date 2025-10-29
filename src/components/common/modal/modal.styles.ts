import styled from '@emotion/styled';
import { colors } from '../../../style/colors';
import { typography } from '../../../style/theme';
export const ModalBase = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const ContentBase = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  background-color: ${colors.white};
  max-width: 80%;
  animation: fadeIn 0.3s ease-in-out forwards;
`;

export const BodyBase = styled.div`
  color: ${colors.black};
  width: 100%;
`;

export const HeaderBase = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const LabelBase = styled.div`
  font-size: ${typography.headline.headline4.fontSize};
  font-weight: 700;
  color: ${colors.black};
`;

export const CloseButton = styled.button`
  cursor: pointer;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  padding: 0;
`;
