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
  sendMessage,
  sendMessageToRoom,
  markMessagesAsRead,
} from './chat';
import { addBookmark, removeBookmark } from './bookmark';
import { myProfileDetail } from './myProfile';

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
  sendMessage,
  sendMessageToRoom,
  markMessagesAsRead,
  addBookmark,
  removeBookmark,
  myProfileDetail,
];

export const worker = setupWorker(...handlers);
