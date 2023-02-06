import { createSlice } from '@reduxjs/toolkit';
import localStorageService from '../../utils/localStorage';
import generateUUID from '../../utils/uuid';

function todoFactory() {
  return { id: generateUUID(), title: '', description: '', date: new Date() };
}

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

export const todoSlice = createSlice({
  name: 'todos',
  initialState: { todos: [...sampleTodos] },
  reducers: {
    createTodo: (state, action) => {
      const newTodo = todoFactory();
      const { title, description, date } = action.payload.todo;
      state.todos.push({ ...newTodo, description, title, id, date });
    },
    editTodo: (state, action) => {
      const { id, title, description, date } = action.payload.todo;
      const todoIdx = state.todos.findIndex((todo) => todo.id === id);
      if (todoIdx === -1) {
        throw new Error(`Invalid id`);
      }

      state.todos[todoIdx] = { ...state.todos[todoIdx], description, title, date };
    },
    deleteTodo: (state, action) => {
      const todoIdx = state.todos.findIndex((todo) => todo.id === action.payload.id);
      if (todoIdx === -1) {
        throw new Error(`Invalid id`);
      }
      state.todos.splice(todoIdx, 1);
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
