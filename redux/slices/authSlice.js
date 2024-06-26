import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userData: null,
  currentStack: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setCurrentStack: (state, action) => {
      state.currentStack = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    logout: state => {
      state.token = null;
      state.userData = null;
      state.currentStack = 'AuthStack';
    },
  },
});

export const {
  logout,
  setToken,
  setUserData,
  setCurrentStack
} = authSlice.actions;

export const selectUser = (state) => state.auth.userData;
export default authSlice.reducer;