import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';
import ColorConstants from '../../../styles/constants/ColorConstants';

const HeaderShare = ({ size, share, color }) => (
  <TouchableOpacity
    onPress={share}
    activeOpacity={1.0}
  >
    <Ionicons
      name='md-share'
      size={size}
      color={color}
    />
  </TouchableOpacity>
);

HeaderShare.propTypes = {
  share: PropTypes.func.isRequired
};

HeaderShare.defaultProps = {
  size: 25,
  color: ColorConstants.bodyText
};

export default HeaderShare;
