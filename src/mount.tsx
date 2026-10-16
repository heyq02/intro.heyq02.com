import { StrictMode, type ReactNode } from 'react';
import { createRoot } from 'react-dom/client';

export function mount(node: ReactNode) {
  const rootEl = document.getElementById('root');
  if (!rootEl) {
    return;
  }

  createRoot(rootEl).render(<StrictMode>{node}</StrictMode>);
}
