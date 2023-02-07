import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../context/user.context';

const PrivateRoute = ({ children }) => {
  const { name } = useContext(UserContext);

  let location = useLocation();

  if (name === '') {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRoute;
