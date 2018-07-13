/* eslint-disable default-case */
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import HomeStack from './HomeStack';

import LinksScreen from '../../screens/LinksScreen';
import SettingsScreen from '../../screens/SettingsScreen';
import MyRewardsScreen from '../../screens/MyRewardsScreen';

import GenericIcon, { Names as GenericIcons } from '../common/Icons/GenericIcon';

import Colors from '../../styles/constants/ColorConstants';
import MyProfileScreen from '../../screens/MyProfileScreen/MyProfileScreen';

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 40,
    borderTopColor: 'transparent'
  },
});

const LinksStack = createStackNavigator({
  Links: LinksScreen,
});

LinksStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <GenericIcon
      name={GenericIcons.Coin}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <GenericIcon
      name={GenericIcons.NewPost}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

const MyRewardsStack = createStackNavigator({
  Settings: MyRewardsScreen,
});

MyRewardsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <GenericIcon
      name={GenericIcons.Star}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

const MyProfileStack = createStackNavigator({
  Settings: MyProfileScreen,
});

MyProfileStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <GenericIcon
      name={GenericIcons.Person}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  LinksStack,
  SettingsStack,
  MyRewardsStack,
  MyProfileStack
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    showLabel: false,
    style: styles.tabBar
  },
  animationEnabled: true,
  swipeEnabled: true,
});
