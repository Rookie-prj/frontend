import { setupWorker } from 'msw/browser';
import { ex } from './ex';
import { rookie } from './rookie';
import { project } from './project';
import { postUserCheerup } from './cheerup';
import { savedBoards } from './savedBoards';
import { myProjectBoards } from './myProject';

const handlers = [ex, rookie, project, postUserCheerup, savedBoards, myProjectBoards];

export const worker = setupWorker(...handlers);
