import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  token: null,
  decodedToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload;
    },
     
    logout: state => {
      state.token = null;
      state.decodedToken = null;
    },
  },
});

export const {
  logout,
  setToken,
} = authSlice.actions;

export default authSlice.reducer;