import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import withSharedStyles from 'src/lib/styles';

const styles = withSharedStyles({
  backButton: {
    height: 37,
    width: 51
  },
  backButtonImage: {
    height: '100%',
    width: '100%'
  }
});

export default ({onPress}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Image
        style={[styles.backButtonImage]}
        source={require('src/images/transmutation/back-button.png')}
      />
    </TouchableOpacity>
  );
};
