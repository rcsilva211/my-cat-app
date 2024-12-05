import { createSlice } from '@reduxjs/toolkit';

const catsSlice = createSlice({
  name: 'cats',
  initialState: {
    data: [],
    page: 0,
    isLoading: false,
    error: null,
  },
  reducers: {
    setLoading(state, action) {
      state.isLoading = action.payload;
    },
    setCats(state, action) {
      state.data = action.payload;
    },
    setPage(state, action) {
      state.page = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setCats, setPage, setError } = catsSlice.actions;
export default catsSlice.reducer;
