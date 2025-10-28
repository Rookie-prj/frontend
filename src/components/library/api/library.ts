import { API_ENDPOINT } from '../../../constants/apiEndpoint';
import { apiClient } from '../../../api/index';
import { SavedLibraryResponse } from '../../../models/saved';
import { MyProjectLibraryResponse } from '../../../models/myProject';

interface GetMyProjectBoardsParams {
  writer?: string;
}

export const getSavedBoards = () => {
  return apiClient.get<SavedLibraryResponse>(API_ENDPOINT.LIBRARY_SAVED);
};

export const getMyProjectBoards = (params: GetMyProjectBoardsParams = {}) => {
  const { writer } = params;

  return apiClient.get<MyProjectLibraryResponse>(API_ENDPOINT.LIBRARY_MY_PROJECT, {
    params: {
      writer,
    },
  });
};

export const deleteMyProject = (boardId: number) => {
  return apiClient.delete(API_ENDPOINT.LIBRARY_DELETE_MY_PROJECT, {
    params: {
      boardId,
    },
  });
};

export const modifyProjectActive = (boardId: number, isActive: boolean) => {
  return apiClient.patch(API_ENDPOINT.LIBRARY_MODIFY_PROJECT_ACTIVE, undefined, {
    params: {
      boardId,
      isActive,
    },
  });
};
