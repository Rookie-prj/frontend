import { API_ENDPOINT } from '../../../constants/apiEndpoint';
import { apiClient } from '../../../api/index';
import { Project, ProjectResponse, RookieList } from 'models';

interface GetProjectsParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
  boardType?: string;
}

export const getProjects = (params: GetProjectsParams = {}) => {
  const { page = 0, size = 10, sortBy = 'createdAt', sortDirection = 'desc', boardType } = params;

  const queryParams: Record<string, any> = {
    page,
    size,
    sortBy,
    sortDirection,
  };

  if (boardType && boardType !== 'all') {
    queryParams.boardType = boardType;
  }

  return apiClient.get<ProjectResponse>(API_ENDPOINT.PROJECT, {
    params: queryParams,
  });
};
