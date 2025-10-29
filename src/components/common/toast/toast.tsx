'use client';
import React, { PropsWithChildren } from 'react';
import ToastProvider from './toastProvider';
import { type ToastContextProps } from '../../../context/toastContext';
import { createPortal } from 'react-dom';
import * as S from './toast.styles';
import { useToastAnimation } from '../../../hooks/useToastAnimation';

function Toast({
  children,
  message,
  isError,
  isOpen,
  duration = 3000,
  onClose = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
}: PropsWithChildren<ToastContextProps>) {
  const { shouldRender, isVisible } = useToastAnimation({
    isOpen,
    duration,
    onClose: () => {
      onClose();
    },
  });

  const toastProps: ToastContextProps = {
    isOpen,
    onClose,
  };

  if (!shouldRender) return null;

  return createPortal(
    <ToastProvider value={toastProps}>
      <S.ToastContainer isVisible={isVisible}>
        <S.ToastBase $isError={isError}>
          {message ? <S.ToastMessage>{message}</S.ToastMessage> : children}
        </S.ToastBase>
      </S.ToastContainer>
    </ToastProvider>,
    document.getElementById('toast-root') as HTMLElement,
  );
}

export default Toast;
