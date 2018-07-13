/* eslint-disable default-case */
import { createStackNavigator } from 'react-navigation';
import StoreScreen from '../../screens/StoreScreen/StoreScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';

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
    headerMode: 'none'
  }
);

StoreStack.navigationOptions = { header: null };

export default StoreStack;
