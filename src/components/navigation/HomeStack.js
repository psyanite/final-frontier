/* eslint-disable default-case */
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import StoreNavigator from './StoreStack';

import GenericIcon, { Names as GenericIcons } from '../common/icons/GenericIcon';

import Colors from '../../styles/constants/ColorConstants';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Store: {
      screen: StoreNavigator,
    },
  },
  {
    headerMode: 'screen'
  }
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <GenericIcon
      name={GenericIcons.BreadHeart}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

export default HomeStack;
