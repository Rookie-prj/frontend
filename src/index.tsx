import { createRoot } from 'react-dom/client';
import react from 'react';
import App from './App';

async function mountApp() {
  if (process.env.NODE_ENV === 'development') {
    const { worker } = await import('./mock/browser');
    await worker.start();
  }

  createRoot(document.getElementById('root')!).render(
    <react.StrictMode>
      <App />
    </react.StrictMode>,
  );
}

mountApp();
