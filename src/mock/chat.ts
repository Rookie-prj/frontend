import { API_ENDPOINT } from '../constants/apiEndpoint';
import { HttpResponse, http } from 'msw';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || '';

export const mockChatRooms = [
  {
    id: '1',
    participants: [1, 2],
    createdAt: '2025-01-20T10:30:00.000Z',
    unreadCount: 3,
    userName: '춤추는 사자',
    lastMessage: '아 디자인은 피그마로 진행하시는 거죠?',
  },
  {
    id: '2',
    participants: [1, 3],
    createdAt: '2025-01-19T15:20:00.000Z',
    unreadCount: 0,
    userName: '코딩하는 고양이',
    lastMessage: '네 맞습니다!',
  },
  {
    id: '3',
    participants: [1, 4, 5],
    createdAt: '2025-01-18T09:15:00.000Z',
    unreadCount: 12,
    userName: '프론트엔드 개발자',
    lastMessage: '리액트 쿼리를 사용하면 데이터 fetching이 편해집니다.',
  },
];

export const chatRooms = http.get(`${API_BASE_URL}${API_ENDPOINT.CHAT_ROOMS}`, () => {
  return HttpResponse.json(mockChatRooms, {
    status: 200,
  });
});
