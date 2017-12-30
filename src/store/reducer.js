import { combineReducers } from 'redux'
import navigationReducer from '../modules/navigation/reducer'
import storeReducer from '../modules/store/reducer'
import postReducer from '../modules/post/reducer'

export default combineReducers({
  navigation: navigationReducer,
  stores: storeReducer,
  posts: postReducer,
})
