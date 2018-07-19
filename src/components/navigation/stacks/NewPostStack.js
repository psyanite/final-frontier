import React from 'react';
import { createStackNavigator } from 'react-navigation';

import { Names as GenericIcons } from '../../common/icons/GenericIcon';
import NewPostScreen from '../../../screens/NewPostScreen';
import NewReviewScreen from '../../../screens/NewReviewScreen';
import * as Helper from '../helpers';
import TabBarIcon from '../components/TabBarIcon';

export const routeNames = {
  NewPost: 'NewPost',
  NewReview: 'NewReview',
};

const children = [
  Helper.createChild(routeNames.NewPost, NewPostScreen),
  Helper.createChild(routeNames.NewReview, NewReviewScreen),
];

const NewPostStack = createStackNavigator(
  Helper.createStack(children),
  {
    headerMode: 'screen'
  }
);

NewPostStack.navigationOptions = {
  tabBarLabel: 'Links',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon name={GenericIcons.NewPost} focused={focused} />
  ),
};

export default NewPostStack;
