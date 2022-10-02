import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Example from './App';

export const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  </StrictMode>
);
