import React from 'react';
import { G, Path, Rect, Svg } from 'react-native-svg';

export const Names = {
  BreadHeart: 'BreadHeart',
  BreadOkay: 'BreadOkay',
  BreadCross: 'BreadCross',
  Location: 'Location',
  Fork: 'Fork',
  Phone: 'Phone',
  Share: 'Share',
};

const Icons = {
  // Ratings
  BreadHeart: {
    svg: <G>
      <Path fill='#FFE5CA' d='M279.9,15c-30.8,0-59.1,12.9-78.1,33.5c-19-20.6-47.3-33.5-78.1-33.5 C64,15,15,63.5,15,123.3c0,33.2,14.8,62.9,37.8,82.8v123.6c0,22,18.8,40.8,40.8,40.8h47.8h21.1h39.1h0.4h39.1h21.1h47.8 c22,0,38.7-18.8,38.7-40.8V206.1c23-19.9,38.9-49.6,38.9-82.8C387.6,63.5,339.7,15,279.9,15z' />
      <Path fill='#DF924D' d='M310.1,385.5H93.6c-30.2,0-55.8-25.6-55.8-55.8v-117C13.7,189.3,0,157.1,0,123.3 C0,55.3,55.5,0,123.8,0c28.9,0,56.6,10,78.1,27.8C223.3,10,251,0,279.9,0c32.9,0,63.8,12.8,86.9,36.1 c23.1,23.2,35.8,54.2,35.8,87.1c0,33.4-14.1,65.6-38.9,89.4v117C363.8,360.5,339.7,385.5,310.1,385.5z M123.8,30 C72.1,30,30,71.8,30,123.3c0,27.5,11.9,53.6,32.6,71.4c3.3,2.8,5.2,7,5.2,11.4v123.6c0,13.8,12.1,25.8,25.8,25.8h216.5 c13,0,23.7-11.6,23.7-25.8V206.1c0-4.4,1.9-8.5,5.2-11.4c21.4-18.5,33.7-44.5,33.7-71.4c0-51.4-41.6-93.3-92.7-93.3 c-25.8,0-50.3,10.4-67,28.6c-2.8,3.1-6.8,4.8-11,4.8s-8.2-1.8-11-4.8C174.1,40.4,149.6,30,123.8,30z' />
      <Path fill='#FF9999' d='M289,187.5L289,187.5c0-29.4-23.4-52.5-52.3-52.5c-13.6,0-26.1,5.2-35.4,13.7 C192,140.2,179.6,135,166,135c-28.9,0-52.3,23.2-52.3,52.5h0c-2.1,47.2,83.9,99,87.7,99S291.1,234.7,289,187.5z' />
    </G>,
    viewBox: '0 0 402.6 385.5'
  },
  BreadOkay: {
    svg: <G>
      <Path fill='#FFE5CA' d='M279.9,15c-30.8,0-59.1,12.9-78.1,33.5c-19-20.6-47.3-33.5-78.1-33.5 C64,15,15,63.5,15,123.3c0,33.2,14.8,62.9,37.8,82.8v123.6c0,22,18.8,40.8,40.8,40.8h47.8h21.1h39.1h0.4h39.1h21.1h47.8 c22,0,38.7-18.8,38.7-40.8V206.1c23-19.9,38.9-49.6,38.9-82.8C387.6,63.5,339.7,15,279.9,15z' />
      <Path fill='#DF924D' d='M310.1,385.5H93.6c-30.2,0-55.8-25.6-55.8-55.8v-117C13.7,189.3,0,157.1,0,123.3 C0,55.3,55.5,0,123.8,0c28.9,0,56.6,10,78.1,27.8C223.3,10,251,0,279.9,0c32.9,0,63.8,12.8,86.9,36.1c23.1,23.2,35.8,54.2,35.8,87.1 c0,33.4-14.1,65.6-38.9,89.4v117C363.8,360.5,339.7,385.5,310.1,385.5z M123.8,30C72.1,30,30,71.8,30,123.3 c0,27.5,11.9,53.6,32.6,71.4c3.3,2.8,5.2,7,5.2,11.4v123.6c0,13.8,12.1,25.8,25.8,25.8h216.5c13,0,23.7-11.6,23.7-25.8V206.1 c0-4.4,1.9-8.5,5.2-11.4c21.4-18.5,33.7-44.5,33.7-71.4c0-51.4-41.6-93.3-92.7-93.3c-25.8,0-50.3,10.4-67,28.6 c-2.8,3.1-6.8,4.8-11,4.8s-8.2-1.8-11-4.8C174.1,40.4,149.6,30,123.8,30z M149.4,294.1l136.5-136.5c9.8-9.8,9.8-25.6,0-35.4 c-9.8-9.8-25.6-9.8-35.4,0L114,258.7c-9.8,9.8-9.8,25.6,0,35.4c4.9,4.9,11.3,7.3,17.7,7.3C138.1,301.4,144.5,299,149.4,294.1z M239,302.7l56.8-56.8c9.8-9.8,9.8-25.6,0-35.4c-9.8-9.8-25.6-9.8-35.4,0l-56.8,56.8c-9.8,9.8-9.8,25.6,0,35.4 c4.9,4.9,11.3,7.3,17.7,7.3S234.1,307.6,239,302.7z M141.3,205l56.8-56.8c9.8-9.8,9.8-25.6,0-35.4c-9.8-9.8-25.6-9.8-35.4,0 L106,169.7c-9.8,9.8-9.8,25.6,0,35.4c4.9,4.9,11.3,7.3,17.7,7.3C130,212.4,136.4,209.9,141.3,205z' />
    </G>,
    viewBox: '0 0 402.6 385.5'
  },
  BreadCross: {
    svg: <G>
      <Path fill='#FFE5CA' d='M279.9,15c-30.8,0-59.1,12.9-78.1,33.5c-19-20.6-47.3-33.5-78.1-33.5 C64,15,15,63.5,15,123.3c0,33.2,14.8,62.9,37.8,82.8v123.6c0,22,18.8,40.8,40.8,40.8h47.8h21.1h39.1h0.4h39.1h21.1h47.8 c22,0,38.7-18.8,38.7-40.8V206.1c23-19.9,38.9-49.6,38.9-82.8C387.6,63.5,339.7,15,279.9,15z' />
      <Path fill='#DF924D' d='M310.1,385.5H93.6c-30.2,0-55.8-25.6-55.8-55.8v-117C13.7,189.3,0,157.1,0,123.3 C0,55.3,55.5,0,123.8,0c28.9,0,56.6,10,78.1,27.8C223.3,10,251,0,279.9,0c32.9,0,63.8,12.8,86.9,36.1 c23.1,23.2,35.8,54.2,35.8,87.1c0,33.4-14.1,65.6-38.9,89.4v117C363.8,360.5,339.7,385.5,310.1,385.5z M123.8,30 C72.1,30,30,71.8,30,123.3c0,27.5,11.9,53.6,32.6,71.4c3.3,2.8,5.2,7,5.2,11.4v123.6c0,13.8,12.1,25.8,25.8,25.8h216.5 c13,0,23.7-11.6,23.7-25.8V206.1c0-4.4,1.9-8.5,5.2-11.4c21.4-18.5,33.7-44.5,33.7-71.4c0-51.4-41.6-93.3-92.7-93.3 c-25.8,0-50.3,10.4-67,28.6c-2.8,3.1-6.8,4.8-11,4.8s-8.2-1.8-11-4.8C174.1,40.4,149.6,30,123.8,30z' />
      <Path fill='#CF773F' d='M235.9,207.6l45.7-45.7c9.8-9.8,9.8-25.6,0-35.4c-9.8-9.8-25.6-9.8-35.4,0l-45.7,45.7l-45.7-45.7 c-9.8-9.8-25.6-9.8-35.4,0c-9.8,9.8-9.8,25.6,0,35.4l45.7,45.7l-45.7,45.7c-9.8,9.8-9.8,25.6,0,35.4c4.9,4.9,11.3,7.3,17.7,7.3 s12.8-2.4,17.7-7.3l45.7-45.7l45.7,45.7c4.9,4.9,11.3,7.3,17.7,7.3c6.4,0,12.8-2.4,17.7-7.3c9.8-9.8,9.8-25.6,0-35.4L235.9,207.6z' />
    </G>,
    viewBox: '0 0 402.6 385.5'
  },
  Location: {
    svg: <G>
      <Path fill='#ED7D83' d='M156.2,21.3c-55.2,0-100,44.8-100,100c0,80.1,90.4,154.2,90.4,154.2c5.3,4.3,13.9,4.3,19.2,0 c0,0,90.4-74.2,90.4-154.2C256.2,66,211.5,21.3,156.2,21.3z M156.2,171.6c-27.7,0-50.3-22.6-50.3-50.3s22.6-50.3,50.3-50.3 s50.3,22.6,50.3,50.3S184,171.6,156.2,171.6z' />
      <Path fill='#FFE0BF' d='M156.2,171.6c-27.7,0-50.3-22.6-50.3-50.3s22.6-50.3,50.3-50.3s50.3,22.6,50.3,50.3 S184,171.6,156.2,171.6z' />
    </G>,
    viewBox: '0 0 300 300'
  },
  Fork: {
    svg: <G>
      <Path fill='#FFD3A5' d='M54.1,283.4c-28.8-20-3.6-52.8,6.6-63.4c9.1-9.5,39.3-40.3,47.4-52.8c8.1-12.5,7.2-24.3-0.4-38 s0.3-32.3,7.8-47s31.1-50,37.6-58.9c6.6-8.9,13-14.4,19.4-10.9c6.4,3.6,10.1,12.8,5.3,20.6c-5.1,8.2-17.1,27.1-20.9,33.1 c-7.3,11.3-9.8,19-2.8,23.5c6.9,4.4,12.5-1.8,18.3-10.2c10.1-14.7,20.2-31.6,23-35.5c2.8-3.9,11.1-9.2,18.5-4.4l0,0l0.3,0.2 c7.4,4.8,6.4,13.9,4,18c-2.4,4.1-15,22.9-24.2,38.1c-5.3,8.6-4.6,16.2,0.8,19.9c5.9,4.1,11.6-0.4,19-11.7 c3.9-5.9,17-25.5,22.4-33.5c5.1-7.5,13.9-8.5,19.7-4.1c5.9,4.4,3.4,12.5-2.1,22.1c-5.4,9.6-27.5,45.9-37.9,58.7 c-10.4,12.8-25.3,26.2-40.8,24.8s-26.4,3.6-34.5,16.1c-8.1,12.5-25.4,52.1-30.3,64.3c-5.5,13.6-25.6,48.9-55.5,31.4' />
    </G>,
    viewBox: '0 0 300 300'
  },
  Phone: {
    svg: <G>
      <Path fill='#63B784' d='M41.3,146.6C23,92.7,54.3,36.4,91.7,31.1c22-3.1,47.5,46.8,45.8,62.8s-34.7,21.2-29.5,44.3 c3.2,14.4,43.4,57.6,58,60c23.4,3.8,22.1-26.8,39.5-24.8s61.6,23,58.5,44.3c-2.5,16.9-61.2,73.1-121,42.5 C83.1,229.4,47.3,164.4,41.3,146.6z' />
    </G>,
    viewBox: '0 0 300 300'
  },
  Share: {
    svg: <G>
      <Rect fill='#EA9F4F' x='70' y='150' rotate='-22' width='104' height='28.9' />
      <Rect fill='#EA9F4F' x='150' y='115' rotate='22' width='104' height='28.9' />
      <Path fill='#FFBA60' d='M218.3,133.6c-30.3,0-54.9-24.6-54.9-54.9s24.6-55.5,54.9-55.5s54.9,25.2,54.9,55.5S248.6,133.6,218.3,133.6z' />
      <Path fill='#FFBA60' d='M81.7,96.4c-30.2,0-54.9,24.7-54.9,54.9c0,30.2,24.7,54.9,54.9,54.9s54.9-24.7,54.9-54.9C136.6,121.1,111.9,96.4,81.7,96.4z' />
      <Path fill='#FFBA60' d='M218.3,276.8c-30.3,0-54.9-25.2-54.9-55.5s24.6-54.9,54.9-54.9s54.9,24.6,54.9,54.9S248.6,276.8,218.3,276.8z' />
      <Path fill='#FFBA60' d='M136.7,151.3c0,30.2-24.7,54.9-54.9,54.9s-54.9-24.7-54.9-54.9H136.7z' />
    </G>,
    viewBox: '0 0 300 300'
  }
};

const CustomIcon = ({ width, height, name }) => (
  <Svg
    height={height}
    width={width}
    viewBox={Icons[name].viewBox}
  >
    {Icons[name].svg}
  </Svg>
);

CustomIcon.defaultProps = {
  width: 20,
  height: 20,
};

export default CustomIcon;
