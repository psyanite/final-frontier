import React, { Component } from 'react';
// import * as Animatable from 'react-native-animatable';
import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import StoreListContainer from './components/StoreList/StoreListContainer';

import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';
import HomeScreenHeader from './components/HomeScreenHeader';

export default class HomeScreen extends Component {

  static navigationOptions = { header: null };

  state = {
    displayOverlay: true,
    overlayContent: null,
    // isSearchMode: false,
  };

  // handleSearchOverlayView = ref => this.searchOverlayView = ref;
  //
  // handleSearchPress = () => {
  //   this.setState({ isSearchMode: true });
  //   this.searchOverlayView.fadeInUpBig();
  //   this.searchOverlayView.transition({ opacity: 1 });
  // };


  render() {
    return (
      <ScrollView style={styles.container}>

        <StatusBar backgroundColor={ColorConstants.statusBar.lightTint} />

        <HomeScreenHeader />

        {/*<TouchableWithoutFeedback onPress={this.handleSearchPress}>*/}
          {/*<Text>Click me</Text>*/}
        {/*</TouchableWithoutFeedback>*/}

        {/*<Animatable.View style={[styles.searchOverlay, this.state.isSearchMode ? { zIndex: 100 } : {}]} ref={this.handleSearchOverlayView}>*/}
          {/*<Text>The Thing</Text>*/}
        {/*</Animatable.View>*/}

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
