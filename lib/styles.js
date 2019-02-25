import { StyleSheet } from 'react-native';

import sharedStyles from 'Alchemy/styles/shared';

export default styles => {
  return { ...sharedStyles, ...StyleSheet.create(styles) };
}
