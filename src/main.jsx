import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from './App';
import './index.css';

import { UserProvider } from './context/user.context';
import { TodoProvider } from './context/todos.context';

import router from './router.jsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>
    </UserProvider>
  </React.StrictMode>
);
