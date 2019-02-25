import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

import { idFor } from 'Alchemy/lib/helpers';
import withSharedStyles from 'Alchemy/lib/styles';
import ICONS from 'Alchemy/styles/icons';

const styles = withSharedStyles({
  transmutationContainer: {
    alignItems: 'center',
    height: 100,
    justifyContent: 'center',
    marginBottom: 0,
    marginLeft: 15,
    marginRight: 15,
    marginTop: 0,
    width: 100,
    zIndex: 4
  },
  transmutation: {
    height: '100%',
    width: '100%'
  },
  gratitude: {

  },
  connect: {

  },
  values: {

  },
  affirmations: {

  },
  reading: {

  },
  passion: {

  },
  mindfulness: {

  },
  visualization: {

  },
  meditation: {

  },
  hydration: {

  },
  sleep: {

  },
  supplement: {

  },
  fitness: {

  },
  nature: {

  },
  sunlight: {

  },
  goodfood: {

  },
  junkfood: {

  },
  yoga: {

  }
});

export default class Transmutation extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handlePress = this.handlePress.bind(this);
  }

  handlePress() {
    this.props.onPress(this.props.name);
  }

  render() {
    const name = this.props.name;
    const id = idFor(name);

    return (
      <TouchableOpacity
        style={styles.transmutationContainer}
        onPress={this.handlePress}
      >
        <Image
          style={[styles.transmutation, styles[id]]}
          source={ICONS[name][this.props.status]}
        />
      </TouchableOpacity>
    );
  }
}
