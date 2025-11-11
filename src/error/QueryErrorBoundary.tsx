import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorBoundary from './ErrorBoundary';
import ErrorFallback from './ErrorFallback';

export default function QueryErrorBoundary({ children }: PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary();
  const location = useLocation();
  const resetRef = useRef<(() => void) | null>(null);

  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    if (resetRef.current) {
      resetRef.current();
    }
  }, [location.pathname, location.key]);

  return (
    <ErrorBoundary
      onReset={handleReset}
      fallback={(props) => {
        const { error } = props;
        return <ErrorFallback error={error} resetRef={resetRef} />;
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
