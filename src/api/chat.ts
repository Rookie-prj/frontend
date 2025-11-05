import { apiClient } from './index';
import { ChatRoom, ChatMessage } from '../models/chat';
import { API_ENDPOINT } from '../constants/apiEndpoint';

export const getMyChatRooms = () => {
  return apiClient.get<ChatRoom[]>(API_ENDPOINT.CHAT_ROOMS);
};

/**
 * 채팅방 상세 조회
 * @param roomId 채팅방 ID
 */
export const getChatRoomDetail = (roomId: string) => {
  return apiClient.get<ChatRoom>(`${API_ENDPOINT.CHAT_ROOM_MESSAGES}/${roomId}`);
};

export const getChatRoomMessages = (roomId: string) => {
  return apiClient.get<ChatMessage[]>(`${API_ENDPOINT.CHAT_ROOM_MESSAGES}/${roomId}/messages/all`);
};

interface SendMessageParams {
  targetUserId?: number;
  roomId?: string;
  content: string;
}

/**
 * 메시지 전송 (roomId가 없을 때 - 새 채팅방 생성)
 * @param targetUserId 상대방 ID
 * @param content 메시지 내용
 */
export const sendMessage = (targetUserId: number, content: string) => {
  return apiClient.post<ChatMessage>(
    `${API_ENDPOINT.CHAT_SEND}?targetUserId=${targetUserId}`,
    content,
  );
};

/**
 * 메시지 전송 (roomId가 있을 때 - 기존 채팅방)
 * @param roomId 채팅방 ID
 * @param content 메시지 내용
 */
export const sendMessageToRoom = (roomId: string, content: string) => {
  return apiClient.post<ChatMessage>(
    `${API_ENDPOINT.CHAT_SEND_TO_ROOM}/${roomId}/messages`,
    content,
  );
};

/**
 * 메시지 읽음 처리
 * @param roomId 채팅방 ID
 */
export const markMessagesAsRead = (roomId: string) => {
  return apiClient.put<void>(`${API_ENDPOINT.CHAT_ROOM_MESSAGES}/${roomId}/messages/read`);
};

/**
 * 파일 전송 (PDF, 이미지)
 * @param targetUserId 상대방 ID
 * @param content 메시지 내용
 * @param file 전송할 파일
 */
export const sendFileToChat = (targetUserId: number, content: string, file: File) => {
  const formData = new FormData();
  formData.append('file', file);

  return apiClient.post<ChatMessage>(
    `/api/chat/send/file?targetUserId=${targetUserId}&content=${encodeURIComponent(content)}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
