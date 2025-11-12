import styled from '@emotion/styled';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 999;
`;

export const BottomSheetContainer = styled.div`
  position: fixed;
  bottom: 20px;
  left: 0;
  right: 0;
  background-color: #ffffff;
  border-radius: 18px;
  padding: 10px 16px 20px;
  z-index: 1000;
  width: 100%;

  max-width: 343px;
  margin: 0 auto;
  animation: slideUp 0.3s ease-out;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
    }
    to {
      transform: translateY(0);
    }
  }
`;

export const HandleBar = styled.div`
  width: 38px;
  height: 3.5px;
  background-color: #edeff2;
  border-radius: 2px;
  margin: 0 auto 17px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-family: 'Pretendard', sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 1.44;
  letter-spacing: -0.02em;
  color: #101828;
  margin: 0 0 12px 0;
  text-align: center;
`;

export const Description = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.43;
  letter-spacing: -0.01em;
  color: #4a5565;
  margin: 0 0 39px 0;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
`;
