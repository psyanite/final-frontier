/* eslint-disable default-case */
import React from 'react'
import { StyleSheet } from 'react-native'
import { TabNavigator, TabBarBottom } from 'react-navigation'

import HomeNavigator from './HomeNavigator'

import LinksScreen from '../../screens/LinksScreen'
import SettingsScreen from '../../screens/SettingsScreen'
import MyRewardsScreen from '../../screens/MyRewardsScreen'
import ProfileScreen from '../../screens/ProfileScreen'

import Icon, { Names as Icons } from '../common/Icon'

import Colors from '../../styles/constants/Colors'

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 40,
    borderTopColor: 'transparent'
  },
})

export default TabNavigator(
  {
    Home: {
      screen: HomeNavigator,
    },
    Links: {
      screen: LinksScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
    MyRewards: {
      screen: MyRewardsScreen,
    },
    Profile: {
      screen: ProfileScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        let iconName

        switch (routeName) {
          case 'Home':
            iconName = Icons.BreadHeart
            break
          case 'Links':
            iconName = Icons.Coin
            break
          case 'Settings':
            iconName = Icons.NewPost
            break
          case 'MyRewards':
            iconName = Icons.Star
            break
          case 'Profile':
            iconName = Icons.Person
            break
        }

        return (
          <Icon
            name={iconName}
            fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
            width={25}
            height={25}
          />
        )
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    tabBarOptions: {
      showLabel: false,
      style: styles.tabBar
    },
    animationEnabled: false,
    swipeEnabled: true,
  }
)
