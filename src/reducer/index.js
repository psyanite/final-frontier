import { combineReducers } from 'redux';
import meReducer from '../modules/me/reducer';
import storeReducer from '../modules/store/reducer';
import postReducer from '../modules/post/reducer';

export default combineReducers({
  me: meReducer,
  stores: storeReducer,
  posts: postReducer,
});
