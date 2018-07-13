import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo';
import LayoutConstants from '../../../styles/constants/LayoutConstants';

/**
 * Tinted image header with an angled bottom for aesthetics.
 */
const AngledImageHeader = ({ uri }) => (
  <View style={styles.wrap}>
    <Image
      style={StyleSheet.absoluteFill}
      source={{ uri }}
    />
    <BlurView tint='dark' intensity={10} style={StyleSheet.absoluteFill} />
    <View style={styles.triangle} />
  </View>
);

const styles = StyleSheet.create({
  wrap: {
    height: 55,
  },
  triangle: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    marginTop: -35,
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: LayoutConstants.window.width,
    borderTopWidth: 50,
    borderRightColor: 'transparent',
    borderTopColor: '#fff',
    transform: [
      { rotate: '180deg' }
    ]
  },
});

export default AngledImageHeader;
