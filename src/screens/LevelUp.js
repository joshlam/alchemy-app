import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import withSharedStyles from 'src/lib/styles';
import { playSound } from 'src/services/sound';

const styles = withSharedStyles({
  levelUp: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
  levelUpImage: {
    height: 150,
    width: 150
  }
});

export default class LevelUp extends React.PureComponent {
  componentDidMount() {
    playSound('level_up_alert');
  }

  render() {
    return (
      <TouchableOpacity style={styles.levelUp} onPress={this.props.onLevelUp}>
        <Image
          style={styles.levelUpImage}
          source={require('src/images/level-up.png')}
        />
      </TouchableOpacity>
    );
  }
}
