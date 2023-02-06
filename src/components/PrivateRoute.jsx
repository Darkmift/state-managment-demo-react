import React, { Children } from 'react';
import { Route, Navigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ children }) => {
  const user = useSelector((state) => state?.users);
  console.log('🚀 ~ file: PrivateRoute.jsx:7 ~ PrivateRoute ~ name', user);
  let location = useLocation();

  if (!user?.name) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
