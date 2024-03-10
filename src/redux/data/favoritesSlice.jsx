import { createSlice } from '@reduxjs/toolkit';

const favoritesInitialState = {
  items: [],
};

const slice = createSlice({
  name: 'favorites',
  initialState: favoritesInitialState,
  reducers: {
    addFavorite(s, a) {
      s.items.push(a.payload.item);
    },
    removeFavorite(s, a) {
      s.items = s.items.filter(item => item.name !== a.payload.item.name);
    },
  },
});

export const { addFavorite, removeFavorite } = slice.actions;
export const favoritesReducer = slice.reducer;
