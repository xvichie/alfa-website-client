import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@mui/material/styles';
import theme from './themes/theme';
import {RouterProvider } from 'react-router-dom';

import { Provider } from 'react-redux'
import { store } from './redux/store';
import AppRouter from './AppRouter';







const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <AppRouter></AppRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);

