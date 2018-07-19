import React, { Component } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet } from 'react-native';
import { ExpoLinksView } from '@expo/samples';
import ColorConstants from '../styles/constants/ColorConstants';
import LayoutConstants from '../styles/constants/LayoutConstants';

export default class MyRewardsScreen extends Component {
  static navigationOptions = {
    title: 'My Rewards',
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
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#fff',
  },
});
