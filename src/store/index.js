import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/user.slice';
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

// function kickUserIfNotSet() {
//   const state = store.getState();
//   console.log("🚀 ~ file: index.js:19 ~ kickUserIfNotSet ~ state", state)

//   if (state.users.name.length < 1) {
//     router.navigate('/login');
//   }
// }

store.dispatch(setFromLocalStorage(''));

// kickUserIfNotSet();
// // const unsubscribe =
// store.subscribe(() => {
//   kickUserIfNotSet();
//   //inject to ls
// });
// // unsubscribe();

export default store;
