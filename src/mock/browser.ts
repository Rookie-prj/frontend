import { setupWorker } from 'msw/browser';
import { ex } from './ex';
import { rookie } from './rookie';
import { project } from './project';

const handlers = [ex, project];

export const worker = setupWorker(...handlers);
