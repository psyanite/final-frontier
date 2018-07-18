import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';

import HomeStack, { routeNames as HomeStackRouteNames } from './stacks/HomeStack';
import RewardsNearMeStack, { routeNames as RewardsNearMeStackRouteNames } from './stacks/RewardsNearMeStack';
import NewPostStack, { routeNames as NewPostStackRouteNames } from './stacks/NewPostStack';
import MyRewardsStack, { routeNames as MyRewardsStackRouteNames } from './stacks/MyRewardsStack';
import MyProfileStack, { routeNames as MyProfileStackRouteNames } from './stacks/MyProfileStack';

export const routeNames = Object.assign({},
  HomeStackRouteNames,
  RewardsNearMeStackRouteNames,
  NewPostStackRouteNames,
  MyRewardsStackRouteNames,
  MyProfileStackRouteNames,
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#fff',
    height: 40,
    borderTopColor: 'transparent'
  },
});

const MainNavigator = createBottomTabNavigator({
  HomeStack,
  RewardsNearMeStack,
  NewPostStack,
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

export default createSwitchNavigator({
  Main: MainNavigator
});
