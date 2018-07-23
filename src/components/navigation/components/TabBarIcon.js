/* eslint-disable no-param-reassign */
import React from 'react';
import ColorConstants from '../../../styles/constants/ColorConstants';
import GenericIcon from '../../common/icons/GenericIcon';

const TabBarIcon = (props) => (
  <GenericIcon
    {...props}
    fill={props.focused ? ColorConstants.tabIconSelected : ColorConstants.tabIconDefault}
  />
);

TabBarIcon.defaultProps = {
  width: 30,
  height: 30,
};

export default TabBarIcon;
