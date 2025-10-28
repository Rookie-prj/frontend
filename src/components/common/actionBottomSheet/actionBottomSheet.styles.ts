import styled from '@emotion/styled';

interface ActionBottomSheetContainerProps {
  $isOpen: boolean;
  $translateY: number;
}

export const ActionBottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1001;
`;

export const ActionBottomSheetContainer = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  bottom: 37px;
  left: 50%;
  transform: translateX(-50%) translateY(0);
  transition: transform 0.3s ease-out;
  width: 343px;
  height: 202px;
  max-width: calc(100% - 32px);
  background: white;
  border-radius: 18px;
  z-index: 1002;
  touch-action: pan-y;
`;

export const ActionBottomSheetContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

export const ActionBottomSheetHandle = styled.div`
  width: 38px;
  height: 3.5px;
  background: #edeff2;
  border-radius: 2px;
  margin-bottom: 37px;
  align-self: center;
`;

interface ActionItemProps {
  $variant: 'default' | 'destructive';
}

export const ActionItem = styled.div<ActionItemProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 0 23px;
  height: 46px;
  cursor: pointer;

  span {
    font-family: 'Pretendard', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.01em;
    color: ${({ $variant }) => ($variant === 'destructive' ? '#EF4444' : '#1E2939')};
  }

  svg {
    flex-shrink: 0;
    margin-right: 18px;
  }

  &:active {
    background-color: #f9fafb;
  }
`;
