import { ToastContext, type ToastContextProps } from '../../../context/toastContext';
import React, { PropsWithChildren } from 'react';

function ToastProvider({ value, children }: PropsWithChildren<{ value: ToastContextProps }>) {
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>;
}

export default ToastProvider;
