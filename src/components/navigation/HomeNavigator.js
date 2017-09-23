/* eslint-disable default-case */
import { StackNavigator } from 'react-navigation'

import HomeScreen from '../../screens/HomeScreen'
import StoreScreen from '../../screens/StoreScreen'

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Store: {
      screen: StoreScreen,
    },
  }, {
    headerMode: 'none'
  }
)
