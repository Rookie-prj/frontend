import { setupWorker } from 'msw/browser';
import { ex } from './ex';
import { rookie } from './rookie';
import { project } from './project';
import { postUserCheerup } from './cheerup';
import { savedBoards as savedBoardsHandler } from './savedBoards';
import { myProjectBoards, deleteMyProject, modifyProjectActive } from './myProject';
import { chatRooms } from './chat';
import { addBookmark, removeBookmark } from './bookmark';

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
  addBookmark,
  removeBookmark,
];

export const worker = setupWorker(...handlers);
