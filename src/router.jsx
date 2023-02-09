import React from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
// import TodosPage from './components/pages/TodosPage';
import PrivateRoute from './components/PrivateRoute';
import EditTodoPage from './components/pages/EditTodoPage';
import AddTodoPage from './components/pages/AddTodoPage';

const TodosPage = React.lazy(() => import('./components/pages/TodosPage'));

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
        <React.Suspense fallback={<>Oops...</>}>
          <TodosPage />
        </React.Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
  {
    path: '/edit-todo',
    element: (
      <PrivateRoute>
        <EditTodoPage />
      </PrivateRoute>
    ),
  },
  {
    path: '/add-todo',
    element: (
      <PrivateRoute>
        <AddTodoPage />
      </PrivateRoute>
    ),
  },
]);

export default router;
