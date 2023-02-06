import React from 'react';
import { createBrowserRouter, Navigate, redirect } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import TodosPage from './components/pages/TodosPage';
import PrivateRoute from './components/PrivateRoute';
import store from './store';

function routeGuard() {
  const s = store.getState();
  console.log('🚀 ~ file: router.jsx:11 ~ routeGuard ~ s', s, s.users);
  return s?.users?.name?.length || redirect('/login');
}

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
