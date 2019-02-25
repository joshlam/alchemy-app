import { StyleSheet } from 'react-native';

import sharedStyles from 'src/styles/shared';

export default styles => {
  return { ...sharedStyles, ...StyleSheet.create(styles) };
}
