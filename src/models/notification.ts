export interface Notification {
  id: number;
  message: string;
  projectId: number;
  supporterId: number;
  createdAt: string;
  read: boolean;
}

export type NotificationList = Notification[];
