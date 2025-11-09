export interface Notification {
  id: number;
  message: string;
  createdAt: string;
  read: boolean;
}

export type NotificationList = Notification[];
