import { API_ENDPOINT } from '../../../constants/apiEndpoint';
import { apiClient } from '../../../api/index';
import { RookieList } from 'models';

interface GetRookieParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
  search?: string;
}

export const getRookie = (params: GetRookieParams = {}) => {
  const { page = 0, size = 10, sortBy = 'createdAt', sortDirection = 'desc', search } = params;

  const queryParams: Record<string, any> = {
    page,
    size,
    sortBy,
    sortDirection,
  };

  if (search) {
    queryParams.search = search;
  }

  return apiClient.get<RookieList>(API_ENDPOINT.ROOKIE, {
    params: queryParams,
  });
};
