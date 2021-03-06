import React from 'react';
import CustomIconNew, { Names as CustomIconNews } from './CustomIconNew';

/**
 * Icon for the given score, generated by mapping the
 * score value to the correct CustomIcon
 */
const ScoreIcon = (props) => {
  const newProps = Object.assign({}, props);
  switch (newProps.score) {
    case ('bad'):
      newProps.name = CustomIconNews.BreadCross;
      break;
    case ('okay'):
      newProps.name = CustomIconNews.BreadOkay;
      break;
    case ('good'):
      newProps.name = CustomIconNews.BreadHeart;
      break;
    default:
      return null;
  }
  return <CustomIconNew {...newProps} />;
};

export default ScoreIcon;
