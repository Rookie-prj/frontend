import styled from '@emotion/styled';

export const FixedBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  right: 0;
  max-width: 430px;
  width: 100%;
  height: 100px;
  background: #f9fafb;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 16px;
  z-index: 100;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.05);
  transform: translateX(-50%);
`;

export const ActionButton = styled.button<{ variant?: 'primary' | 'secondary' }>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 168px;
  height: 50px;
  padding: 16px;
  border-radius: ${(props) => (props.variant === 'primary' ? '8px' : '12px')};
  border: none;
  background: ${(props) => (props.variant === 'primary' ? '#66F285' : '#EDEFF2')};
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }
`;

export const ButtonText = styled.span<{ variant?: 'primary' | 'secondary' }>`
  font-family: Pretendard;
  font-size: ${(props) => (props.variant === 'primary' ? '14px' : '16px')};
  font-weight: 700;
  line-height: ${(props) => (props.variant === 'primary' ? '1.2em' : '1.375em')};
  letter-spacing: ${(props) => (props.variant === 'primary' ? '0' : '-0.01em')};
  color: ${(props) => (props.variant === 'primary' ? '#282828' : '#1E2939')};
  text-align: center;
`;

export const IconWrapper = styled.div`
  width: 18px;
  height: 21.23px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
