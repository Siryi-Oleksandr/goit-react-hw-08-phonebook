import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: { name: '😎', email: null },
  token: 'qwerrty',
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
    addTask(state, action) {},
    deleteTask(state, action) {},
    toggleCompleted(state, action) {},
  },
});

// Редюсер слайсу
export const authReducer = authSlice.reducer;
