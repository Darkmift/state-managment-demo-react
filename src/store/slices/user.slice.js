import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import localStorageService from '../../utils/localStorage';
import loginMockService from '../login.mock-service';

const fetchUser = createAsyncThunk('user/fetchUser', loginMockService);

function setUser(s, { name, email }) {
  s.name = name;
  s.email = email;
  localStorageService.setData('user', { name, email });
}

export const userSlice = createSlice({
  name: 'user',
  initialState: { email: '', name: '' },
  reducers: {
    isLoggedin: (state) => {
      return state.name.length;
    },
    setFromLocalStorage: (state) => {
      const storedUser = localStorageService.getData('user');
      if (!storedUser) return;
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
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      const { email, name } = action.payload;
      setUser(state, { name, email });
    });
  },
});

// Action creators are generated for each case reducer function
export const { setFromLocalStorage, logUser, removeUser,isLoggedin } = userSlice.actions;
export { fetchUser };

export default userSlice.reducer;
