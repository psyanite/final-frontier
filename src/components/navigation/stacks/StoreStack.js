/* eslint-disable default-case */
import { createStackNavigator } from 'react-navigation';
import StoreScreen from '../../../screens/StoreScreen/StoreScreen';
import ProfileScreen from '../../../screens/ProfileScreen/ProfileScreen';

export const routeNames = {
  Store: 'Store',
  Profile: 'Profile',
};


const StoreStack = createStackNavigator(
  {
    Store: {
      screen: StoreScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    headerMode: 'screen'
  }
);

StoreStack.navigationOptions = { header: null };

export default StoreStack;
