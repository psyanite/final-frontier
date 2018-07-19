import React from 'react';
import { Header } from 'react-navigation';

import BurntGradient from '../../gradients/BurntGradient';

/**
 * Header with the signature Burnt color scheme as a gradient.
 */
const BurntHeader = (props) => {
  const newProps = Object.assign({}, props, { style: { backgroundColor: 'transparent' } });
  return (
    <BurntGradient>
      <Header {...newProps} />
    </BurntGradient>
  );
};

export default BurntHeader;
