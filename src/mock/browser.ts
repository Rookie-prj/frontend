import { setupWorker } from 'msw/browser';
import { ex } from './ex';
import { rookie } from './rookie';
import { project } from './project';
import { postUserCheerup } from './cheerup';
import { savedBoards as savedBoardsHandler } from './savedBoards';
import { myProjectBoards, deleteMyProject, modifyProjectActive } from './myProject';
import {
  chatRooms,
  chatRoomMessages,
  chatRoomDetail,
  sendMessage,
  sendMessageToRoom,
  markMessagesAsRead,
} from './chat';
import { addBookmark, removeBookmark } from './bookmark';
import { myProfileDetail } from './myProfile';
import { filterBoardsHandler } from './filterBoards';
import { allNotifications, markNotificationAsRead } from './notification';

const handlers = [
  ex,
  savedBoardsHandler,
  rookie,
  project,
  postUserCheerup,
  myProjectBoards,
  deleteMyProject,
  modifyProjectActive,
  chatRooms,
  chatRoomMessages,
  chatRoomDetail,
  sendMessage,
  sendMessageToRoom,
  markMessagesAsRead,
  addBookmark,
  removeBookmark,
  myProfileDetail,
  filterBoardsHandler,
  allNotifications,
  markNotificationAsRead,
];

export const worker = setupWorker(...handlers);
