import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import BurntView from '../components/common/BurntView';
import ColorConstants from '../styles/constants/ColorConstants';
import GenericIcon, { Names as GenericIcons } from '../components/common/icons/GenericIcon';
import LayoutConstants from '../styles/constants/LayoutConstants';
import WideButton, { Types as WideButtonTypes } from '../components/common/buttons/WideButton';

export default class NewReviewScreen extends Component {

  static navigationOptions = { header: null };

  render() {
    return (
      <BurntView centerCenterYah>

        <Text>How was your overall experience today?</Text>

        <View>
          <GenericIcon name={GenericIcons.BubbleHeart} fill={'red'} width={30} height={30} />
          <Text>Bad</Text>
        </View>
        <View>
          <GenericIcon name={GenericIcons.BubbleHeart} fill={ColorConstants.tintColor} width={30} height={30} />
          <Text>OK</Text>
        </View>
        <View>
          <GenericIcon name={GenericIcons.BubbleHeart} fill={'green'} width={30} height={30} />
          <Text>Good</Text>
        </View>

        <WideButton type={WideButtonTypes.Tinted}>

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
