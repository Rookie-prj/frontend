import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { RefreshTokenResponse } from '../models/auth';

/**
 * 리프레시 토큰으로 액세스 토큰 갱신
 * @returns Promise<RefreshTokenResponse>
 */
export const refreshAccessToken = async (): Promise<RefreshTokenResponse> => {
  try {
    console.log('🔄 액세스 토큰 갱신 시작:', {
      endpoint: API_ENDPOINT.ROOKIE_REFRESH,
    });

    const response = await apiClient.post<RefreshTokenResponse>(
      API_ENDPOINT.ROOKIE_REFRESH,
      {}, // 빈 body, RT는 쿠키로 전송
    );

    console.log('✅ 액세스 토큰 갱신 성공:', response);
    return response;
  } catch (error) {
    console.error('❌ 액세스 토큰 갱신 실패:', error);
    throw error;
  }
};

/**
 * 액세스 토큰을 localStorage에 저장
 * @param token 액세스 토큰
 */
export const saveAccessToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
  console.log('🔐 액세스 토큰 저장 완료');
};

/**
 * localStorage에서 액세스 토큰 가져오기
 * @returns 액세스 토큰 또는 null
 */
export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

/**
 * 액세스 토큰 삭제
 */
export const removeAccessToken = (): void => {
  localStorage.removeItem('accessToken');
  console.log('🗑️ 액세스 토큰 삭제 완료');
};

/**
 * 사용자 정보를 localStorage에 저장
 * @param userInfo 사용자 정보
 */
export const saveUserInfo = (userInfo: any): void => {
  localStorage.setItem('userInfo', JSON.stringify(userInfo));
  console.log('👤 사용자 정보 저장 완료:', userInfo);
};

/**
 * localStorage에서 사용자 정보 가져오기
 * @returns 사용자 정보 또는 null
 */
export const getUserInfo = (): any | null => {
  const userInfo = localStorage.getItem('userInfo');
  return userInfo ? JSON.parse(userInfo) : null;
};

/**
 * 사용자 정보 삭제
 */
export const removeUserInfo = (): void => {
  localStorage.removeItem('userInfo');
  console.log('🗑️ 사용자 정보 삭제 완료');
};

/**
 * 모든 인증 관련 데이터 삭제 (로그아웃)
 */
export const clearAuthData = (): void => {
  removeAccessToken();
  removeUserInfo();
  console.log('🧹 모든 인증 데이터 삭제 완료');
};

/**
 * 인증 상태 확인
 * @returns 인증된 사용자인지 여부
 */
export const isAuthenticated = (): boolean => {
  const token = getAccessToken();
  return token !== null && token !== '';
};
