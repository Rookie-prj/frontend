import { API_ENDPOINT } from '../../../constants/apiEndpoint';
import { apiClient } from '../../../api/index';
import { RookieList } from 'models';

interface postCheerUpParams {
  targetUserId?: number;
}

export const postUserCheerUp = ({ targetUserId }: postCheerUpParams) => {
  return apiClient.post(`${API_ENDPOINT.CHEERUP}/${targetUserId}`);
};
