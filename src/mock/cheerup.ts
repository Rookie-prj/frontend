import { API_ENDPOINT } from '../constants/apiEndpoint';
import { http, HttpResponse } from 'msw';
import { BASE_URL } from '../api/httpclient';
export const postUserCheerup = http.post(`${BASE_URL}${API_ENDPOINT.CHEERUP}/:userId`, () => {
  return HttpResponse.json({ message: 'success' }, { status: 200 });
});
