import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import WideButton, { Types as WideButtonTypes } from '../components/common/buttons/WideButton';
import BurntView from '../components/common/BurntView';
import ColorConstants from '../styles/constants/ColorConstants';
import GenericIcon, { Names as GenericIcons } from '../components/common/icons/GenericIcon';
import LayoutConstants from '../styles/constants/LayoutConstants';
import { routeNames } from '../components/navigation/AppNavigator';

export default class NewPostScreen extends Component {

  static navigationOptions = { header: null };

  componentDidMount() {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      if (Platform.OS === 'android') StatusBar.setBackgroundColor(ColorConstants.statusBar.lightTint);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  navigateToNewReview = () => this.props.navigation.navigate(routeNames.NewReview);

  render() {
    return (
      <BurntView centerCenterYah>

        <WideButton style={styles.wrap} type={WideButtonTypes.Light}>
          <Text style={styles.title}>Post a photo</Text>
          <GenericIcon name={GenericIcons.Camera} fill={ColorConstants.tintColor} width={30} height={30} />
        </WideButton>

        <WideButton onPress={this.navigateToNewReview} style={styles.wrap} type={WideButtonTypes.Light}>
          <Text style={styles.title}>Write a review</Text>
          <GenericIcon name={GenericIcons.BubbleHeart} fill={ColorConstants.tintColor} width={30} height={30} />
        </WideButton>

      </BurntView>
    );
  }
}


const styles = StyleSheet.create({
  wrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: LayoutConstants.margins.m,
  },
  title: {
    color: ColorConstants.tintColor,
  },
});
