export const selectStore = s => s.users;
export const selectAdverts = s => s.users.items;
export const selectIsLoading = s => s.users.isLoading;
export const selectError = s => s.users.error;
export const selectPage = s => s.users.page;
export const selectPageLimit = s => s.users.pageLimit;
export const selectFavorites = s => s.favorites.items;
