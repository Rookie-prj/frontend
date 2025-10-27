import { useContext } from 'react';
import { ErrorBoundaryContext } from '../context/ErrorBoundaryContext';
import * as S from './ErrorFallBack.styles';
import Button from '../components/common/button/button';
import { HTTP_STATUS } from '../constants/http';
import HttpError from '../api/httpError';
import rookieGray from '../assets/icons/rookieGray.svg';
import Header from '../components/header/header';

interface ErrorFallBackProps {
  error: HttpError;
}

const getErrorMessage = (statusCode: number | 'unknown') => {
  const errorMessage = HTTP_STATUS[statusCode as keyof typeof HTTP_STATUS];
  return errorMessage ?? '알 수 없는 오류가 발생했습니다.';
};

const ErrorFallback = ({ error }: ErrorFallBackProps) => {
  const errorMessage = getErrorMessage(error.response?.status ?? 'unknown');

  const context = useContext(ErrorBoundaryContext);
  if (!context) return null;

  const { resetErrorBoundary } = context;

  return (
    <>
      <div style={{ padding: '0 16px' }}>
        <Header type="backdrop" />
      </div>
      <S.Container>
        <img src={rookieGray} alt="rookieGray" />
        <S.ErrorMessage>{errorMessage}</S.ErrorMessage>
        <div style={{ display: 'flex', justifyContent: 'center', width: '300px' }}>
          <Button size="medium" variant="primary" onClick={resetErrorBoundary}>
            재시도하기
          </Button>
        </div>
      </S.Container>
    </>
  );
};

export default ErrorFallback;
