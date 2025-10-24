import { ModalContext, type ModalContextProps } from '../../../context/modalContext';
import React, { PropsWithChildren } from 'react';

function ModalProvider({ value, children }: PropsWithChildren<{ value: ModalContextProps }>) {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export default ModalProvider;
