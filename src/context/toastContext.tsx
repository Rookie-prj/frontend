import { createContext } from 'react';

export interface ToastContextProps {
  isOpen: boolean;
  message?: string;
  duration?: number;
  isError?: boolean;
  onClose: (event?: React.SyntheticEvent) => void;
}

const defaultContext: Partial<ToastContextProps> = {
  isOpen: false,
  message: undefined,
  duration: 3000,
  isError: false,
  onClose: () => {},
};

export const ToastContext = createContext<Partial<ToastContextProps>>(defaultContext);
