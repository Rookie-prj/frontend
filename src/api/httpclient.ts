import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import HttpError from './httpError';
import throwAPIError from './throwAPIError';
import { refreshAccessToken, saveAccessToken, clearAuthData, getAccessToken } from './token';

export const BASE_URL = process.env.REACT_APP_API_BASE_URL ?? '';

const DEFAULT_TIMEOUT = 15000;

interface APIClientType {
  get<T>(path: string, config?: AxiosRequestConfig): Promise<T>;
  post<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  delete<T>(path: string, config?: AxiosRequestConfig): Promise<T>;
}

export class APIClient implements APIClientType {
  private client: AxiosInstance;

  constructor(config?: AxiosRequestConfig) {
    this.client = axios.create({
      baseURL: BASE_URL,
      timeout: DEFAULT_TIMEOUT,
      headers: {
        'Content-Type': 'application/json',
        ...(config?.headers || {}),
      },
      withCredentials: true,
      ...config,
    });

    this.setupRequestInterceptor();
    this.setupResponseInterceptor();
  }

  private setupRequestInterceptor(): void {
    this.client.interceptors.request.use(
      (config) => {
        // 액세스 토큰이 있으면 Authorization 헤더에 추가
        const accessToken = getAccessToken();
        if (accessToken) {
          config.headers = config.headers || {};
          config.headers['Authorization'] = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        console.error('Request interceptor error:', error);
        return Promise.reject(error);
      },
    );
  }

  private setupResponseInterceptor(): void {
    this.client.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;
        const status = error.response?.status;
        const requestUrl = originalRequest?.url || '';

        // 리프레시 토큰 API 호출 자체는 토큰 갱신 로직에서 제외 (무한루프 방지)
        if (requestUrl.includes('/rookie/refresh') || requestUrl.includes('/refresh')) {
          return Promise.reject(error);
        }

        // 401(Unauthorized) 또는 500(Internal Server Error) 발생 시 토큰 갱신 시도
        // 500 에러도 토큰 만료로 인한 경우가 많음
        if ((status === 401 || status === 500) && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            console.log(`🔄 ${status} 에러 발생, 토큰 갱신 시도`);

            // 리프레시 토큰으로 새 액세스 토큰 요청
            const refreshResponse = await refreshAccessToken();

            // 새 액세스 토큰을 localStorage에 저장
            if (refreshResponse.accessToken) {
              saveAccessToken(refreshResponse.accessToken);

              // 원래 요청에 새 토큰 추가
              originalRequest.headers = originalRequest.headers || {};
              originalRequest.headers['Authorization'] = `Bearer ${refreshResponse.accessToken}`;

              // 원래 요청 재시도
              return this.client.request(originalRequest);
            }
          } catch (refreshError) {
            console.error('❌ 토큰 갱신 실패:', refreshError);

            // 토큰 갱신 실패 시 모든 인증 데이터 삭제 후 로그인 페이지로 리다이렉트
            clearAuthData();

            return Promise.reject(refreshError);
          }
        }

        return Promise.reject(error);
      },
    );
  }

  private async request<T>(config: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.client.request<T>(config);
      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throwAPIError(error.response.status);
      }
      if (error instanceof HttpError) {
        console.error(`HTTP Error ${error.status}: ${error.message}`);
      }
      throw error;
    }
  }

  async get<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'GET', url: path });
  }

  async post<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'POST', url: path, data });
  }

  async patch<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH', url: path, data });
  }

  async put<T>(path: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT', url: path, data });
  }

  async delete<T>(path: string, config?: AxiosRequestConfig): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE', url: path });
  }
}
