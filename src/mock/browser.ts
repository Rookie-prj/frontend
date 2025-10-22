import { setupWorker } from 'msw/browser';
import { ex } from './ex';
import { rookie } from './rookie';

const handlers = [ex];

export const worker = setupWorker(...handlers);
