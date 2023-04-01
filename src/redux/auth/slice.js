import { createSlice } from '@reduxjs/toolkit';
import { register } from './operation';

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
  },
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
