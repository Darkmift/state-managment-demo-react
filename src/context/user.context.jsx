import React, { createContext, useState, useEffect } from 'react';
import loginMockService from './login.mock-service';
import localStorageService from '../utils/localStorageService';
import router from '../router';

export const UserContext = createContext({
  name: '',
  email: '',
  logUser: ({ email, password }) => {},
  logOut: () => {},
});

const LOCAL_STORAGE_KEY = 'user';
const initialState = { name: '', email: '' };
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    const userData = localStorageService.getData(LOCAL_STORAGE_KEY);
    if (userData?.name?.length) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    localStorageService.setData(LOCAL_STORAGE_KEY, user?.name?.length ? user : null);
  }, [user]);

  const logUser = async (user) => {
    try {
      const loggedUser = await loginMockService(user);
      setUser(loggedUser);
    } catch (error) {
      console.error('error logging->', error);
    }
  };

  const logOut = async () => {
    
    setUser(initialState);
  };

  return (
    <UserContext.Provider value={{ name: user.name, email: user.email, logUser, logOut }}>
      {children}
    </UserContext.Provider>
  );
};
