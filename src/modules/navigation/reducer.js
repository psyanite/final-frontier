import { NavigationActions } from 'react-navigation'
import { RootStackNavigator } from '../../components/navigation/RootNavigation'

const initialState = RootStackNavigator.router.getStateForAction(NavigationActions.init())

export default (state = initialState, action) => {
  const nextState = RootStackNavigator.router.getStateForAction(action, state)
  return nextState || state
}
