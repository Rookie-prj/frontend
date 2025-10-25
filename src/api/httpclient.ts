import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import HttpError from './httpError';
import throwAPIError from './throwAPIError';

export const BASE_URL = 'http://3.34.183.203';

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
        // 인증과 관련된 헤더같은 로직을 추가해주세요.
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

        if (error.response?.status === 401 && !originalRequest._retry) {
          originalRequest._retry = true;

          try {
            // 리프레시 토큰으로 새 액세스 토큰 요청할 수있는 로직 추가해주세여
          } catch (refreshError) {
            console.error('Token refresh failed:', refreshError);
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
        console.error(`HTTP Error ${error.statusCode}: ${error.message}`);
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
