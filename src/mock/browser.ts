import { setupWorker } from 'msw/browser';
import { ex } from './ex';
import { rookie } from './rookie';
import { project } from './project';
import { postUserCheerup } from './cheerup';

const handlers = [ex, rookie, project, postUserCheerup];

export const worker = setupWorker(...handlers);
