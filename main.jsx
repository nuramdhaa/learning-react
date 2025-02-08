import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client'; // Correct import
import './index.css';
import App from './App.jsx';

const root = createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);