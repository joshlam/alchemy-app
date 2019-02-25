import React from 'react';
import { Linking, Text, View } from 'react-native';

import styles from 'Alchemy/styles/shared';

const yogaTips = '\n-Be sure to inhale and exhale deeply during the poses, allowing your full attention to rest on becoming aware of your body.\n\n-Doing yoga first thing in the morning will help you center yourself for the day. Doing it at night can help you unwind before bed.\n\n-Consider putting on relaxing music while you perform your pose(s) if you find it helps your state.';
const openYogaLink = () => Linking.openURL('https://www.youtube.com/watch?v=4C-gxOE0j7s&t=1s');

export default () => {
  return (
    <View>
      <Text
        style={[styles.transmutationText, styles.link]}
        onPress={openYogaLink}
      >
        {'https://www.youtube.com/watch?v=4C-gxOE0j7s&t=1s'}
      </Text>
      <Text style={styles.transmutationText}>{yogaTips}</Text>
    </View>
  );
};
