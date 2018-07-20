import React, { Component } from 'react';
import { Animated, Button, Easing, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import StoreListContainer from './components/StoreList/StoreListContainer';

import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import HomeScreenHeader from './components/HomeScreenHeader';

export default class HomeScreen extends Component {

  static navigationOptions = { header: null };

  state = {
    displayOverlay: true,
    overlayContent: null,
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <HomeScreenHeader />
        <StatusBar backgroundColor={ColorConstants.statusBar.lightTint} />
        <StoreListContainer navigate={this.props.navigation.navigate} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  headerTitle: {
    fontFamily: 'grand-hotel',
    fontSize: 40,
    color: '#fff',
    marginLeft: LayoutConstants.margins.l,
    marginTop: 5,
  },
  headerRight: {
    marginRight: LayoutConstants.margins.l,
  },
  container: {
    flex: 1,
    backgroundColor: ColorConstants.bodyBackgroundColor,
  },
  contentContainer: {
    paddingTop: 30,
  },
});
