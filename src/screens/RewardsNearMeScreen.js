import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';

export default class RewardsNearMeScreen extends Component {
  static navigationOptions = { title: 'Rewards Near Me' };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <ExpoConfigView />;
  }
}
