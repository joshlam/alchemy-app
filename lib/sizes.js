import { Dimensions, Platform } from 'react-native';

export const deviceHeight = Platform.OS === 'ios'
  ? Dimensions.get('window').height
  : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');

export const deviceWidth = Dimensions.get('window').width;

export function fontSize(size) {
  if (size >= 30) return size - (Platform.OS === 'ios' ? 8 : 7);

  return size - (Platform.OS === 'ios' ? 4 : 2);
}

const screenSizeFrom = height => {
  if (height > 850) return 'XXL';
  if (height > 800) return 'XL';
  if (height > 750) return 'L';
  if (height > 700) return 'M';

  return 'S';
};

export const screenSize = screenSizeFrom(deviceHeight);
