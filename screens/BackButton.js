import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import withSharedStyles from 'Alchemy/lib/styles';

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
        source={require('../assets/images/transmutation/back-button.png')}
      />
    </TouchableOpacity>
  );
};
