import { Box, Button, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { paths } from '../../constants/paths';
import { useTodo } from '../../context/TodoProvider';

export const TodoDetail = () => {
  const { todoId } = useParams();
  const navigate = useNavigate();

  const { todos, setErrorText } = useTodo();

  const selectedTodo = todos.find(({ id }) => id === Number(todoId));

  useEffect(() => {
    if (!todoId || !selectedTodo) {
      setErrorText('Todo detail was not found');
      navigate(paths.HOME_PAGE);
    } else {
      setErrorText('');
    }
  }, [todoId, selectedTodo, setErrorText, navigate]);

  const onClick = () => {
    navigate(paths.HOME_PAGE);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', p: 1 }}>
      <Button onClick={onClick}>Back</Button>

      <Box p={10}>
        <Typography textAlign="center">{selectedTodo?.todo}</Typography>
      </Box>
    </Box>
  );
};
