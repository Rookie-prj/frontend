import { useCallback, useState } from 'react';

interface UseToastOptions {
  duration?: number;
}

const useToast = (options?: UseToastOptions) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [message, setMessage] = useState<string>('');
  const [duration, setDuration] = useState<number>(options?.duration || 3000);

  const handleToastOpen = useCallback((toastMessage?: string, toastDuration?: number) => {
    if (toastMessage) {
      setMessage(toastMessage);
    }
    if (toastDuration !== undefined) {
      setDuration(toastDuration);
    }
    setIsOpen(true);
  }, []);

  const handleToastClose = useCallback(() => {
    setIsOpen(false);
    // 닫힌 후 메시지 초기화 (선택사항)
    setTimeout(() => {
      setMessage('');
    }, 300);
  }, []);

  return {
    isOpen,
    message,
    duration,
    handleToastClose,
    handleToastOpen,
  };
};

export default useToast;
