import { StyleSheet } from 'react-native';
import { createSwitchNavigator, createMaterialTopTabNavigator } from 'react-navigation';

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
    height: 50,
    borderTopColor: 'transparent',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 0,
    elevation: 20,
  },
});

const MainNavigator = createMaterialTopTabNavigator({
  HomeStack,
  RewardsNearMeStack,
  NewPostStack,
  MyRewardsStack,
  MyProfileStack
}, {
  tabBarPosition: 'bottom',
  tabBarOptions: {
    indicatorStyle: { opacity: 0 },
    showIcon: true,
    showLabel: false,
    style: styles.tabBar
  },
  animationEnabled: true,
  swipeEnabled: true,
});

export default createSwitchNavigator({
  Main: MainNavigator
});
