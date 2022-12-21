import { Container, Paper } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TodoDetail } from './components/TodoDetail';
import { TodoList } from './components/TodoList';
import { paths } from './constants/paths';

export const App = () => {
  return (
    <Paper sx={{ height: '100vh', pt: 5 }}>
      <Container maxWidth="md">
        <Routes>
          <Route path={paths.HOME_PAGE} element={<TodoList />} />

          <Route path={`${paths.TODO_PAGE}/:todoId`} element={<TodoDetail />} />
        </Routes>
      </Container>
    </Paper>
  );
};
