import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import GenericIcon, { Names as GenericIcons } from '../../../components/common/icons/GenericIcon';
import LayoutConstants from '../../../styles/constants/LayoutConstants';

export default class HomeScreenHeader extends Component {

  state = {
    searchEnabled: false,
    isSearchEnabled: new Animated.Value(0),
    meow: new Animated.Value(0),
    searchText: 'Search for a restaurant',
  };

  getSearchBoxWidth = () => this.state.isSearchEnabled.interpolate({
    inputRange: [0, 1],
    outputRange: [40, LayoutConstants.window.width - 20]
  });

  getLogoOpacity = () => this.state.isSearchEnabled.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });

  getMeowOpacity = () => this.state.meow.interpolate({
    inputRange: [0, 0.5, 0.9, 1],
    outputRange: [0, 0, 0.5, 1]
  });

  toggle = () => {
    // expand it
    let newSearchEnabled = 1;

    if (this.state.searchEnabled) {
      // shrink it
      newSearchEnabled = 0;
    }

    Animated.timing(
      this.state.isSearchEnabled, {
        ease: Easing.ease(0),
        toValue: newSearchEnabled,
      }
    ).start();

    Animated.timing(
      this.state.meow, {
        ease: Easing.ease(0),
        toValue: newSearchEnabled,
      }
    ).start();

    this.setState({ searchEnabled: !this.state.searchEnabled });
  };

  customSearchBoxStyle = {
    width: this.getSearchBoxWidth(),
  };

  customLogoStyle = {
    opacity: this.getLogoOpacity(),
  };

  customSearchTextStyle = {
    color: '#fff',
    paddingLeft: LayoutConstants.margins.s,
    opacity: this.getMeowOpacity()
  };

  render() {
    return (
      <View style={styles.container}>

        <Animated.Text style={[styles.logo, this.customLogoStyle]}>Burntoast</Animated.Text>

        <Animated.View style={[styles.searchWrap, this.customSearchBoxStyle]} >
          <TouchableOpacity onPress={this.toggle}>
            <GenericIcon name={GenericIcons.Search} width={25} />
          </TouchableOpacity>
          <Animated.Text style={this.customSearchTextStyle}>Search for a restaurant</Animated.Text>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffab40',
    height: 90,
  },
  logo: {
    position: 'absolute',
    left: 0,
    bottom: 0,
    fontFamily: 'grand-hotel',
    fontSize: 40,
    color: '#fff',
    marginLeft: LayoutConstants.margins.l,
  },
  searchWrap: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: LayoutConstants.margins.s,
    marginRight: LayoutConstants.margins.s,
    marginBottom: LayoutConstants.margins.s,
    borderRadius: 2,
  },
});
