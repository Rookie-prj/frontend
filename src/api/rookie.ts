import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { RookieDetail } from '../models/rookie';

export const getRookieDetail = (id: number) => {
  return apiClient.get<RookieDetail>(`${API_ENDPOINT.ROOKIE_DETAIL}/${id}`);
};
