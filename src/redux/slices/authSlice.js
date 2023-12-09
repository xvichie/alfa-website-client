import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    setToken: (state,action) => {
      state.token = action.payload;
      localStorage.setItem('token', JSON.stringify(action.payload));
    },
    logoutUser: (state, action) => {
      state.userInfo = null;
      state.token = null;
      localStorage.removeItem('token');
      localStorage.removeItem('userInfo');
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCredentials, setToken, logoutUser } = authSlice.actions

export default authSlice.reducer