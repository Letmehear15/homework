import axios from 'axios';
import { ITodo } from '../components/TodoList/todoList.types';

const instance = axios.create({
  baseURL: 'https://dummyjson.com/todos/?limit=10',
});

export const todoApi = {
  getTodoList: () => instance.get<{ todos: ITodo[] }>('').then(({ data }) => data.todos),
};
