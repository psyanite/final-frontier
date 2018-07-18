import React from 'react';
import { createStackNavigator } from 'react-navigation';

import GenericIcon, { Names as GenericIcons } from '../../common/icons/GenericIcon';

import Colors from '../../../styles/constants/ColorConstants';
import NewPostScreen from '../../../screens/NewPostScreen';
import NewReviewScreen from '../../../screens/NewReviewScreen';
import * as Helper from '../helpers';

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
    <GenericIcon
      name={GenericIcons.NewPost}
      fill={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
      width={25}
      height={25}
    />
  ),
};

export default NewPostStack;
