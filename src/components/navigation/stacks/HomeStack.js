import React from 'react';
import { createStackNavigator } from 'react-navigation';

import HomeScreen from '../../../screens/HomeScreen/HomeScreen';
import StoreNavigator from './StoreStack';

import * as Helper from '../helpers/index';
import { Names as GenericIcons } from '../../common/icons/GenericIcon';
import TabBarIcon from '../components/TabBarIcon';

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
    <TabBarIcon name={GenericIcons.BreadHeart} focused={focused} />
  ),
};

export default HomeStack;
