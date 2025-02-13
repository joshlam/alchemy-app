import React from 'react';
import { ImageBackground, TouchableOpacity, View } from 'react-native';

import AlchemistDisplay from './AlchemistDisplay';
import withSharedStyles from 'src/lib/styles';
import { loopSound } from 'src/services/sound';

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

export default class Home extends React.Component {
  componentDidMount() {
    loopSound('home');
  }

  render() {
    const {
      alchemistFetched,
      rank,
      level,
      mana,
      manaForLevel,
      canTranscend,
      canAscend,
      openMindTransmutations,
      openBodyTransmutations,
      onLevelUp
    } = this.props;

    return (
      <View>
        <ImageBackground
          source={require('src/images/home-screen-core.png')}
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
              manaForLevel={manaForLevel}
              canTranscend={canTranscend}
              canAscend={canAscend}
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
  }
}
