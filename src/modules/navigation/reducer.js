import { NavigationActions } from 'react-navigation';
import AppNavigator from '../../components/navigation/AppNavigator';

// const initialState = AppNavigator.router.getStateForAction(AppNavigator.router.getActionForPathAndParams('Home'));
const initialState = AppNavigator.router.getStateForAction(NavigationActions.init());

export default (state = initialState, action) => {
  const nextState = AppNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};
