/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import * as Animatable from 'react-native-animatable';
import { Platform, ScrollView, StatusBar, StyleSheet, Text } from 'react-native';
import StoreListContainer from './components/StoreList/StoreListContainer';

import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import HomeScreenHeader from './components/HomeScreenHeader';

export default class HomeScreen extends Component {

  static navigationOptions = { header: null };

  state = {
    displayOverlay: true,
    overlayContent: null,

    isSearchMode: false,
  };

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      if (Platform.OS === 'android') StatusBar.setBackgroundColor(ColorConstants.tintColor);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  handleSearchOverlayView = ref => this.searchOverlayView = ref;

  handleSearchPress = () => {
    this.setState({ isSearchMode: true });
    this.searchOverlayView.fadeInUpBig();
    this.searchOverlayView.transition({ opacity: 1 });
  };


  render() {
    return (
      <ScrollView style={styles.container}>
        <HomeScreenHeader />

        {/*<TouchableWithoutFeedback onPress={this.handleSearchPress}>*/}
          {/*<Text>Click me</Text>*/}
        {/*</TouchableWithoutFeedback>*/}

        {/*<Animatable.View style={[styles.searchOverlay, this.state.isSearchMode ? { zIndex: 100 } : {}]} ref={this.handleSearchOverlayView}>*/}
          {/*<Text>The Thing</Text>*/}
        {/*</Animatable.View>*/}


        <StatusBar backgroundColor={ColorConstants.tintColor} />
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
    backgroundColor: '#fff',
  },
  contentContainer: {
    paddingTop: 30,
  },
  searchOverlay: {
    position: 'absolute',
    top: 100,
    left: 0,
    right: 0,
    flex: 1,
    flexDirection: 'row',
    opacity: 0,
    zIndex: 0,
    backgroundColor: '#f0f',
    height: 200,
  }
});
