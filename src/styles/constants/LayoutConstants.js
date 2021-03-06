import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  headerHeight: 50,
  margins: {
    xs: 5,
    s: 10,
    m: 15,
    l: 20,
    xl: 22,
    xxxl: 35,
  },
  window: {
    width,
    height,
  },
  isSmallDevice: width < 375,
};
