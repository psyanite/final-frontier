import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Names as GenericIcons } from '../../common/icons/GenericIcon';
import MyRewardsScreen from '../../../screens/MyRewardsScreen';
import * as Helper from '../helpers';
import TabBarIcon from '../components/TabBarIcon';

export const routeNames = {
  MyRewards: 'MyRewards',
};

const children = [
  Helper.createChild(routeNames.MyRewards, MyRewardsScreen),
];

const MyRewardsStack = createStackNavigator(
  Helper.createStack(children),
  {
    headerMode: 'screen'
  }
);

MyRewardsStack.navigationOptions = {
  tabBarLabel: 'MyRewardsStack',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name={GenericIcons.Star} focused={focused} />
  ),
};

export default MyRewardsStack;
