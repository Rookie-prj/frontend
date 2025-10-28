import { apiClient } from '../../../api/index';
import { API_ENDPOINT } from '../../../constants/apiEndpoint';

export const addBookmark = (boardId: number) => {
  return apiClient.post(`${API_ENDPOINT.BOOKMARK}/${boardId}`);
};

export const removeBookmark = (boardId: number) => {
  return apiClient.delete(`${API_ENDPOINT.BOOKMARK}/${boardId}`);
};
