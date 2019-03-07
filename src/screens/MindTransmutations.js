import React from 'react';
import { ImageBackground, View } from 'react-native';

import AlchemistDisplay from './AlchemistDisplay';
import HomeButton from './HomeButton';
import Transmutation from './Transmutation';
import styles from 'src/styles/transmutations';

export default ({
  rank,
  level,
  mana,
  manaForLevel,
  canTranscend,
  canAscend,
  onLevelUp,
  onHomePress,
  onTransmutationPress,
  isUnlocking,
  gratitudeStatus,
  connectStatus,
  valuesStatus,
  affirmationsStatus,
  readingStatus,
  passionStatus,
  mindfulnessStatus,
  visualizationStatus,
  meditationStatus
}) => {
  return (
    <View>
      <ImageBackground
        source={require('src/images/mind/blank-transmutations.png')}
        style={[
          styles.backgroundImage,
          styles.paddedBackground,
          styles.transmutationsBackground
        ]}
      >
        <AlchemistDisplay
          rank={rank}
          level={level}
          mana={mana}
          manaForLevel={manaForLevel}
          canTranscend={canTranscend}
          canAscend={canAscend}
          isUnlocking={isUnlocking}
          onLevelUp={onLevelUp}
        />
        <View style={styles.transmutationTree}>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Meditation'}
              status={meditationStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Visualization'}
              status={visualizationStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Mindfulness'}
              status={mindfulnessStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Reading'}
              status={readingStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Affirmations'}
              status={affirmationsStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Passion'}
              status={passionStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Connect'}
              status={connectStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Values'}
              status={valuesStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Gratitude'}
              status={gratitudeStatus}
              onPress={onTransmutationPress}
            />
          </View>
        </View>
        <HomeButton onPress={onHomePress} />
      </ImageBackground>
    </View>
  );
};
