import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
  padding: 9px 13px;
  width: 100%;
  height: 50px;
  background-color: #f3f4f6;
  border-radius: 99px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  width: 100%;
`;

export const MessageInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.5em;
  letter-spacing: -1%;
  color: #101828;

  &::placeholder {
    color: #99a1af;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SendButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  background-color: #d1d5dc;
  border: none;
  border-radius: 16px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  img {
    width: 12px;
    height: 12px;
  }
`;
