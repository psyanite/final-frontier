import React, { Component } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import GenericIcon, { Names as GenericIcons } from '../../components/common/icons/GenericIcon';
import StoreListContainer from './components/StoreList/StoreListContainer';

import ColorConstants from '../../styles/constants/ColorConstants';
import LayoutConstants from '../../styles/constants/LayoutConstants';

export default class HomeScreen extends Component {

  static navigationOptions = () => {
    const title = <Text style={styles.headerTitle}>Burntoast</Text>;
    const headerRight = (
      <View style={styles.headerRight}>
        <GenericIcon name={GenericIcons.Search} width={25} height={25} />
      </View>
    );
    return ({
      headerTitle: title,
      headerRight,
      headerStyle: { backgroundColor: '#ffab40' },
    });
  };

  state = {
    displayOverlay: true,
    overlayContent: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor={ColorConstants.statusBar.lightTint} />
        <StoreListContainer navigate={this.props.navigation.navigate} />
      </View>
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
