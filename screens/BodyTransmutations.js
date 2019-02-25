import React from 'react';
import { ImageBackground, View } from 'react-native';

import AlchemistDisplay from './AlchemistDisplay';
import HomeButton from './HomeButton';
import Transmutation from './Transmutation';
import styles from 'Alchemy/styles/transmutations';

export default ({
  rank,
  level,
  mana,
  onLevelUp,
  onHomePress,
  onTransmutationPress,
  isUnlocking,
  hydrationStatus,
  sleepStatus,
  supplementStatus,
  fitnessStatus,
  natureStatus,
  sunlightStatus,
  goodFoodStatus,
  junkFoodStatus,
  yogaStatus
}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/body/blank-transmutations.png')}
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
          isUnlocking={isUnlocking}
          onLevelUp={onLevelUp}
        />
        <View style={styles.transmutationTree}>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Yoga'}
              status={yogaStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Good Food'}
              status={goodFoodStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Junk Food'}
              status={junkFoodStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Sunlight'}
              status={sunlightStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Fitness'}
              status={fitnessStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Nature'}
              status={natureStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Supplement'}
              status={supplementStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Sleep'}
              status={sleepStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={styles.transmutationRow}>
            <Transmutation
              name={'Hydration'}
              status={hydrationStatus}
              onPress={onTransmutationPress}
            />
          </View>
        </View>
        <HomeButton onPress={onHomePress} />
      </ImageBackground>
    </View>
  );
};
