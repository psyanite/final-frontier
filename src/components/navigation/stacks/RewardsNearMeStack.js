import React from 'react';
import { createStackNavigator } from 'react-navigation';

import GenericIcon, { Names as GenericIcons } from '../../common/icons/GenericIcon';

import Colors from '../../../styles/constants/ColorConstants';
import RewardsNearMeScreen from '../../../screens/RewardsNearMeScreen';
import * as Helper from '../helpers';

export const routeNames = {
  RewardsNearMe: 'RewardsNearMe',
};

const children = [
  Helper.createChild(routeNames.RewardsNearMeStack, RewardsNearMeScreen),
];

const RewardsNearMeStack = createStackNavigator(
  Helper.createStack(children),
  {
    headerMode: 'screen'
  }
);

RewardsNearMeStack.navigationOptions = {
  tabBarLabel: 'RewardsNearMeStack',
  tabBarIcon: ({ focused }) => (
    <GenericIcon
      name={GenericIcons.Present}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

export default RewardsNearMeStack;
