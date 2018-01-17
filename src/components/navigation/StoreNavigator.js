/* eslint-disable default-case */
import { StackNavigator } from 'react-navigation'
import StoreScreen from '../../screens/StoreScreen/StoreScreen'
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen'

export default StackNavigator(
  {
    Store: {
      screen: StoreScreen,
    },
    Profile: {
      screen: ProfileScreen,
    }
  }, {
    headerMode: 'none'
  }
)
