import { configureStore } from '@reduxjs/toolkit';
import usersReducer, { removeUser } from './slices/user.slice';
import todosReducer from './slices/todos.slice';

import { setFromLocalStorage } from './slices/user.slice';

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

store.dispatch(setFromLocalStorage(''));

const unsubscribe = store.subscribe(() => {
  const state = store.getState();
  if (state.users.name.length > 0) {
    console.log('User name is present in the store');
    router.navigate('/login');
    store.dispatch(removeUser())
    unsubscribe();
  }
});

export default store;
