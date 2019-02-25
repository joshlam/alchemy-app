import React from 'react';
import { Text, View } from 'react-native';

import BackButton from './BackButton';
import { fontSize } from 'Alchemy/lib/sizes';
import withSharedStyles from 'Alchemy/lib/styles';

const styles = withSharedStyles({
  transmutationTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  transmutationTitle: {
    alignItems: 'center',
    marginTop: 10
  },
  transmutationTitleText: {
    color: 'black',
    fontSize: fontSize(51),
    fontWeight: '600',
    textAlign: 'center'
  }
});

export default class TransmutationHeader extends React.PureComponent {
  render() {
    return (
      <View>
        <View style={styles.transmutationTop}>
          <BackButton onPress={this.props.onBack} />
          {this.props.children}
        </View>
        <View style={styles.transmutationTitle}>
          <Text style={styles.transmutationTitleText}>{this.props.title}</Text>
        </View>
      </View>
    );
  }
}
