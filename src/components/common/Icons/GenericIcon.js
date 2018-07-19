/* eslint-disable no-param-reassign */
import React from 'react';
import SvgIcon from 'react-native-svg-icon';
import { Path } from 'react-native-svg';

/**
 * Collection of outline icons wrapped around SvgIcon from react-native-svg-icon.
 * Color of the icon is customizable.
 */
const GenericIcon = (props) => (<SvgIcon {...validateProps(props)} svgs={Icons} />);

const validateProps = (props) => {
  const newProps = Object.assign({}, props);
  if ('width' in props && 'height' in props) {
    return newProps;
  }
  else if (!('width' in props || 'height' in props)) {
    newProps.width = 35;
    newProps.height = 35;
  }
  else if (!('width' in props)) {
    newProps.width = newProps.height;
  }
  else {
    newProps.height = newProps.width;
  }
  return newProps;
};

export const Names = {
  Menu: 'Menu',
  TripleDots: 'TripleDots',
  Search: 'Search',

  BreadHeart: 'BreadHeart',

  Person: 'Person',
  PersonAdd: 'PersonAdd',

  NewPost: 'NewPost',
  Coin: 'Coin',
  Star: 'Star',
  Heart: 'Heart',

  BreadCross: 'BreadCross',

  BubbleHeart: 'BubbleHeart',
  Paperplane: 'Paperplane',
  Present: 'Present',
  Camera: 'Camera',
  Logout: 'Logout',
};

const Icons = {

  // Generic
  Menu: <Path d='M50,68h200 M50,150h200 M50,232h200' />,
  TripleDots: <Path d='M187,59.5c0,20.4-16.6,37-37,37s-37-16.6-37-37s16.6-37,37-37S187,39.1,187,59.5z M150,113.5c-20.4,0-37,16.6-37,37s16.6,37,37,37s37-16.6,37-37S170.4,113.5,150,113.5z M150,203.5c-20.4,0-37,16.6-37,37s16.6,37,37,37s37-16.6,37-37S170.4,203.5,150,203.5z' />,
  Search: <Path d='M166.9,15c-63,0-114.2,51.2-114.2,114.2c0,25.5,8.4,49,22.5,68l-50.8,54.1c-7.6,8-7.2,20.7,0.9,28.3c3.9,3.6,8.8,5.4,13.7,5.4c5.3,0,10.6-2.1,14.6-6.3l50.8-54c18,11.8,39.5,18.7,62.6,18.7c63,0,114.2-51.2,114.2-114.2S229.8,15,166.9,15z M166.9,203.4c-40.9,0-74.2-33.3-74.2-74.2C92.7,88.3,126,55,166.9,55c40.9,0,74.2,33.3,74.2,74.2C241.1,170.1,207.8,203.4,166.9,203.4z' />,

  // Breads
  BreadHeart: <Path d='M217.5,268.4H83.3c-17.1,0-31.6-15.7-31.6-34.2v-72.9c-15.7-12.9-24-31.8-24-55c0-41.1,33.4-74.6,74.4-74.6 c18,0,35.3,6.4,48.4,17.8c13.1-11.4,30.4-17.8,48.4-17.8c19.9,0,38.5,7.8,52.3,21.9c13.7,14,21.3,32.7,21.3,52.7 c0,19.9-9,39.6-24.7,54.6v73.3C247.6,251,236.4,268.4,217.5,268.4z M102,46.6c-32.7,0-59.4,26.7-59.4,59.6c0,20,7,35.2,20.9,45.3 c1.9,1.4,3.1,3.7,3.1,6.1v76.6c0,9.1,6.8,19.2,16.6,19.2h134.2c9.4,0,15.1-10,15.1-19.2v-76.6c0-2.2,0.9-4.2,2.5-5.6 c14.1-12.4,22.2-29.1,22.2-45.7c0-33.4-25.7-59.6-58.6-59.6c-16.5,0-32.1,6.7-42.9,18.3c-1.4,1.5-3.4,2.4-5.5,2.4s-4.1-0.9-5.5-2.4 C134.1,53.3,118.5,46.6,102,46.6z M150,208.3c-1.5,0-3.8,0-14.9-7.7c-5.3-3.7-13.1-9.6-20-16.8c-10.5-11-15.7-21.5-15.3-31.4 c0.1-18.2,14.9-32.9,33-32.9c6.1,0,12.1,1.7,17.2,4.8c5.1-3.1,11.1-4.8,17.2-4.8c18.1,0,32.9,14.7,33,32.9 c0.4,9.8-4.8,20.4-15.3,31.3c-6.9,7.2-14.7,13.1-20,16.8C153.8,208.3,151.5,208.3,150,208.3z M132.8,134.5c-10.1,0-18,7.9-18,18.1 c0,0.1,0,0.2,0,0.3c-0.6,14.5,25.5,33.9,35.2,39.5c9.7-5.6,35.9-25,35.2-39.5c0-0.1,0-0.2,0-0.3c0-10.1-7.9-18.1-18-18.1 c-4.5,0-8.9,1.7-12.2,4.7c-2.9,2.6-7.2,2.6-10.1,0C141.6,136.2,137.3,134.5,132.8,134.5z' />,

  // Person
  Person: <Path d='M150,154.9c-35.7,0-64.8-28.9-64.8-64.3s29.1-64.3,64.8-64.3s64.8,28.9,64.8,64.3S185.7,154.9,150,154.9z M150,41.3c-27.5,0-49.8,22.1-49.8,49.3s22.3,49.3,49.8,49.3c27.5,0,49.8-22.1,49.8-49.3S177.5,41.3,150,41.3z M179.6,273.8h-59.1 c-12.3,0-25.2-0.2-36.1-1.5c-8.4-1-33.9-4.1-39.6-24.8c-4.4-16.4,0.3-32.7,13.3-46.1c18.8-19.3,54-31.5,91.9-31.9h0.1 c37.8,0.3,73,12.5,91.9,31.9l0,0c13,13.3,17.7,29.7,13.3,46.1c-5.6,20.8-31.2,23.8-39.6,24.8C204.8,273.6,191.9,273.8,179.6,273.8z M150,184.5c-33.4,0.3-65.3,11-81.2,27.3c-9.4,9.6-12.6,20.3-9.5,31.7c3,11,21,13.2,26.9,13.9c10.1,1.2,22.4,1.4,34.3,1.4h59.1 c11.9,0,24.2-0.2,34.3-1.4c5.9-0.7,23.9-2.9,26.9-13.9c3.1-11.4-0.1-22-9.5-31.7C215.3,195.5,183.4,184.8,150,184.5z' />,
  PersonAdd: <Path d='M109.4,156.4c-36.4,0-66.1-29.4-66.1-65.6S73,25.2,109.4,25.2s66.1,29.4,66.1,65.6S145.9,156.4,109.4,156.4zM109.4,52.9c-21.2,0-38.4,17-38.4,37.9s17.2,37.9,38.4,37.9c21.2,0,38.4-17,38.4-37.9S130.6,52.9,109.4,52.9zM79.7,274.8c-13.6,0-25.5-0.3-35.4-1.7c-7.2-1-29.1-4.2-33.4-23.7c-3.8-17,0.2-33.5,11.5-47.6c17.7-22,52.4-36.2,88.6-36.2c34.2,0,67.6,13.8,84.9,35.3c11.8,14.5,16,31.5,12.3,49.2l0,0c-4,19-25.3,22.1-32.2,23.1c-12.8,1.8-29.5,1.7-48.8,1.6c-5.2,0-10.6-0.1-16.2-0.1c-5.7,0-11.2,0-16.6,0.1C89.3,274.7,84.4,274.8,79.7,274.8zM38.1,240c2.3,3.2,4.4,5.3,15.6,6.3c10.8,1,24.6,0.9,40.5,0.8c5.4,0,11-0.1,16.8-0.1c5.6,0,11.1,0,16.3,0.1c15.3,0.1,28.5,0.2,38.8-0.7c10.1-0.8,12-2.6,14.1-5.8c1.8-7.8,0.3-14.7-5.9-22.3c-12.1-15-37.6-25-63.4-25c-27.2,0-54.8,10.6-67,25.9C38,226.4,35.8,231.8,38.1,240zM275.6,108H256V88c0-8.3-6.7-15-15-15s-15,6.7-15,15v20h-20.4c-8.3,0-15,6.7-15,15s6.7,15,15,15H226v20c0,8.3,6.7,15,15,15s15-6.7,15-15v-20h19.6c8.3,0,15-6.7,15-15S283.9,108,275.6,108z' />,

  // Other
  NewPost: <Path d='M232,257H68c-15.2,0-27.5-12.2-27.5-27.2V70.2C40.5,55.2,52.8,43,68,43h164c15.2,0,27.5,12.2,27.5,27.2v159.6C259.5,244.8,247.2,257,232,257z M68,58c-6.9,0-12.5,5.5-12.5,12.2v159.6c0,6.7,5.6,12.2,12.5,12.2h164c6.9,0,12.5-5.5,12.5-12.2V70.2c0-6.7-5.6-12.2-12.5-12.2H68z M202.1,142.5h-44.6V98.6c0-4.1-3.4-7.5-7.5-7.5c-4.1,0-7.5,3.4-7.5,7.5v43.9H96.7c-4.1,0-7.5,3.4-7.5,7.5c0,4.1,3.4,7.5,7.5,7.5h45.8v45c0,4.1,3.4,7.5,7.5,7.5c4.1,0,7.5-3.4,7.5-7.5v-45h44.6c4.1,0,7.5-3.4,7.5-7.5C209.6,145.9,206.3,142.5,202.1,142.5z' />,
  Coin: <Path d='M191.6,176.1c0,9.6-4.4,18.3-12.2,24.6c-6,4.8-13.7,7.8-22.5,8.9l0.1,7.2c0.1,4.1-3.2,7.6-7.4,7.6 c0,0-0.1,0-0.1,0c-4.1,0-7.4-3.3-7.5-7.4l-0.1-7.8c-10.8-2.1-22.8-8.3-26.6-15.8c-1.9-3.7-0.4-8.2,3.4-10.1 c3.7-1.9,8.2-0.4,10.1,3.4c1.5,2.7,12.2,8.3,20.6,8.4c8.4,0,15.7-2.1,20.7-6.1c4.3-3.4,6.5-7.8,6.6-12.9c0-5-2.2-9.5-6.5-12.9 c-4.9-4-12.3-6.2-20.7-6.2c0,0,0,0,0,0c-24.2-0.1-41.1-14.1-41-34.1c0-17.1,12.5-29.8,31.3-33l-0.1-6.6c-0.1-4.1,3.2-7.6,7.4-7.6 c4.1-0.1,7.6,3.2,7.6,7.4l0.1,6.4c10.9,1.7,21.3,8.9,26.9,19c2,3.6,0.7,8.2-2.9,10.2c-3.6,2-8.2,0.7-10.2-2.9 c-3.8-6.8-11.5-11.6-18.8-11.7c-15.6,0-26.2,7.6-26.3,18.9c0,11.4,10.5,19,26.1,19.1c0,0,0,0,0,0c11.9,0,22.3,3.3,29.9,9.5 C187.3,157.8,191.6,166.5,191.6,176.1z M275.5,150c0-69.2-56.3-125.5-125.5-125.5S24.5,80.8,24.5,150S80.8,275.5,150,275.5 S275.5,219.2,275.5,150z M260.5,150c0,60.9-49.6,110.5-110.5,110.5S39.5,210.9,39.5,150S89.1,39.5,150,39.5S260.5,89.1,260.5,150z' />,
  Star: <Path d='M86.2,273.7c-5.3,0-10.5-1.7-15-4.9c-7.9-5.8-11.8-15.4-10.2-25l9.9-57.8l-42-40.9c-7-6.8-9.5-16.9-6.5-26.2 c3-9.3,10.9-16,20.7-17.4l58-8.4l25.9-52.5c4.3-8.8,13.1-14.3,22.9-14.3c9.8,0,18.6,5.5,22.9,14.3l25.9,52.5l58,8.4 c9.7,1.4,17.6,8.1,20.7,17.4c3,9.3,0.6,19.4-6.5,26.2l-42,40.9l9.9,57.8c1.7,9.7-2.2,19.3-10.2,25c-4.4,3.2-9.6,4.9-15,4.9 c0,0,0,0,0,0c-4.1,0-8.2-1-11.9-3L150,243.5l-51.9,27.3C94.4,272.8,90.3,273.7,86.2,273.7z M150,228c1.8,0,3.6,0.4,5.2,1.3 l53.7,28.2c1.6,0.8,3.2,1.2,4.9,1.2c0,0,0,0,0,0c2.2,0,4.4-0.7,6.2-2c3.3-2.4,4.9-6.4,4.2-10.4L214,186.6c-0.6-3.6,0.6-7.3,3.2-9.8 l43.4-42.3c2.9-2.8,3.9-7,2.7-10.9c-1.3-3.9-4.5-6.6-8.5-7.2l-60-8.7c-3.6-0.5-6.8-2.8-8.4-6.1l-26.8-54.4 c-1.8-3.6-5.4-5.9-9.5-5.9s-7.7,2.3-9.5,5.9l-26.8,54.4c-1.6,3.3-4.8,5.6-8.4,6.1l-60,8.7c-4,0.6-7.3,3.3-8.5,7.2s-0.2,8,2.7,10.9 l43.4,42.3c2.6,2.6,3.8,6.2,3.2,9.8l-10.2,59.8c-0.7,4,0.9,8,4.2,10.4c3.3,2.4,7.6,2.7,11.1,0.8l53.7-28.2 C146.4,228.4,148.2,228,150,228z' />,
  Heart: <Path d='M150,258.5c-0.1,0-0.3,0-0.4,0c-15.5-0.8-48.9-27.1-72.5-51.5c-19.9-20.6-53.4-60.7-53.4-97.4c0-42.5,35.1-68,69-68 c24.9,0,47.1,18.8,57.2,28.9c10.1-10.1,32.3-28.9,57.2-28.9c33.9,0,69,25.4,69,68c0,36.7-33.5,76.8-53.4,97.4 c-23.6,24.4-57,50.8-72.5,51.5C150.3,258.4,150.1,258.5,150,258.5z M92.8,56.5c-26.6,0-54,19.8-54,53c0,22.9,17.9,54.6,49.2,87 c28.7,29.7,55.2,46,62.1,46.9c6.9-0.9,33.4-17.3,62.1-46.9c31.3-32.3,49.2-64,49.2-87c0-33.2-27.5-53-54-53 c-26.4,0-51.2,29.4-51.5,29.7c-1.4,1.7-3.5,2.7-5.8,2.7c-2.2,0-4.3-1-5.8-2.7C144,86,119.1,56.5,92.8,56.5z' />,
  BubbleHeart: <Path d='M150.2,265.8c-24.8,0-48.7-6.4-69.4-18.7l-48.4,17.7c-2.7,1-5.8,0.3-7.9-1.7s-2.8-5.1-1.8-7.8 l16.9-47.6c-11.1-17.5-16.9-37.3-16.9-57.6C22.8,86.2,80,34.3,150.2,34.3c70.2,0,127.4,51.9,127.4,115.8 C277.6,213.8,220.5,265.8,150.2,265.8z M81.6,231.3c1.4,0,2.8,0.4,4,1.2c19,12,41.3,18.3,64.6,18.3c62,0,112.4-45.2,112.4-100.8 S212.2,49.3,150.2,49.3c-62,0-112.4,45.2-112.4,100.8c0,18.5,5.7,36.7,16.4,52.4c1.3,2,1.7,4.5,0.9,6.7l-12.8,36.1l36.8-13.5 C79.9,231.4,80.8,231.3,81.6,231.3z M150.3,215.8c-1.4,0-4.4,0-19-10.1c-7.2-5-17.8-13-27.2-22.8c-14-14.6-20.8-28.5-20.3-41.2 c0.1-23.5,19.2-42.6,42.7-42.6c8.5,0,16.8,2.5,23.8,7.2c7-4.7,15.2-7.2,23.8-7.2c23.5,0,42.6,19.1,42.7,42.6 c0.5,12.8-6.3,26.6-20.3,41.2c-9.4,9.8-20,17.8-27.2,22.8C154.7,215.8,151.6,215.8,150.3,215.8z M126.5,113.9 c-15.5,0-27.7,12.2-27.7,27.8c0,0.1,0,0.2,0,0.3c-1,22.8,40,51.5,51.5,57.9c11.4-6.4,52.5-35.1,51.5-57.9c0-0.1,0-0.2,0-0.3 c0-15.6-12.2-27.8-27.7-27.8c-7,0-13.6,2.6-18.7,7.2c-2.9,2.6-7.2,2.6-10.1,0C140.1,116.5,133.5,113.9,126.5,113.9z' />,
  Paperplane: <Path d='M267.9,40.1l-2.7-2.7c-3.2-3.2-8.1-4.4-12.5-2.9L36.7,108.7c-4,1.4-6.9,4.6-7.8,8.7c-1,4.1,0.2,8.3,3.2,11.2 l56.1,56.7l0.9,59.9c0.1,4.2,2.2,7.9,5.8,10.1l2.4,1.5c2,1.2,4.2,1.8,6.3,1.8c3.1,0,6.3-1.2,8.6-3.6l22.4-22.8l30.7,31 c1.9,2,4.6,3,7.3,3c0.6,0,1.3-0.1,1.9-0.2c3.3-0.6,6.1-2.9,7.5-6l88.6-206.6c0,0,0,0,0,0C272.4,48.8,271.4,43.6,267.9,40.1z M234.8,56.5l-140,114.1L46,121.4L234.8,56.5z M104,241.8l-0.6-41.1l20.6,20.8L104,241.8z M170.9,247.6l-65.6-66.2L249.8,63.6 L170.9,247.6z' />,
  Present: <Path d='M252.5,93.8h-55.1c7.2-6,13.4-13.4,14.8-22.3c1.3-8.1-1.4-15.8-8.1-23.1l-0.2-0.3c-7-7-14.8-10-23-9.1 c-12.7,1.5-23.2,12.5-31.2,23.5c-8-11.2-18.7-22.5-31.5-24c-8.2-1-16,2.1-23,9.1L95,47.9C88.3,55.2,85.6,63,86.9,71 c1.5,9,8,16.7,15.3,22.7H47.5c-4.7,0-8.5,3.8-8.5,8.5V143c0,4.7,3.8,8.5,8.5,8.5h2v100.7c0,4.7,3.8,8.5,8.5,8.5h182.3 c4.7,0,8.5-3.8,8.5-8.5V151.5h3.7c4.7,0,8.5-3.8,8.5-8.5v-40.8C261,97.6,257.2,93.8,252.5,93.8z M246,136.5h-5.7h-83.2v-27.8H246 V136.5z M182.7,53.9c1.3-0.2,5.2-0.6,10.5,4.7c5,5.6,4.4,9.3,4.2,10.5c-1.6,9.6-17.8,19.4-25.8,23.9l-14.5-0.1l0-14.4 C166.9,63,175.5,54.7,182.7,53.9z M105.9,58.2c5.4-5.3,9.3-4.8,10.5-4.7c7.2,0.8,15.8,9.1,25.6,24.6l0,14.4l-14.5,0.1 c-8-4.5-24.3-14.2-25.8-23.9C101.5,67.4,100.9,63.7,105.9,58.2z M54,108.8h88.1v27.8H58h-4V108.8z M64.5,151.5h77.6v94.2H64.5V151.5 z M233.8,245.7h-76.7v-94.2h76.7V245.7z' />,
  Camera: <Path d='M219.9,114.1c0,4.9-4,8.9-8.9,8.9s-8.9-4-8.9-8.9s4-8.9,8.9-8.9S219.9,109.2,219.9,114.1z M200.9,158 c0-32.9-26.8-59.8-59.8-59.8S81.4,125.1,81.4,158s26.8,59.8,59.8,59.8S200.9,190.9,200.9,158z M185.9,158 c0,24.7-20.1,44.8-44.8,44.8c-24.7,0-44.8-20.1-44.8-44.8c0-24.7,20.1-44.8,44.8-44.8C165.8,113.3,185.9,133.3,185.9,158z M266.2,236.8V87.5c0-7-5.7-12.7-12.7-12.7h-34.4l-23.5-32.4l-0.5-0.5c-2.3-2.2-5.4-3.5-8.6-3.5h-73.1c-3.2,0-6.3,1.2-8.6,3.5 l-0.4,0.4L80.2,74.8H46.4c-7,0-12.7,5.7-12.7,12.7v149.3c0,7,5.7,12.7,12.7,12.7h207.1C260.5,249.5,266.2,243.8,266.2,236.8z M48.8,89.8h31.7c4.5,0,8.9-2.2,11.6-5.8l22.8-30.5h70.3l22.2,30.6c2.6,3.6,6.8,5.8,11.3,5.8h32.6v144.7H48.8V89.8z' />,
  Logout: <Path d='M174.9,253H44.1c-8,0-14.6-6.5-14.6-14.5v-177c0-8,6.5-14.5,14.6-14.5h130.8c8,0,14.6,6.5,14.6,14.5v9.2 c0,4.1-3.4,7.5-7.5,7.5s-7.5-3.4-7.5-7.5V62h-130v176h130v-8.1c0-4.1,3.4-7.5,7.5-7.5s7.5,3.4,7.5,7.5v8.6 C189.5,246.5,183,253,174.9,253z M269,154.9c0.1-0.1,0.2-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3 c0.1-0.1,0.1-0.2,0.2-0.3c0.1-0.1,0.1-0.2,0.2-0.3c0-0.1,0.1-0.2,0.1-0.3c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0.1-0.2,0.1-0.3 c0-0.1,0.1-0.2,0.1-0.4c0-0.1,0-0.3,0.1-0.4c0-0.1,0-0.2,0-0.3c0-0.2,0-0.5,0-0.7l0,0c0,0,0,0,0,0c0-0.2,0-0.5,0-0.7 c0-0.1,0-0.2,0-0.3c0-0.1,0-0.3-0.1-0.4c0-0.1-0.1-0.2-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3c0-0.1-0.1-0.2-0.1-0.4c0-0.1-0.1-0.2-0.1-0.3 c0-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.1-0.2-0.2-0.3 c-0.1-0.1-0.1-0.2-0.2-0.3c-0.1-0.1-0.2-0.2-0.3-0.3c-0.1-0.1-0.1-0.1-0.2-0.2l-50-51c-2.9-3-7.6-3-10.6-0.1c-3,2.9-3,7.6-0.1,10.6 l37.5,38.2H102c-4.1,0-7.5,3.4-7.5,7.5c0,4.1,3.4,7.5,7.5,7.5h143.1l-37.5,38.2c-2.9,3-2.9,7.7,0.1,10.6c1.5,1.4,3.4,2.1,5.3,2.1 c1.9,0,3.9-0.8,5.4-2.2l50-51c0.1-0.1,0.1-0.1,0.2-0.2c0.1-0.1,0.2-0.2,0.3-0.3C268.9,155.1,269,155,269,154.9z' />,
};

GenericIcon.defaultProps = {
  fill: '#fff',
  viewBox: '0 0 300 300',
};

export default GenericIcon;
