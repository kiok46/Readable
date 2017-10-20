import { combineReducers } from 'redux';

import CategoryReducer from './CategoryReducer';
import PostsReducer from './PostsReducer';

export default combineReducers({
  CategoryReducer, PostsReducer
})
