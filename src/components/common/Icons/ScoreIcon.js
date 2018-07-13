import React from 'react';
import CustomIcon, { Names as CustomIcons } from './CustomIcon';

/**
 * Icon for the given score, generated by mapping the
 * score value to the correct CustomIcon
 */
const ScoreIcon = (props) => {
  const newProps = Object.assign({}, props);
  switch (newProps.score) {
    case ('bad'):
      newProps.name = CustomIcons.BreadCross;
      break;
    case ('okay'):
      newProps.name = CustomIcons.BreadOkay;
      break;
    case ('good'):
      newProps.name = CustomIcons.BreadHeart;
      break;
    default:
      return null;
  }
  return <CustomIcon {...newProps} />;
};

export default ScoreIcon;
