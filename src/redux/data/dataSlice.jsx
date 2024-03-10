import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: null,
  status: 'idle',
  error: null,
};

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {
    setData(s, a) {
      s.items = a.payload;
    },
  },
});

export const { setData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
