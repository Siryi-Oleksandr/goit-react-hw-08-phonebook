import { createSlice } from '@reduxjs/toolkit';
import { logOut, register } from './operation';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  // Ім'я слайсу
  name: 'auth',
  // Початковий стан редюсера слайсу
  initialState: initialState,
  // Об'єкт редюсерів
  extraReducers: {
    // [register.pending](state, action) {state = state};
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
