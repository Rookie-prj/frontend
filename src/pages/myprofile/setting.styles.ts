import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 0 16px;
  padding-top: 16px;
  background-color: #fafbfe;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.5;
  letter-spacing: -0.01em;
  color: #1e2939;
  margin: 0 0 32px 0;
`;

export const SettingItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 0 12px;
  height: 49px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 8px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9fafb;
  }

  &:active {
    background-color: #f3f4f6;
  }
`;

export const SettingText = styled.span`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: #4a5565;
`;

export const IconImage = styled.img`
  width: 20px;
  height: 20px;
`;
