import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //   user: { name: null, email: null },
  user: {
    id: null,
    name: null,
    email: null,
  },
  token: null,
  isRefreshing: false,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(s, a) {
      s.user.id = a.payload.id;
      s.user.name = a.payload.name;
      s.user.email = a.payload.email;
      s.token = a.payload.token;
    },
    removeUser(s) {
      s.user.id = null;
      s.user.name = null;
      s.user.email = null;
      s.token = null;
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export const authReducer = authSlice.reducer;
