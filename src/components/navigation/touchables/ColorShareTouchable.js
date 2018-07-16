import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import CustomIcon, { Names as CustomIcons } from '../../common/icons/CustomIcon';

const ColorShareTouchable = ({ size, share }) => (
  <TouchableOpacity
    onPress={share}
    underlayColor={'transparent'}
    style={styles.wrap}
  >
    <CustomIcon name={CustomIcons.Share} width={size} height={size} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  wrap: {
    position: 'absolute',
    top: LayoutConstants.margins.s,
    right: LayoutConstants.margins.m,
    paddingLeft: 50
  },
});

ColorShareTouchable.propTypes = {
  share: PropTypes.func.isRequired
};

ColorShareTouchable.defaultProps = {
  size: 32
};

export default ColorShareTouchable;
