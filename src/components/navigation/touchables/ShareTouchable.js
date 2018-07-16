import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import LayoutConstants from '../../../styles/constants/LayoutConstants';

const ShareTouchable = ({ size, share, color }) => (
  <TouchableOpacity
    onPress={() => share()}
    underlayColor={'transparent'}
    style={styles.wrap}
  >
    <Ionicons
      name='md-share'
      size={size}
      color={color}
      style={styles.overlayIcon}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: LayoutConstants.margins.s,
    right: LayoutConstants.margins.s,
    paddingLeft: 50,
    justifyContent: 'flex-end',
  },
  overlayIcon: {
    width: 30,
    textShadowColor: 'rgba(0, 0, 0, 0.7)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
});

ShareTouchable.propTypes = {
  share: PropTypes.func.isRequired
};

ShareTouchable.defaultProps = {
  size: 32,
  color: '#fff'
};

export default ShareTouchable;
