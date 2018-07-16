/* eslint-disable default-case */
import React from 'react';
import { createStackNavigator } from 'react-navigation';

import GenericIcon, { Names as GenericIcons } from '../common/icons/GenericIcon';

import Colors from '../../styles/constants/ColorConstants';
import MyProfileScreen from '../../screens/MyProfileScreen/MyProfileScreen';
import MySettingsScreen from '../../screens/MySettingsScreen/MySettingsScreen';
import LoginScreen from '../../screens/LoginScreen/LoginScreen';

const MyProfileStack = createStackNavigator(
  {
    MyProfile: {
      screen: MyProfileScreen,
    },
    MySettings: {
      screen: MySettingsScreen,
    },
    Login: {
      screen: LoginScreen,
    },
  },
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
