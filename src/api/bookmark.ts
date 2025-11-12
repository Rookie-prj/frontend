import { API_ENDPOINT } from '../constants/apiEndpoint';
import { apiClient } from './index';
import { Bookmark } from '../models/bookmark';

/**
 * 북마크 목록 조회
 * GET /api/bookmark
 */
export const getBookmarks = () => {
  return apiClient.get<Bookmark[]>(API_ENDPOINT.BOOKMARK);
};

/**
 * 북마크 추가
 * POST /api/bookmark
 */
export const addBookmark = (boardId: number) => {
  return apiClient.post(API_ENDPOINT.BOOKMARK, { boardId });
};

/**
 * 북마크 삭제
 * DELETE /api/bookmark/{boardId}
 */
export const removeBookmark = (boardId: number) => {
  return apiClient.delete(`${API_ENDPOINT.BOOKMARK}/${boardId}`);
};
