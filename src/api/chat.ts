import { apiClient } from './index';
import { ChatRoom } from '../models/chat';
import { API_ENDPOINT } from '../constants/apiEndpoint';

export const getMyChatRooms = () => {
  return apiClient.get<ChatRoom[]>(API_ENDPOINT.CHAT_ROOMS);
};
