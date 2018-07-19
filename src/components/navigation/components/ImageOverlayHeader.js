import React from 'react';
import { LinearGradient } from 'expo';
import { StyleSheet, View } from 'react-native';
import LayoutConstants from '../../../styles/constants/LayoutConstants';

/**
 * Gradient header to overlay on top of cool pictures.
 * The parent gradient wrapper is taller than the child container,
 * so the child container can alignItems to center, and the gradient
 * can go further down the view.
 */
const ImageOverlayHeader = ({ gradientYah, children }) => {
  if (gradientYah) {
    return (
      <LinearGradient
        start={[0.0, 0.0]}
        end={[0.0, 1.0]}
        colors={['rgba(0, 0, 0, 0.8)', 'rgba(0, 0, 0, 0)']}
        style={styles.gradientWrapper}
      >
        <View style={styles.gradientChild}>
          { children }
        </View>
      </LinearGradient>
    );
  }

  return (
    <View style={styles.plainWrapper}>
      { children }
    </View>
  );
};

const styles = StyleSheet.create({
  gradientWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    height: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
  },
  gradientChild: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    padding: LayoutConstants.margins.m,
    paddingTop: LayoutConstants.margins.xs,
    paddingBottom: LayoutConstants.margins.xs,
  },
  plainWrapper: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 70,
    alignItems: 'center',
    padding: LayoutConstants.margins.m,
    paddingTop: LayoutConstants.margins.xs,
    paddingBottom: LayoutConstants.margins.xs,
    backgroundColor: 'transparent',
  },
});

export default ImageOverlayHeader;
