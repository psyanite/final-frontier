import React, { Component } from 'react';
import { Platform, ScrollView, StatusBar, StyleSheet } from 'react-native';
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

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      if (Platform.OS === 'android') StatusBar.setBackgroundColor(ColorConstants.statusBar.darkTint);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <HomeScreenHeader />
        <StatusBar backgroundColor={ColorConstants.statusBar.darkTint} />
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
