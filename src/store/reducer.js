import { combineReducers } from 'redux'
import stores from '../modules/stores/reducer'
import navigation from '../modules/navigation/reducer'

export default combineReducers({
  stores,
  navigation,
})
