import styled from '@emotion/styled';

interface BottomSheetContainerProps {
  $isOpen: boolean;
  $translateY: number;
}

export const BottomSheetOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;

export const BottomSheetContainer = styled.div<BottomSheetContainerProps>`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%)
    ${({ $isOpen, $translateY }) => ($isOpen ? `translateY(${$translateY}px)` : 'translateY(100%)')};
  transition: ${({ $isOpen }) => ($isOpen ? 'transform 0.3s ease-out' : 'transform 0.3s ease-in')};
  right: 0;
  max-height: 80vh;
  min-height: 550px;
  background: white;
  border-radius: 16px 16px 0 0;
  z-index: 1001;
  display: flex;
  flex-direction: column;
  width: 430px;
  touch-action: pan-y;
`;

export const BottomSheetContent = styled.div`
  padding: 10px 16px 16px 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 100%;

  h2 {
    font-size: 18px;
    font-weight: 700;
    color: #1e2939;
    margin: 0;
    line-height: 1.44;
  }
`;

export const BottomSheetHandle = styled.div`
  width: 38px;
  height: 4px;
  background: #edeff2;
  border-radius: 2px;
  margin: 10px auto;
  flex-shrink: 0;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

export const BottomSheetHeader = styled.div`
  flex-shrink: 0;
  user-select: none;
  cursor: grab;

  &:active {
    cursor: grabbing;
  }
`;

interface ButtonWrapperProps {
  $hasReset?: boolean;
}

export const BottomSheetButtonsContainer = styled.div`
  display: flex;
  gap: 14px;
  padding: 0 16px 10px 16px;
  position: sticky;
  bottom: 0;
  background: white;
  border-top: 1px solid #f3f4f6;
  margin: 0 -16px -16px -16px;
`;

export const BottomSheetScrollableContent = styled.div`
  flex: 1;
  overflow-y: auto;
  min-height: 0;
  touch-action: pan-y;
`;

export const BottomSheetButtonWrapper = styled.div<ButtonWrapperProps>`
  flex: ${({ $hasReset }) => ($hasReset ? 1 : 0)};
  width: ${({ $hasReset }) => ($hasReset ? 'auto' : '100%')};
`;
