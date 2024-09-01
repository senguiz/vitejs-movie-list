import { combineReducers } from 'redux';

import movieReducer from './movieReducer';
import favoritesReducer from './favoritesReducer';

const combinedReducer = combineReducers({
  movieReducer,
  favoritesReducer,
});

export default combinedReducer;
