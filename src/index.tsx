import { CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { App } from './App';
import { TodoProvider } from './context/TodoProvider';
import { darkTheme } from './theme';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <TodoProvider>
        <App />
      </TodoProvider>
    </ThemeProvider>
  </BrowserRouter>
);
