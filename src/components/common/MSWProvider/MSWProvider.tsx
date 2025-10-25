import { ReactNode, useEffect, useState } from 'react';

interface MSWProviderProps {
  children: ReactNode;
}

export const MSWProvider = ({ children }: MSWProviderProps) => {
  const [mswReady, setMswReady] = useState(false);

  useEffect(() => {
    const initMSW = async () => {
      if (process.env.NODE_ENV === 'development') {
        const { worker } = await import('../../../mock/browser');
        await worker.start();
      }
      setMswReady(true);
    };

    initMSW();
  }, []);

  if (!mswReady) {
    return null;
  }

  return <>{children}</>;
};
