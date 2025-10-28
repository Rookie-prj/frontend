import { API_ENDPOINT } from '../constants/apiEndpoint';
import { http, HttpResponse } from 'msw';
import { BASE_URL } from '../api/httpclient';

// 북마크 추가
export const addBookmark = http.post(`${BASE_URL}${API_ENDPOINT.BOOKMARK}/:boardId`, () => {
  return HttpResponse.json({ message: '북마크가 추가되었습니다.' }, { status: 200 });
});

// 북마크 삭제
export const removeBookmark = http.delete(`${BASE_URL}${API_ENDPOINT.BOOKMARK}/:boardId`, () => {
  return HttpResponse.json({ message: '북마크가 삭제되었습니다.' }, { status: 200 });
});
