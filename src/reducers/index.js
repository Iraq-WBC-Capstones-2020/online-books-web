import { combineReducers } from 'redux';
import userReducer from './user';
import booksReducer from './books';

const allReducers = combineReducers({
  user: userReducer,
  books: booksReducer,
});
export default allReducers;
