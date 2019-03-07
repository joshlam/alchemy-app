import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import withSharedStyles from 'src/lib/styles';
import { playSound } from 'src/services/sound';

const styles = withSharedStyles({
  ascend: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
  ascendImage: {
    height: 150,
    width: 150
  }
});

export default class Ascend extends React.PureComponent {
  componentDidMount() {
    playSound('ascend_alert', 'mp3');
  }

  render() {
    return (
      <TouchableOpacity style={styles.ascend} onPress={this.props.onAscend}>
        <Image
          style={styles.ascendImage}
          source={require('src/images/ascend.png')}
        />
      </TouchableOpacity>
    );
  }
}
