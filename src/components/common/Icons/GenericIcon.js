/* eslint-disable max-len */
import React from 'react'
import SvgIcon from 'react-native-svg-icon'
import { G, Path } from 'react-native-svg'

const GenericIcon = (props) => <SvgIcon {...props} svgs={Icons} />

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
}

const Icons = {

  // Generic
  Menu: <Path d='M50,68h200 M50,150h200 M50,232h200' />,
  TripleDots: <Path d='M187,59.5c0,20.4-16.6,37-37,37s-37-16.6-37-37s16.6-37,37-37S187,39.1,187,59.5z M150,113.5c-20.4,0-37,16.6-37,37s16.6,37,37,37s37-16.6,37-37S170.4,113.5,150,113.5z M150,203.5c-20.4,0-37,16.6-37,37s16.6,37,37,37s37-16.6,37-37S170.4,203.5,150,203.5z' />,
  Search: <Path d='M166.9,15c-63,0-114.2,51.2-114.2,114.2c0,25.5,8.4,49,22.5,68l-50.8,54.1c-7.6,8-7.2,20.7,0.9,28.3c3.9,3.6,8.8,5.4,13.7,5.4c5.3,0,10.6-2.1,14.6-6.3l50.8-54c18,11.8,39.5,18.7,62.6,18.7c63,0,114.2-51.2,114.2-114.2S229.8,15,166.9,15z M166.9,203.4c-40.9,0-74.2-33.3-74.2-74.2C92.7,88.3,126,55,166.9,55c40.9,0,74.2,33.3,74.2,74.2C241.1,170.1,207.8,203.4,166.9,203.4z' />,

  // Breads
  BreadHeart: <Path d='M217.5,281H83.3c-24,0-44.3-21.4-44.3-46.8v-67.3c-15.7-15-23.9-35.8-23.9-60.6c0-48,39-87.1,86.9-87.1c17.5,0,34.4,5.2,48.4,14.6c14-9.4,30.9-14.6,48.4-14.6c23.3,0,45,9.1,61.2,25.7c16,16.4,24.8,38.2,24.8,61.4c0,21.6-8.9,42.9-24.8,59.8v68.2C260,260.4,241.3,281,217.5,281z M102,59.1c-25.9,0-46.9,21.1-46.9,47.1c0,16,5.1,27.5,15.7,35.1c5.2,3.8,8.3,9.8,8.3,16.2v76.6c0,3.6,2.9,6.8,4.3,6.8h134.2c0.7-0.5,2.5-3.1,2.5-6.8v-76.6c0-5.8,2.5-11.2,6.8-15c11.3-9.9,18-23.5,18-36.3c0-26.4-20.2-47.1-46.1-47.1c-13,0-25.3,5.2-33.7,14.3c-3.8,4.1-9.1,6.5-14.7,6.5s-10.9-2.3-14.7-6.5C127.3,64.3,115,59.1,102,59.1z M198.4,150.4L198.4,150.4c0-16.7-13.4-29.9-29.8-29.9c-7.8,0-14.8,2.9-20.2,7.8c-5.3-4.8-12.4-7.8-20.2-7.8c-16.5,0-29.8,13.2-29.8,29.9h0c-1.2,26.9,47.8,56.4,50,56.4C150.6,206.8,199.6,177.3,198.4,150.4z' />,

  // Person
  Person: <Path d='M150,157c-39.5,0-71.6-31.9-71.6-71s32.1-71,71.6-71c39.5,0,71.6,31.9,71.6,71S189.5,157,150,157z M150,44.9c-23,0-41.6,18.4-41.6,41s18.7,41,41.6,41c23,0,41.6-18.4,41.6-41S173,44.9,150,44.9z M117.5,285.3c-14.7,0-27.6-0.3-38.4-1.9c-7.8-1.1-31.5-4.6-36.2-25.7c-4.1-18.5,0.2-36.3,12.4-51.5c19.1-23.9,56.8-39.3,96-39.3c37.1,0,73.2,15,92,38.2c12.8,15.7,17.4,34.2,13.3,53.3l0,0c-4.4,20.6-27.4,23.9-34.9,25c-13.9,2-32,1.9-52.9,1.7c-5.6,0-11.5-0.1-17.5-0.1c-6.2,0-12.1,0-17.9,0.1C127.9,285.3,122.6,285.3,117.5,285.3z M72.5,247.6c2.5,3.4,4.8,5.7,16.9,6.8c11.7,1.1,26.6,0.9,43.9,0.8c5.9,0,11.9-0.1,18.2-0.1c6.1,0,12,0,17.7,0.1c16.6,0.1,30.9,0.2,42.1-0.7c10.9-0.9,13-2.8,15.3-6.3c1.9-8.5,0.3-15.9-6.4-24.2c-13.1-16.2-40.8-27.1-68.7-27.1c-29.5,0-59.4,11.5-72.6,28C72.4,232.9,70,238.8,72.5,247.6z' />,
  PersonAdd: <Path d='M109.4,156.4c-36.4,0-66.1-29.4-66.1-65.6S73,25.2,109.4,25.2s66.1,29.4,66.1,65.6S145.9,156.4,109.4,156.4zM109.4,52.9c-21.2,0-38.4,17-38.4,37.9s17.2,37.9,38.4,37.9c21.2,0,38.4-17,38.4-37.9S130.6,52.9,109.4,52.9zM79.7,274.8c-13.6,0-25.5-0.3-35.4-1.7c-7.2-1-29.1-4.2-33.4-23.7c-3.8-17,0.2-33.5,11.5-47.6c17.7-22,52.4-36.2,88.6-36.2c34.2,0,67.6,13.8,84.9,35.3c11.8,14.5,16,31.5,12.3,49.2l0,0c-4,19-25.3,22.1-32.2,23.1c-12.8,1.8-29.5,1.7-48.8,1.6c-5.2,0-10.6-0.1-16.2-0.1c-5.7,0-11.2,0-16.6,0.1C89.3,274.7,84.4,274.8,79.7,274.8zM38.1,240c2.3,3.2,4.4,5.3,15.6,6.3c10.8,1,24.6,0.9,40.5,0.8c5.4,0,11-0.1,16.8-0.1c5.6,0,11.1,0,16.3,0.1c15.3,0.1,28.5,0.2,38.8-0.7c10.1-0.8,12-2.6,14.1-5.8c1.8-7.8,0.3-14.7-5.9-22.3c-12.1-15-37.6-25-63.4-25c-27.2,0-54.8,10.6-67,25.9C38,226.4,35.8,231.8,38.1,240zM275.6,108H256V88c0-8.3-6.7-15-15-15s-15,6.7-15,15v20h-20.4c-8.3,0-15,6.7-15,15s6.7,15,15,15H226v20c0,8.3,6.7,15,15,15s15-6.7,15-15v-20h19.6c8.3,0,15-6.7,15-15S283.9,108,275.6,108z' />,

  // Other
  NewPost: <Path d='M237.5,25H62.5C41.9,25,25,41.9,25,62.5v174.9c0,20.6,16.9,37.5,37.5,37.5h174.9c20.6,0,37.5-16.9,37.5-37.5V62.5C275,41.9,258.1,25,237.5,25z M240,221.4c0,9.7-7.9,17.6-17.6,17.6H77.6c-9.7,0-17.6-7.9-17.6-17.6V78.6C60,68.9,67.9,61,77.6,61h144.7c9.7,0,17.6,7.9,17.6,17.6V221.4z M216,150c0,11-9,20-20,20h-26v27c0,11-9,20-20,20s-20-9-20-20v-27h-27c-11,0-20-9-20-20s9-20,20-20h27v-26c0-11,9-20,20-20s20,9,20,20v26h26C207,130,216,139,216,150z' />,
  Coin: <Path d='M163,223.9v6.1c0,5.5-4.5,10-10,10c-5.5,0-10-4.5-10-10v-5.1c-10.2-1.1-20-4.7-27.9-10.5c-9-6.5-11-19-4.5-27.9c6.5-9,19-11,27.9-4.5c2.9,2.1,7.1,3.3,11.4,3.3c6.7,0,11.5-2.8,11.5-6.6s-4.8-6.6-11.5-6.6c0,0,0,0,0,0c-29.3,0-51.4-20.1-51.4-46.6c0-22.8,16.3-40.7,39.4-45.4l-0.1-6.7c-0.1-5.5,4.4-10.2,9.9-10.2c0,0,0.1,0,0.1,0c5.5,0,9.9,4.5,10,10l0.1,6.2c9.9,1.2,19.3,4.8,27,10.3c9,6.5,11,19,4.5,27.9c-6.5,9-19,11-27.9,4.5c-2.9-2.1-7.1-3.3-11.4-3.3c-6.7,0-11.5,2.8-11.5,6.6s4.8,6.6,11.5,6.6c0,0,0,0,0,0c29.3,0,51.4,20.1,51.4,46.6C201.5,201.1,185.7,218.9,163,223.9z M290,150c0-77.2-62.8-140-140-140S10,72.8,10,150s62.8,140,140,140S290,227.2,290,150z M260,150c0,60.7-49.3,110-110,110S40,210.7,40,150S89.3,40,150,40S260,89.3,260,150z' />,
  Star: <Path d='M283.7,138.2c5.7-5.6,7.8-13.8,5.3-21.4c-2.5-7.6-8.9-13.1-16.9-14.2l-69.3-10.1c-1.4-0.2-2.5-1.1-3.1-2.3l-31-62.8c-3.5-7.2-10.7-11.6-18.7-11.6c-8,0-15.2,4.5-18.7,11.6l-31,62.8c-0.6,1.2-1.8,2.1-3.1,2.3l-69.3,10.1c-7.9,1.2-14.4,6.6-16.9,14.2c-2.5,7.6-0.5,15.8,5.3,21.4l50.1,48.9c1,1,1.4,2.3,1.2,3.7l-11.8,69c-1.4,7.9,1.8,15.7,8.3,20.4c6.5,4.7,14.9,5.3,22,1.6l62-32.6c1.2-0.6,2.7-0.6,3.9,0l62,32.6c3.1,1.6,6.4,2.4,9.7,2.4c4.3,0,8.6-1.4,12.3-4c6.5-4.7,9.7-12.5,8.3-20.4l-11.8-69c-0.2-1.4,0.2-2.7,1.2-3.7L283.7,138.2z M206.5,169.7c-3.9,3.8-5.6,9.2-4.7,14.5l9.3,54.2c0.3,1.8-0.8,2.8-1.3,3.2c-0.5,0.4-1.8,1.1-3.5,0.2l-48.7-25.6c-2.4-1.3-5-1.9-7.6-1.9c-2.6,0-5.2,0.6-7.6,1.9l-48.7,25.6c-1.6,0.9-3,0.1-3.5-0.2s-1.6-1.4-1.3-3.2l9.3-54.2c0.9-5.3-0.9-10.8-4.7-14.5l-39.4-38.4c-1.3-1.3-1-2.8-0.8-3.4c0.2-0.6,0.8-2,2.6-2.2l54.5-7.9c5.3-0.8,10-4.1,12.4-9l24.4-49.3c0.8-1.7,2.3-1.8,2.9-1.8c0.6,0,2.1,0.2,2.9,1.8v0l24.4,49.3c2.4,4.8,7,8.2,12.4,9l54.5,7.9c1.8,0.3,2.5,1.7,2.6,2.2c0.2,0.6,0.5,2.1-0.8,3.4L206.5,169.7z' />,
  Heart: <Path d='M150,269.7c-3.8,0-10.3,0-40.1-20.8c-14.2-9.9-35.1-25.9-53.7-45.4c-28.3-29.6-42.1-57.8-41.1-84c0.1-23.9,9.3-46.3,25.9-63c16.7-16.7,38.9-26,62.7-26c16.7,0,32.7,4.4,46.3,12.6c13.7-8.3,29.7-12.7,46.4-12.7c23.8,0,46,9.3,62.7,26.1c16.6,16.7,25.8,39.1,25.9,63c1,26.1-12.8,54.4-41.1,84c-18.6,19.5-39.5,35.4-53.8,45.4C160.3,269.7,153.8,269.7,150,269.7z M103.6,70.6C76.4,70.6,55.1,92.3,55,120c0,0.3,0,0.6,0,0.9c-0.8,17.8,14.7,42,43.7,68.2c20.1,18.2,40.7,31.9,51.2,38.2c10.5-6.3,31.1-20,51.2-38.2c29-26.2,44.5-50.4,43.7-68.2c0-0.3,0-0.6,0-0.9c0-27.8-21.4-49.6-48.6-49.6c-12.5,0-24.2,4.4-32.9,12.3c-7.6,7-19.3,7-27,0C127.9,74.9,116.3,70.6,103.6,70.6z M228.9,118.5c0.7-9.7-4-19.8-12.2-26.4c-7.4-5.9-16.3-7.9-24.5-5.5c-5.3,1.6-8.3,7.1-6.7,12.4c1.6,5.3,7.1,8.3,12.4,6.7c2.6-0.8,5.3,1.1,6.3,1.9c3,2.5,5,6.3,4.8,9.4c-0.4,5.5,3.8,10.3,9.3,10.7c0.2,0,0.5,0,0.7,0C224.1,127.8,228.5,123.8,228.9,118.5z' />,

}

GenericIcon.defaultProps = {
  fill: '#fff',
  viewBox: '0 0 300 300',
  width: 35,
  height: 35,
}

export default GenericIcon
