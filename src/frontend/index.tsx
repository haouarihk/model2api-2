import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);

console.log('👋 This message is being logged by "renderer.ts", included via Vite');
