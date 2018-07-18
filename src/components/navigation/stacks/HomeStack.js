import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import StoreNavigator from './StoreStack';

import * as Helper from '../helpers/index';
import GenericIcon, { Names as GenericIcons } from '../../common/icons/GenericIcon';
import Colors from '../../../styles/constants/ColorConstants';

export const routeNames = {
  Home: 'Home',
  Store: 'Store'
};

const children = [
  Helper.createChild(routeNames.Home, HomeScreen),
  Helper.createChild(routeNames.Store, StoreNavigator)
];

const HomeStack = createStackNavigator(
  Helper.createStack(children),
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
