import { API_ENDPOINT } from '../../../constants/apiEndpoint';
import { apiClient } from '../../../api/index';
import { RookieList } from 'models';

interface GetRookieParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
}

export const getRookie = (params: GetRookieParams = {}) => {
  const { page = 0, size = 10, sortBy = 'createdAt', sortDirection = 'desc' } = params;

  return apiClient.get<RookieList>(API_ENDPOINT.ROOKIE, {
    params: {
      page,
      size,
      sortBy,
      sortDirection,
    },
  });
};
