import styled from '@emotion/styled';
import { colors } from '../../../style/colors';

export const DeleteConfirmModalContainer = styled.div`
  width: 260px;
  height: 119px;
  background-color: ${colors.white};
  border: 1.25px solid ${colors.gray[100]};
  border-radius: 16px;
  padding: 27px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.div`
  font-weight: 700;
  font-size: 14px;
  line-height: 1.43;
  color: ${colors.gray[800]};
  margin-bottom: 16px;
  text-align: left;
  width: 100%;
  align-self: flex-start;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;

export const CancelButton = styled.button`
  width: 114px;
  height: 43px;
  background-color: ${colors.gray[100]};
  border: none;
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.19;
  color: ${colors.gray[900]};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: ${colors.gray[200]};
  }
`;

export const DeleteButton = styled.button`
  width: 114px;
  height: 43px;
  background-color: #66f285;
  border: none;
  border-radius: 8px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.19;
  color: ${colors.gray[900]};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #5ae077;
  }
`;
