import HTTPError from './httpError';
import { HTTP_STATUS } from '../constants/api';

const ERROR_MESSAGES: Record<number, string> = {
  [HTTP_STATUS.BAD_REQUEST]: '잘못된 요청입니다.',
  [HTTP_STATUS.UNAUTHORIZED]: '인증이 필요합니다.',
  [HTTP_STATUS.FORBIDDEN]: '접근 권한이 없습니다.',
  [HTTP_STATUS.NOT_FOUND]: '요청한 리소스를 찾을 수 없습니다.',
  [HTTP_STATUS.CONFLICT]: '이미 존재하는 데이터입니다.',
  [HTTP_STATUS.UNPROCESSABLE_ENTITY]: '처리할 수 없는 요청입니다.',
  [HTTP_STATUS.INTERNAL_SERVER_ERROR]: '서버 오류가 발생했습니다.',
  [HTTP_STATUS.BAD_GATEWAY]: '게이트웨이 오류가 발생했습니다.',
  [HTTP_STATUS.SERVICE_UNAVAILABLE]: '서비스를 사용할 수 없습니다.',
};

export default function throwAPIError(statusCode: number): never {
  const message = ERROR_MESSAGES[statusCode] || '알 수 없는 오류가 발생했습니다.';
  throw new HTTPError(message, statusCode);
}
