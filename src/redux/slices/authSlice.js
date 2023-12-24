import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userInfo: localStorage.getItem('userInfo')
    ? JSON.parse(localStorage.getItem('userInfo'))
    : null,
    token: localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : null,
    isLoggedIn: false,
    isAdmin: false
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
    setIsLoggedIn : (state,action) => {
      state.isLoggedIn = action.payload;
      localStorage.setItem('IsLoggedIn',JSON.stringify(action.payload));
    },
    setIsAdmin: (state,action) => {
      state.isAdmin = action.payload;
      localStorage.setItem('IsAdmin',JSON.stringify(action.payload));
    }
  },
})

// Action creators are generated for each case reducer function
export const { setCredentials, setToken, logoutUser,setIsAdmin,setIsLoggedIn } = authSlice.actions

export default authSlice.reducer