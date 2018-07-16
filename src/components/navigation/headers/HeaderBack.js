/* eslint-disable no-param-reassign */
import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import LayoutConstants from '../../../styles/constants/LayoutConstants';
import BackTouchable from '../touchables/BackTouchable';

const HeaderBack = (props) => <BackTouchable {...props} wrapStyle={styles.wrap} />;

const styles = StyleSheet.create({
  wrap: {
    paddingLeft: LayoutConstants.margins.m
  },
});

HeaderBack.propTypes = {
  navigation: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default HeaderBack;
