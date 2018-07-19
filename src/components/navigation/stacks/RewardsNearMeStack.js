import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Names as GenericIcons } from '../../common/icons/GenericIcon';
import RewardsNearMeScreen from '../../../screens/RewardsNearMeScreen';
import * as Helper from '../helpers';
import TabBarIcon from '../components/TabBarIcon';

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
    <TabBarIcon name={GenericIcons.Present} focused={focused} />
  ),
};

export default RewardsNearMeStack;
