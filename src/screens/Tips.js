import React from 'react';
import { Text } from 'react-native';

import TransmutationTemplate from './TransmutationTemplate';
import YogaTips from './YogaTips';
import styles from 'src/styles/shared';

export default ({isYoga, icon, tips, onBack}) => {
  return (
    <TransmutationTemplate
      onBack={onBack}
      title={'Tips'}
      icon={icon}
    >
      {isYoga
        ? <YogaTips />
        : <Text style={styles.transmutationText}>{tips}</Text>
      }
    </TransmutationTemplate>
  );
};
