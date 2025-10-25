import { API_ENDPOINT } from '../../../constants/apiEndpoint';
import { apiClient } from '../../../api/index';
import { SavedLibraryResponse } from '../../../models/saved';
import { MyProjectLibraryResponse } from '../../../models/myProject';

interface GetSavedBoardsParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
}

interface GetMyProjectBoardsParams {
  page?: number;
  size?: number;
  sortBy?: string;
  sortDirection?: string;
}

export const getSavedBoards = (params: GetSavedBoardsParams = {}) => {
  const { page = 0, size = 10, sortBy = 'createdAt', sortDirection = 'desc' } = params;

  return apiClient.get<SavedLibraryResponse>(API_ENDPOINT.LIBRARY_SAVED, {
    params: {
      page,
      size,
      sortBy,
      sortDirection,
    },
  });
};

export const getMyProjectBoards = (params: GetMyProjectBoardsParams = {}) => {
  const { page = 0, size = 10, sortBy = 'createdAt', sortDirection = 'desc' } = params;

  return apiClient.get<MyProjectLibraryResponse>(API_ENDPOINT.LIBRARY_MY_PROJECT, {
    params: {
      page,
      size,
      sortBy,
      sortDirection,
    },
  });
};
