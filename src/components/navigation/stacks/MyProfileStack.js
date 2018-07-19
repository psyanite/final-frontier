/* eslint-disable default-case */
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Names as GenericIcons } from '../../common/icons/GenericIcon';
import MyProfileScreen from '../../../screens/MyProfileScreen/MyProfileScreen';
import MySettingsScreen from '../../../screens/MySettingsScreen/MySettingsScreen';
import LoginScreen from '../../../screens/LoginScreen/LoginScreen';
import * as Helper from '../helpers';
import TabBarIcon from '../components/TabBarIcon';

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
    <TabBarIcon name={GenericIcons.Person} focused={focused} />
  ),
};

export default MyProfileStack;
