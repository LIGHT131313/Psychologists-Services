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
  //   extraReducers: builder => {
  //     builder
  //       .addCase(fetchData.pending, state => {
  //         state.status = 'loading';
  //       })
  //       .addCase(fetchData.fulfilled, (state, action) => {
  //         state.status = 'succeeded';
  //         state.data = action.payload;
  //       })
  //       .addCase(fetchData.rejected, (state, action) => {
  //         state.status = 'failed';
  //         state.error = action.error.message;
  //       });
  //   },
});

export const { setData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
