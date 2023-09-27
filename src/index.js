import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from 'components/App/App';
import './index.css';

import { ThemeProvider } from '@mui/material/styles';
import { lightTheme } from './theme';

import { Provider } from 'react-redux';
import { store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './redux/store';
import { injectStore } from './api';
injectStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={lightTheme}>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter basename="/GooseTrack">
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
