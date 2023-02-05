import { createSlice } from '@reduxjs/toolkit';
import localStorageService from '../../utils/localStorage';

function setUser(s, { name, email }) {
  s.name = name;
  s.email = email;
}

export const userSlice = createSlice({
  name: 'user',
  initialState: { email: '', name: '' },
  reducers: {
    setFromLocalStorage: () => {
      const storedUser = localStorageService.getData('user');
      const { name, email } = storedUser;
      if (name?.length && email.length) {
        setUser(state, { name, email });
      }
    },
    logUser: (state, action) => {
      const { name, email } = action.payload;
      setUser(state, { name, email });
    },
    removeUser: (state) => {
      setUser(state, { name: null, email: null });
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFromLocalStorage, logUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
