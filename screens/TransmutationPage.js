import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  Text,
  View
} from 'react-native';
import Modal from 'react-native-modal';

import TransmutationTemplate from './TransmutationTemplate';
import { deviceHeight, deviceWidth, fontSize } from 'Alchemy/lib/sizes';
import withSharedStyles from 'Alchemy/lib/styles';

const styles = withSharedStyles({
  transmutationMana: {
    color: 'rgba(0,195,255,1)',
    fontSize: fontSize(32),
    fontWeight: '600',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 2},
    textShadowRadius: 1
  },
  transmutationInstructions: {
    color: 'black',
    fontSize: fontSize(32) - (Platform.OS === 'ios' ? 3 : 0),
    textAlign: 'center'
  },
  transmute: {
    alignItems: 'center',
    marginBottom: 12,
    marginTop: 17
  },
  transmuteButton: {
    height: 65,
    width: 200
  },
  effectsTitle: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: 135
  },
  effectsTitleText: {
    color: 'black',
    fontSize: fontSize(42),
    marginLeft: 5
  },
  explanationText: {
    marginTop: 5
  },
  expandTransmutation: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 15,
    width: '100%'
  },
  expandButton: {
    marginRight: -10,
    marginLeft: 10,
    width: 130
  },
  expandButtonImage: {
    height: 45,
    width: 120
  }
});

export default class TransmutationPage extends React.Component {
  constructor(props) {
    super(props);

    this.handleUnlock = this.handleUnlock.bind(this);
    this.handleUnlockConfirm = this.handleUnlockConfirm.bind(this);
    this.handleTransmute = this.handleTransmute.bind(this);
    this.handleTransmuteConfirm = this.handleTransmuteConfirm.bind(this);
    this.closeUnlockModal = this.closeUnlockModal.bind(this);
    this.closeTransmuteModal = this.closeTransmuteModal.bind(this);

    this.state = {unlockModalVisible: false, transmuteModalVisible: false};
  }

  get TransmuteButton() {
    switch (this.props.status) {
      case 'LOCKED':
        return (
          <Image
            style={styles.transmuteButton}
            source={require('../assets/images/transmutation/locked.png')}
          />
        );
      case 'UNLOCKABLE':
        return (
          <TouchableOpacity onPress={this.handleUnlock}>
            <Image
              style={styles.transmuteButton}
              source={
                require('../assets/images/transmutation/unlock-button.png')
              }
            />
          </TouchableOpacity>
        );
      case 'READY':
        if (this.props.isUnlocking) {
          return (
            <Image
              style={styles.transmuteButton}
              source={require('../assets/images/transmutation/unlocked.png')}
            />
          );
        }

        return (
          <TouchableOpacity onPress={this.handleTransmute}>
            <Image
              style={styles.transmuteButton}
              source={
                require('../assets/images/transmutation/transmute-button.png')
              }
            />
          </TouchableOpacity>
        );
      case 'COMPLETE':
        if (this.props.isUnlocking) {
          return (
            <Image
              style={styles.transmuteButton}
              source={require('../assets/images/transmutation/unlocked.png')}
            />
          );
        }

        return (
          <Image
            style={styles.transmuteButton}
            source={require('../assets/images/transmutation/complete.png')}
          />
        );
    }
  }

  handleUnlock() {
    this.setState({unlockModalVisible: true});
  }

  handleUnlockConfirm() {
    this.closeUnlockModal();

    this.props.onUnlock(this.props.transmutation.name);
  }

  handleTransmute() {
    this.setState({transmuteModalVisible: true});
  }

  handleTransmuteConfirm() {
    this.closeTransmuteModal();

    this.props.onTransmute(this.props.transmutation.name);
  }

  closeUnlockModal() {
    this.setState({unlockModalVisible: false});
  }

  closeTransmuteModal() {
    this.setState({transmuteModalVisible: false});
  }

  render() {
    const {
      transmutation,
      icon,
      onTransmutations,
      openTips,
      openMore
    } = this.props;

    const mana = (
      <Text style={styles.transmutationMana}>
        +{transmutation.mana} Mana
      </Text>
    );

    return (
      <TransmutationTemplate
        onBack={onTransmutations}
        title={transmutation.name}
        icon={icon}
        headerContent={mana}
      >
        <Modal
          style={styles.modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          isVisible={this.state.unlockModalVisible}
          onBackButtonPress={this.closeUnlockModal}
          onBackdropPress={this.closeUnlockModal}
        >
          <ImageBackground
            source={
              require('../assets/images/transmutation/unlock-background.png')
            }
            style={styles.modalBackground}
            imageStyle={styles.modalBackgroundImage}
          >
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.closeUnlockModal}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('../assets/images/transmutation/no-button.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.handleUnlockConfirm}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('../assets/images/transmutation/yes-button.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>
        <Modal
          style={styles.modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          isVisible={this.state.transmuteModalVisible}
          onBackButtonPress={this.closeTransmuteModal}
          onBackdropPress={this.closeTransmuteModal}
        >
          <ImageBackground
            source={
              require('../assets/images/transmutation/transmute-background.png')
            }
            style={styles.modalBackground}
            imageStyle={styles.modalBackgroundImage}
          >
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.closeTransmuteModal}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('../assets/images/transmutation/not-yet-button.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.handleTransmuteConfirm}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('../assets/images/transmutation/yes-button.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>
        <Text style={styles.transmutationInstructions}>
          {transmutation.instructions}
        </Text>
        <View style={styles.transmute}>{this.TransmuteButton}</View>
        <View style={styles.effectsTitle}>
          <Text style={styles.effectsTitleText}>Effects</Text>
        </View>
        <Text style={[styles.transmutationText, styles.explanationText]}>
          {transmutation.explanation}
        </Text>
        <View style={styles.expandTransmutation}>
          <TouchableOpacity style={styles.expandButton} onPress={openTips}>
            <Image
              style={styles.expandButtonImage}
              source={require('../assets/images/transmutation/tips-button.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.expandButton} onPress={openMore}>
            <Image
              style={styles.expandButtonImage}
              source={require('../assets/images/transmutation/more-button.png')}
            />
          </TouchableOpacity>
        </View>
      </TransmutationTemplate>
    );
  }
}
