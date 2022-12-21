import { createContext, useContext, useEffect, useState } from 'react';
import { todoApi } from '../api/api';
import { Loading } from '../components/Loading';
import { ITodo } from '../components/TodoList/todoList.types';
import { FCC } from '../types/fcc';

interface ITodoContext {
  todos: ITodo[];
  isLoading: boolean;
  errorText: string;
  setErrorText: (errorText: string) => void;
}

const initState: ITodoContext = {
  todos: [],
  errorText: '',
  isLoading: false,
  setErrorText: () => {},
};

export const TodoContext = createContext<ITodoContext>(initState);

export const TodoProvider: FCC = ({ children }) => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);

        const res = await todoApi.getTodoList();
        setErrorText('');

        if (res) {
          setTodos(res);
        }
      } catch (error) {
        setErrorText('Some error occurred');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const value = { todos, isLoading, errorText, setErrorText };

  if (isLoading) {
    return <Loading />;
  }

  return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

export const useTodo = () => {
  return useContext(TodoContext);
};
