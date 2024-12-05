import { configureStore } from '@reduxjs/toolkit';
import catsReducer from './catsSlice';
import { catsApi } from '../ex5/catsApi'; // Import the RTK Query API

const store = configureStore({
  reducer: {
    cats: catsReducer,
    [catsApi.reducerPath]: catsApi.reducer, // Add the RTK Query reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(catsApi.middleware), // Add the RTK Query middleware
});

export default store;
