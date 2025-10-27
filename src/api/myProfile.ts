import { apiClient } from './index';
import { API_ENDPOINT } from '../constants/apiEndpoint';
import { MyProfileBoard, MyProfileDetail } from '../models/myProfile';

export const getMyProfileBoards = (writer: string) => {
  return apiClient.get<MyProfileBoard[]>(`${API_ENDPOINT.LIBRARY_MY_PROJECT}?writer=${writer}`);
};

export const getMyProfileDetail = () => {
  return apiClient.get<MyProfileDetail>(API_ENDPOINT.LIBRARY_MY_DETAIL);
};
