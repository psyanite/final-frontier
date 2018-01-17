/* eslint-disable default-case */
import { StackNavigator } from 'react-navigation'

import HomeScreen from '../../screens/HomeScreen/HomeScreen'
import StoreNavigator from './StoreNavigator'

export default StackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Store: {
      screen: StoreNavigator,
    },
  }, {
    headerMode: 'none'
  }
)
