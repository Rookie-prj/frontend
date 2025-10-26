import { useEffect, useState, ReactNode } from 'react';
import {
  BottomSheetContainer,
  BottomSheetContent,
  BottomSheetHandle,
  BottomSheetHeader,
  BottomSheetOverlay,
  BottomSheetButtonsContainer,
  BottomSheetButtonWrapper,
  BottomSheetScrollableContent,
} from './bottomSheet.styles';
import Button from '../button/button';
import { useOutsideClick } from '../../../hooks/useOutsideClick';
import { usePreventScroll } from '../../../hooks/usepreventScroll';

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  onReset?: () => void;
  onConfirm?: () => void;
  resetLabel?: string;
  confirmLabel?: string;
}

const BottomSheet = ({
  isOpen,
  onClose,
  children,
  title,
  onReset,
  onConfirm,
  resetLabel = '초기화',
  confirmLabel = '다음',
}: BottomSheetProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  usePreventScroll(isOpen);
  const ref = useOutsideClick(() => handleClose());
  // 바텀 시트 닫기 처리
  const handleClose = () => {
    setCurrentY(0);
    onClose();
  };

  // 드래그 시작
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  // 드래그 중
  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging || !isOpen) return;

    const containerHeight = window.innerHeight * 0.8; // max-height: 80vh
    const moveY = e.touches[0].clientY - startY;

    // 아래로 드래그할 때만 적용
    if (moveY > 0) {
      // 최대 높이를 넘지 않도록 제한
      const clampedY = Math.min(moveY, containerHeight * 0.5);
      setCurrentY(clampedY);
    }
  };

  // 드래그 종료
  const handleTouchEnd = () => {
    if (!isOpen) return;

    setIsDragging(false);

    // 30% 이상 내려가면 닫기
    if (currentY > window.innerHeight * 0.3) {
      handleClose();
    } else {
      // 원래 위치로 복귀
      setCurrentY(0);
    }
  };

  useEffect(() => {
    if (isOpen) {
      setCurrentY(0);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      <BottomSheetOverlay />
      <BottomSheetContainer ref={ref} $isOpen={isOpen} $translateY={currentY}>
        <BottomSheetContent>
          <BottomSheetHeader
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <BottomSheetHandle />
            {title && <h2>{title}</h2>}
          </BottomSheetHeader>
          <BottomSheetScrollableContent>{children}</BottomSheetScrollableContent>
          <BottomSheetButtonsContainer>
            {onReset && (
              <BottomSheetButtonWrapper $hasReset>
                <Button onClick={onReset} variant="gray" size="small">
                  {resetLabel}
                </Button>
              </BottomSheetButtonWrapper>
            )}
            {onConfirm && (
              <BottomSheetButtonWrapper $hasReset={!!onReset}>
                <Button onClick={onConfirm} variant="primary" size="small">
                  {confirmLabel}
                </Button>
              </BottomSheetButtonWrapper>
            )}
          </BottomSheetButtonsContainer>
        </BottomSheetContent>
      </BottomSheetContainer>
    </>
  );
};

export default BottomSheet;
