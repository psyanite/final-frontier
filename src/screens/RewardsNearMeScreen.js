import React, { Component } from 'react';
import { ExpoConfigView } from '@expo/samples';
import { Platform, StatusBar, View } from 'react-native';
import ColorConstants from '../styles/constants/ColorConstants';
import LayoutConstants from '../styles/constants/LayoutConstants';

export default class RewardsNearMeScreen extends Component {
  static navigationOptions = {
    title: 'Rewards Near Me',
    headerStyle: { paddingLeft: LayoutConstants.margins.s, paddingRight: LayoutConstants.margins.s }
  };

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      if (Platform.OS === 'android') StatusBar.setBackgroundColor(ColorConstants.statusBar.grey);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return (
      <View>
        <ExpoConfigView />
      </View>
    );
  }
}
