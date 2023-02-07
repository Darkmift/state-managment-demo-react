import React, { createContext, useState, useEffect } from 'react';
import loginMockService from './login.mock-service';
import localStorageService from '../utils/localStorage';

export const UserContext = createContext({
  name: '',
  email: '',
  logUser: () => {},
});

const LOCAL_STORAGE_KEY = 'user';

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const userData = localStorageService.getData(LOCAL_STORAGE_KEY);
    if (userData?.name?.length) {
      setUser(userData);
    }
  }, []);

  useEffect(() => {
    localStorageService.setData(LOCAL_STORAGE_KEY, user);
  }, [user]);

  const logUser = async (user) => {
    try {
      const loggedUser = await loginMockService(user);
      setUser(loggedUser);
    } catch (error) {
      console.error('error logging->', error);
    }
  };

  return <UserContext.Provider value={{ user, logUser }}>{children}</UserContext.Provider>;
};
