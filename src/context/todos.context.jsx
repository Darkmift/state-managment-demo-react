import React, { createContext, useEffect, useState } from 'react';
import generateUUID from '../utils/uuid';

const sampleTodos = [
  {
    id: generateUUID(),
    title: 'Todo # 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.',
    date: new Date(),
  },
  {
    id: generateUUID(),
    title: 'Todo # 2',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.',
    date: new Date(),
  },
  {
    id: generateUUID(),
    title: 'Todo # 3',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus imperdiet, nulla et dictum interdum, nisi lorem egestas vitae scelerisque enim ligula venenatis dolor. Maecenas nisl est, ultrices nec congue eget, auctor vitae massa. Fusce luctus vestibulum augue ut aliquet. Nunc sagittis dictum nisi, sed ullamcorper ipsum dignissim ac. In at libero sed nunc venenatis imperdiet sed ornare turpis. Donec vitae dui eget tellus gravida venenatis. Integer fringilla congue eros non fermentum. Sed dapibus pulvinar nibh tempor porta.',
    date: new Date(),
  },
];

export const TodoContext = createContext({
  todos: [],
  addTodo: () => {},
  updateTodo: () => {},
  deleteTodo: () => {},
});

export const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    setTodos(sampleTodos);
  }, []);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (updatedTodo) => {
    setTodos(todos.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo)));
  };

  const deleteTodo = ({ id }) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        updateTodo,
        deleteTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
