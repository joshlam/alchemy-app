import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  View
} from 'react-native';

import TransmutationHeader from './TransmutationHeader';
import { fontSize } from 'Alchemy/lib/sizes';
import withSharedStyles from 'Alchemy/lib/styles';

const styles = withSharedStyles({
  transmutationTemplate: {

  },
  transmutationPage: {
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 15
  },
  transmutationDivider: {
    alignItems: 'center',
    justifyContent: 'center',
    top: -10,
    width: '100%'
  },
  transmutationDividerImage: {
    resizeMode: 'contain'
  },
  transmutationIcon: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  transmutationIconImage: {
    height: 120,
    width: 120
  },
  transmutationBody: {
    flex: 1,
    top: -15
  }
});

export default class TransmutationTemplate extends React.PureComponent {
  render() {
    const {onBack, title, icon, headerContent, children } = this.props;

    return (
      <View style={styles.transmutationTemplate}>
        <ImageBackground
          source={require('../assets/images/transmutation/background.png')}
          style={[styles.backgroundImage, styles.transmutationPage]}
        >
          <TransmutationHeader onBack={onBack} title={title}>
            {headerContent}
          </TransmutationHeader>
          <ImageBackground
            source={require('../assets/images/transmutation/divider.png')}
            style={styles.transmutationDivider}
            imageStyle={styles.transmutationDividerImage}
          >
            <View style={styles.transmutationIcon}>
              <Image
                style={styles.transmutationIconImage}
                source={icon}
              />
            </View>
          </ImageBackground>
          <View style={styles.transmutationBody}>
            <ScrollView style={styles.scrollView}>{children}</ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
