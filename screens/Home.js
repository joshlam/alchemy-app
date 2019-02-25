import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import AlchemistDisplay from './AlchemistDisplay';
import withSharedStyles from 'Alchemy/lib/styles';

const styles = withSharedStyles({
  homePage: {
    flexDirection: 'column'
  },
  openTransmutations: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: '67%',
    width: '100%',
    justifyContent: 'center'
  },
  openMindTransmutations: {
    height: '38%',
    width: '35%'
  },
  openBodyTransmutations: {
    height: '38%',
    width: '35%'
  }
});

export default ({
  alchemistFetched,
  rank,
  level,
  mana,
  openMindTransmutations,
  openBodyTransmutations,
  onLevelUp
}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/home-screen-core.png')}
        style={[
          styles.backgroundImage,
          styles.paddedBackground,
          styles.homePage
        ]}
      >
        {alchemistFetched &&
          <AlchemistDisplay
            onLevelUp={onLevelUp}
            rank={rank}
            level={level}
            mana={mana}
          />
        }
        <View style={styles.openTransmutations}>
          <TouchableOpacity
            style={styles.openMindTransmutations}
            onPress={openMindTransmutations}
          />
          <TouchableOpacity
            style={styles.openBodyTransmutations}
            onPress={openBodyTransmutations}
          />
        </View>
      </ImageBackground>
    </View>
  );
};
