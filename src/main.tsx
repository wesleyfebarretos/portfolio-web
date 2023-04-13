import React from 'react';
import ReactDOM from 'react-dom/client';
import './global.css';
import { HomePage } from './pages/home/home';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
