import { API_ENDPOINT } from '../../../constants/apiEndpoint';
import { apiClient } from '../../../api/index';
import { Project, ProjectResponse, RookieList } from 'models';

interface GetProjectsParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
}

export const getProjects = (params: GetProjectsParams = {}) => {
  const { page = 0, size = 10, sortBy = 'createdAt', sortDirection = 'desc' } = params;

  return apiClient.get<ProjectResponse>(API_ENDPOINT.PROJECT, {
    params: {
      page,
      size,
      sortBy,
      sortDirection,
    },
  });
};
