import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/user.context';

const PrivateRoute = ({ children }) => {
  const { user } = useContext(UserContext);

  console.log('🚀 ~ file: PrivateRoute.jsx:7 ~ PrivateRoute ~ name', user);
  let location = useLocation();

  if (!user?.name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
