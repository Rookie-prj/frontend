import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

export const BottomSheetContainer = styled.div`
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 425px;
  background-color: white;
  border-radius: 18px;
  padding: 0;
  padding-bottom: 20px;
  z-index: 1000;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateX(-50%) translateY(100%);
    }
    to {
      transform: translateX(-50%) translateY(0);
    }
  }
`;

export const Handle = styled.div`
  width: 38px;
  height: 0;
  border: 2px solid #edeff2;
  //border-radius: 999px;
  margin: 10px auto;
`;

export const Title = styled.h2`
  font-family: Pretendard;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44em;
  letter-spacing: -0.02em;
  color: #101828;
  padding: 17px 23px 24px;
  margin: 0;
`;

export const OptionList = styled.div`
  display: flex;
  flex-direction: column;
`;

export const OptionItem = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 46px;
  padding: 0 23px 0 0;
  background: none;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    background-color: #f2f4f7;
  }
`;

export const OptionLeft = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 14px;
  padding-left: 23px;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const OptionText = styled.span`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.375em;
  letter-spacing: -0.01em;
  color: #1e2939;
`;

export const ChevronIcon = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }
`;
