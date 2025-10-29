import { createContext } from 'react';

export interface ToastContextProps {
  isOpen: boolean;
  message?: string;
  duration?: number;
  onClose: (event?: React.SyntheticEvent) => void;
}

const defaultContext: Partial<ToastContextProps> = {
  isOpen: false,
  message: undefined,
  duration: 3000,
  onClose: () => {},
};

export const ToastContext = createContext<Partial<ToastContextProps>>(defaultContext);
