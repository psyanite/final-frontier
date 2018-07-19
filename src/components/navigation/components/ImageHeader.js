import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { BlurView } from 'expo';
import PropTypes from 'prop-types';

const ImageHeader = ({ uri, height, isTinted }) => (
  <View style={{ height }}>
    <Image
      source={{ uri }}
      style={StyleSheet.absoluteFill}
    />
    { isTinted && <BlurView tint='dark' intensity={10} style={StyleSheet.absoluteFill} /> }
  </View>
);

ImageHeader.defaultProps = {
  height: 100,
  isTinted: false,
};

ImageHeader.propTypes = {
  uri: PropTypes.string.isRequired,
  height: PropTypes.number,
  isTinted: PropTypes.bool,
};

export default ImageHeader;
