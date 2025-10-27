import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { MyProfileDetail } from '../models/myProfile';

export const getMyProfileDetail = () => {
  return apiClient.get<MyProfileDetail>(API_ENDPOINT.LIBRARY_MY_DETAIL);
};
