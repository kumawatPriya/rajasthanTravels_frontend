import { createSlice } from '@reduxjs/toolkit';

const storedUser = JSON.parse(localStorage.getItem("User"));

const initialState = {
  userId: storedUser?.userId || null,
  token: storedUser?.token || null,
  email: storedUser?.email || null,
  isLoggedIn: !!storedUser?.token, 
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { userId, token, email } = action.payload || {};
      state.userId = userId;
      state.token = token;
      state.email = email;
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.userId = null;
      state.token = null;
      state.email = null;
      state.isLoggedIn = false;
    },
  },
});

export const { setCredentials, logout } = authSlice.actions;
export default authSlice.reducer;
