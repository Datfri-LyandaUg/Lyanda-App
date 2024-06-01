import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  token: null,
  userData: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    logout: state => {
      state.token = null;
      state.userData = null;
    },
  },
});

export const {
  logout,
  setToken,
  setUserData
} = authSlice.actions;

export const selectUser = (state) => state.auth.userData;
export default authSlice.reducer;