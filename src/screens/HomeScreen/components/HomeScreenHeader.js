import React, { Component } from 'react';
import { Animated, Easing, StyleSheet, TouchableOpacity, View } from 'react-native';
import GenericIcon, { Names as GenericIcons } from '../../../components/common/icons/GenericIcon';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import ColorConstants from '../../../styles/constants/ColorConstants';

export default class HomeScreenHeader extends Component {

  state = {
    isSearchMode: false,
    animatedSearchEnabled: new Animated.Value(0),
    animatedSearchTextOpacity: new Animated.Value(0),
    searchText: 'Search for a restaurant',
  };

  getSearchBoxWidth = () => {
    return this.state.animatedSearchEnabled.interpolate({
      inputRange: [0, 1],
      outputRange: [40, LayoutConstants.window.width - 2 * LayoutConstants.margins.l]
    });
  };

  getLogoOpacity = () => this.state.animatedSearchEnabled.interpolate({
    inputRange: [0, 1],
    outputRange: [1, 0]
  });

  getSearchTextOpacity = () => this.state.animatedSearchTextOpacity.interpolate({
    inputRange: [0, 0.5, 0.9, 1],
    outputRange: [0, 0, 0.5, 1]
  });

  toggle = () => {
    const newVal = this.state.isSearchMode ? 0 : 1;

    Animated.timing(
      this.state.animatedSearchEnabled, {
        ease: Easing.ease(0),
        toValue: newVal,
      }
    ).start();

    Animated.timing(
      this.state.animatedSearchTextOpacity, {
        ease: Easing.ease(0),
        toValue: newVal,
      }
    ).start();

    this.setState({ isSearchMode: !this.state.isSearchMode });
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
    opacity: this.getSearchTextOpacity()
  };

  render() {
    return (
      <View style={styles.container}>

        <Animated.Text style={[styles.logo, this.customLogoStyle]}>Burntoast</Animated.Text>

        <Animated.View style={[styles.searchWrap, this.customSearchBoxStyle]} >
          <TouchableOpacity onPress={this.toggle}>
            <GenericIcon name={GenericIcons.Search} width={30} />
          </TouchableOpacity>
          <Animated.Text style={this.customSearchTextStyle}>Search for a restaurant</Animated.Text>
        </Animated.View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: ColorConstants.tintColor,
    height: 110,
  },
  logo: {
    position: 'absolute',
    left: LayoutConstants.margins.xl,
    bottom: 0,
    fontFamily: 'grand-hotel',
    fontSize: 55,
    color: '#fff',
  },
  searchWrap: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: LayoutConstants.margins.m,
    marginBottom: LayoutConstants.margins.s,
    borderRadius: 2,
  },
});
