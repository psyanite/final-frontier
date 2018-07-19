import React from 'react';
import { StyleSheet, View } from 'react-native';
import LayoutConstants from '../../styles/constants/LayoutConstants';

/**
 * Static view that is NOT-SCROLLABLE
 */
const CenteredLightView = ({ style, children }) =>
  (<View
    children={children}
    style={[styles.default, style]}
  />);

const styles = StyleSheet.create({
  default: {
    flex: 1,
    paddingTop: 100,
    paddingLeft: LayoutConstants.margins.m,
    paddingRight: LayoutConstants.margins.m,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
});

export default CenteredLightView;
