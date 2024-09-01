import {
  ADD_FAVORITE,
  REMOVE_FAVORITE,
  TOGGLE_FAVORITES,
} from '../actions/favoritesActions.js';

const initialState = {
  favorites: [],
  displayFavorites: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      return { ...state, displayFavorites: !state.displayFavorites };
    case 'ADD_FAVORITE':
      return { ...state, movies: [...state.favorites, action.payload] };
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        favorites: state.favorites.filter(
          (item) => item.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};
export default reducer;
