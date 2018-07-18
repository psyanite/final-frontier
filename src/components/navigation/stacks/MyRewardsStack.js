import React from 'react';
import { createStackNavigator } from 'react-navigation';

import GenericIcon, { Names as GenericIcons } from '../../common/icons/GenericIcon';

import Colors from '../../../styles/constants/ColorConstants';
import MyRewardsScreen from '../../../screens/MyRewardsScreen';
import * as Helper from '../helpers';

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
    <GenericIcon
      name={GenericIcons.Star}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

export default MyRewardsStack;
