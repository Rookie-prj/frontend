import { useContext, useEffect, MutableRefObject } from 'react';
import { ErrorBoundaryContext } from '../context/ErrorBoundaryContext';
import * as S from './ErrorFallBack.styles';
import Button from '../components/common/button/button';
import { HTTP_STATUS } from '../constants/http';
import HttpError from '../api/httpError';
import rookieGray from '../assets/icons/rookieGray.svg';
import Header from '../components/header/header';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../constants/routes';

interface ErrorFallBackProps {
  error: HttpError;
  resetRef?: MutableRefObject<(() => void) | null>;
}

const getErrorMessage = (status: number | 'unknown') => {
  const errorMessage = HTTP_STATUS[status as keyof typeof HTTP_STATUS];
  console.log(status);
  if (
    status === HTTP_STATUS.UNAUTHORIZED ||
    status === HTTP_STATUS.FORBIDDEN ||
    status === HTTP_STATUS.INTERNAL_SERVER_ERROR
  ) {
    return '로그인 후 이용해주세요.';
  }
  return errorMessage ?? '알 수 없는 오류가 발생했습니다.';
};

const ErrorFallback = ({ error, resetRef }: ErrorFallBackProps) => {
  const errorMessage = getErrorMessage(error.status ?? 'unknown');
  const navigate = useNavigate();
  const context = useContext(ErrorBoundaryContext);
  if (!context) return null;
  const { resetErrorBoundary } = context;

  useEffect(() => {
    if (resetRef) {
      resetRef.current = resetErrorBoundary;
    }
  }, [resetErrorBoundary, resetRef]);

  const redicrecToLogin = () => {
    navigate(ROUTES.login);
  };

  const isAuthError =
    error.status === HTTP_STATUS.UNAUTHORIZED ||
    error.status === HTTP_STATUS.FORBIDDEN ||
    error.status === HTTP_STATUS.INTERNAL_SERVER_ERROR;

  return (
    <>
      <div style={{ padding: '0 16px' }}>
        <Header type="backdrop" />
      </div>
      <S.Container>
        <img src={rookieGray} alt="rookieGray" />
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>

        {!isAuthError && (
          <div style={{ display: 'flex', justifyContent: 'center', width: '300px' }}>
            <Button size="medium" variant="primary" onClick={resetErrorBoundary}>
              재시도하기
            </Button>
          </div>
        )}
        {isAuthError && (
          <div style={{ display: 'flex', justifyContent: 'center', width: '300px' }}>
            <Button size="medium" variant="primary" onClick={redicrecToLogin}>
              로그인 페이지로 이동
            </Button>
          </div>
        )}
      </S.Container>
    </>
  );
};

export default ErrorFallback;
