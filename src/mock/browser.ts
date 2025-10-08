import { setupWorker } from 'msw/browser';
import { ex } from './ex';

const handlers = [ex];

export const worker = setupWorker(...handlers);
