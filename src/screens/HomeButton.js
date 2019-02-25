import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';

import withSharedStyles from 'src/lib/styles';

const styles = withSharedStyles({
  homeButtonContainer: {
    height: 80
  },
  homeButton: {
    left: 15,
    position: 'absolute'
  },
  homeButtonImage: {
    height: 80,
    width: 80
  }
});

export default ({onPress}) => {
  return (
    <View style={styles.homeButtonContainer}>
      <TouchableOpacity style={styles.homeButton} onPress={onPress}>
        <Image
          style={styles.homeButtonImage}
          source={require('src/images/home-button.png')}
        />
      </TouchableOpacity>
    </View>
  );
};
