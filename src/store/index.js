import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/user.slice';
import todosReducer from './slices/todos.slice';

const store = configureStore({
  reducer: {
    users: usersReducer,
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const unsubscribe =
store.subscribe(() => {
  const state = store.getState();
  console.log('🚀 ~ file: index.js:14 ~ unsubscribe ~ state', state);
  //inject to ls
});
// unsubscribe();

export default store;
