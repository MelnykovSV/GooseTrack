import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';
import Button from 'components/Button/Button';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/GooseTrack">
      <App />
      <Button secondary>Logout</Button>
    </BrowserRouter>
  </React.StrictMode>
);
