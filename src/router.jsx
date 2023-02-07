import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import TodosPage from './components/pages/TodosPage';
import PrivateRoute from './components/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/todos" replace />,
  },
  {
    path: '/todos',
    // loader: routeGuard,
    element: (
      <PrivateRoute>
        <TodosPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
]);

export default router;
