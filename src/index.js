import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Example1 from './Example1';
import Example2 from './Example2';

export const queryClient = new QueryClient();

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <h2>Example 1: </h2>
      <Example1 />
      <hr />
      <h2>Example 2: </h2>
      <Example2 />
    </QueryClientProvider>
  </StrictMode>
);
