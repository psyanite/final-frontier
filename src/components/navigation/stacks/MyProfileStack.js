/* eslint-disable default-case */
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import GenericIcon, { Names as GenericIcons } from '../../common/icons/GenericIcon';

import Colors from '../../../styles/constants/ColorConstants';
import MyProfileScreen from '../../../screens/MyProfileScreen/MyProfileScreen';
import MySettingsScreen from '../../../screens/MySettingsScreen/MySettingsScreen';
import LoginScreen from '../../../screens/LoginScreen/LoginScreen';
import * as Helper from '../helpers';

export const routeNames = {
  MyProfile: 'MyProfile',
  MySettings: 'MySettings',
  Login: 'Login'
};

const children = [
  Helper.createChild(routeNames.MyProfile, MyProfileScreen),
  Helper.createChild(routeNames.MySettings, MySettingsScreen),
  Helper.createChild(routeNames.Login, LoginScreen)
];

const MyProfileStack = createStackNavigator(
  Helper.createStack(children),
  {
    headerMode: 'screen'
  }
);

MyProfileStack.navigationOptions = {
  tabBarIcon: ({ focused }) => (
    <GenericIcon
      name={GenericIcons.Person}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

export default MyProfileStack;
