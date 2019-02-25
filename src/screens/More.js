import React from 'react';
import { Text, View } from 'react-native';

import TransmutationTemplate from './TransmutationTemplate';
import { fontSize } from 'src/lib/sizes';
import withSharedStyles from 'src/lib/styles';

const styles = withSharedStyles({
  referencesSection: {
    marginTop: 10,
    paddingBottom: 10
  },
  referencesHeader: {
    color: 'black',
    fontSize: fontSize(36)
  }
});

export default ({icon, content, references, onBack}) => {
  return (
    <TransmutationTemplate
      onBack={onBack}
      title={'More...'}
      icon={icon}
    >
      <Text style={styles.transmutationText}>{content}</Text>
      <View style={styles.referencesSection}>
        <Text style={styles.referencesHeader}>References</Text>
        <Text style={styles.transmutationText}>{references}</Text>
      </View>
    </TransmutationTemplate>
  );
};
