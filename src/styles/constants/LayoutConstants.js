import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  margins: {
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
  },
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
