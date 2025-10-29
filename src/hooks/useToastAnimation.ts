import { useEffect, useState } from 'react';

interface UseToastAnimationOptions {
  isOpen: boolean;
  duration?: number;
  onClose: () => void;
  animationDelay?: number; // DOM 추가 후 애니메이션 시작까지의 딜레이 (기본값: 10ms)
  animationDuration?: number; // fadeOut 애니메이션 지속 시간 (기본값: 300ms)
}

/**
 * 토스트 애니메이션 및 자동 닫힘 로직을 관리하는 훅
 *
 * @param isOpen - 토스트 열림/닫힘 상태
 * @param duration - 자동 닫힘 시간 (ms, 0이면 자동 닫힘 안 함)
 * @param onClose - 닫힘 콜백
 * @param animationDelay - DOM 추가 후 애니메이션 시작 딜레이 (기본값: 10ms)
 * @param animationDuration - fadeOut 애니메이션 지속 시간 (기본값: 300ms)
 *
 * @returns { shouldRender: boolean, isVisible: boolean }
 */
export const useToastAnimation = ({
  isOpen,
  duration = 3000,
  onClose,
  animationDelay = 10,
  animationDuration = 300,
}: UseToastAnimationOptions) => {
  const [isVisible, setIsVisible] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  // 토스트 열림/닫힘 상태에 따른 렌더링 및 애니메이션 관리
  useEffect(() => {
    if (isOpen) {
      // DOM에 추가
      setShouldRender(true);
      // 짧은 딜레이 후 애니메이션 시작 (DOM 렌더링 대기)
      const fadeInTimer = setTimeout(() => {
        setIsVisible(true);
      }, animationDelay);

      return () => clearTimeout(fadeInTimer);
    } else {
      // fadeOut 애니메이션 시작
      setIsVisible(false);
      // 애니메이션 완료 후 DOM에서 제거
      const fadeOutTimer = setTimeout(() => {
        setShouldRender(false);
      }, animationDuration);

      return () => clearTimeout(fadeOutTimer);
    }
  }, [isOpen, animationDelay, animationDuration]);

  // 자동 닫힘 타이머
  useEffect(() => {
    if (isOpen && duration > 0) {
      const autoCloseTimer = setTimeout(() => {
        setIsVisible(false);
        // fadeOut 애니메이션 완료 후 onClose 호출
        setTimeout(() => {
          onClose();
        }, animationDuration);
      }, duration);

      return () => clearTimeout(autoCloseTimer);
    }
  }, [isOpen, duration, onClose, animationDuration]);

  return {
    shouldRender,
    isVisible,
  };
};
