import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import TodosPage from './components/pages/TodosPage';

const router = createBrowserRouter([
  // {
  //   path: '/',
  //   element: (
  //     <div>
  //       <h1>Hello World</h1>
  //     </div>
  //   ),
  // },
  {
    path: '/',
    element: <TodosPage />,
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
