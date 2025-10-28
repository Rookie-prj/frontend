export interface ChatRoom {
  id: string;
  participants: number[];
  createdAt: string;
  unreadCount: number;
  userName?: string;
  lastMessage?: string;
}
