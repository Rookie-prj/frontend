export interface ChatParticipant {
  userId: number;
  name: string;
  profileImageUrl: string;
}

export interface ChatLastMessage {
  id: string;
  roomId: string;
  senderId: number;
  content: string;
  messageType: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  profileUserId?: number;
  createdAt: string;
  isRead: boolean;
}

export interface ChatRoom {
  id: string;
  participants: ChatParticipant[];
  createdAt: string;
  unreadCount: number;
  lastMessage?: ChatLastMessage;
}

export interface ChatMessage {
  id: string;
  roomId: string;
  senderId: number;
  content: string;
  messageType: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  profileUserId?: number;
  createdAt: string;
  isRead: boolean;
}
