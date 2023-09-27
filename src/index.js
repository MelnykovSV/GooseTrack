import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme, darkTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={lightTheme}>
    <React.StrictMode>
      <BrowserRouter basename="/GooseTrack">
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </ThemeProvider>
);
