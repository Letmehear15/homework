import { Alert, Box, List, ListItem, ListItemButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { useTodo } from '../../context/TodoProvider';

export const TodoList = () => {
  const { todos, errorText } = useTodo();
  const navigate = useNavigate();

  if (todos.length === 0) {
    return null;
  }

  const onNavigate = (id: number) => {
    navigate(`${paths.TODO_PAGE}/${id}`);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper' }}>
      {errorText && <Alert severity="error">{errorText}</Alert>}

      <List>
        {todos.map(({ id, todo }) => (
          <ListItem disablePadding key={id}>
            <ListItemButton onClick={() => onNavigate(id)}>{todo}</ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
