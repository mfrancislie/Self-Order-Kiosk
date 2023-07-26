import React from 'react';
import './index.css';
import { createRoot } from 'react-dom/client';
import App from './App';
import { StoreProvider } from './Store';
const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <StoreProvider>
    <App tab="home" />
  </StoreProvider>
);
