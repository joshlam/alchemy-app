import React from 'react';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';

import LevelUp from 'src/screens/LevelUp';
import Ascend from 'src/screens/Ascend';
import { deviceHeight, deviceWidth, fontSize } from 'src/lib/sizes';
import withSharedStyles from 'src/lib/styles';

const styles = withSharedStyles({
  levelModalButtons: {
    marginLeft: 5
  },
  ascendModalButtons: {
    marginLeft: 0
  },
  alchemistDisplayContainer: {
    flexDirection: 'row',
    height: 120,
    justifyContent: 'space-between',
    marginTop: 10,
    position: 'absolute',
    width: '100%',
    zIndex: 2
  },
  alchemistDisplay: {
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 6,
    justifyContent: 'center',
    width: '32%'
  },
  alchemistDisplayText: {
    color: 'yellow',
    fontSize: fontSize(24),
    textAlign: 'center'
  },
  manaBar: {
    marginTop: 5
  },
  manaText: {
    color: 'white',
    fontSize: fontSize(18),
    textAlign: 'left'
  }
});

export default class AlchemistDisplay extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      levelUpModalVisible: false,
      levelUpResultVisible: false,
      ascendModalVisible: false,
      ascendResultVisible: false
    };

    this.handleAscend = this.handleAscend.bind(this);
    this.handleLevelUp = this.handleLevelUp.bind(this);
    this.closeAscendModal = this.closeAscendModal.bind(this);
    this.closeLevelUpModal = this.closeLevelUpModal.bind(this);
    this.handleAscendConfirm = this.handleAscendConfirm.bind(this);
    this.handleLevelUpConfirm = this.handleLevelUpConfirm.bind(this);
    this.closeAscendResult = this.closeAscendResult.bind(this);
    this.closeLevelUpResult = this.closeLevelUpResult.bind(this);
  }

  get Transcend() {
    if (this.props.canAscend) return <Ascend onAscend={this.handleAscend} />;

    if (this.props.canTranscend) {
      return <LevelUp onLevelUp={this.handleLevelUp} />;
    }

    return <View />;
  }

  get AscendResult() {
    if (this.props.rank === 'Acolyte') {
      return (
        <ImageBackground
          source={require('src/images/ascend/acolyte.png')}
          style={styles.modalBackground}
          imageStyle={styles.modalBackgroundImage}
        />
      );
    }

    return (
      <ImageBackground
        source={require('src/images/ascend/alchemist.png')}
        style={styles.modalBackground}
        imageStyle={styles.modalBackgroundImage}
      />
    );
  }

  handleAscend() {
    this.setState({ascendModalVisible: true});
  }

  handleLevelUp() {
    this.setState({levelUpModalVisible: true});
  }

  closeAscendModal() {
    this.setState({ascendModalVisible: false});
  }

  closeLevelUpModal() {
    this.setState({levelUpModalVisible: false});
  }

  handleAscendConfirm() {
    this.setState({ascendModalVisible: false});

    this.props.onLevelUp(true);
  }

  handleLevelUpConfirm() {
    this.setState({levelUpModalVisible: false});

    this.props.onLevelUp(false);
  }

  closeAscendResult() {
    this.setState({ascendResultVisible: false});
  }

  closeLevelUpResult() {
    this.setState({levelUpResultVisible: false});
  }

  render() {
    const {level, mana, rank, manaForLevel} = this.props;

    return (
      <View style={styles.alchemistDisplayContainer}>
        <Modal
          style={styles.modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          isVisible={this.state.levelUpModalVisible}
          onBackButtonPress={this.closeLevelUpModal}
          onBackdropPress={this.closeLevelUpModal}
        >
          <ImageBackground
            source={require('src/images/level/window.png')}
            style={styles.modalBackground}
            imageStyle={styles.modalBackgroundImage}
          >
            <View style={[styles.modalButtons, styles.levelModalButtons]}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.closeLevelUpModal}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('src/images/level/no-button.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.handleLevelUpConfirm}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('src/images/level/yes-button.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>
        <Modal
          style={styles.modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          isVisible={this.state.levelUpResultVisible}
          onBackButtonPress={this.closeLevelResult}
          onBackdropPress={this.closeLevelResult}
          onSwipe={this.closeLevelResult}
          swipeDirection={'left'}
        >
          <ImageBackground
            source={require('src/images/level/result.png')}
            style={styles.modalBackground}
            imageStyle={styles.modalBackgroundImage}
          >
            <Text style={styles.level}>{level}</Text>
          </ImageBackground>
        </Modal>
        <Modal
          style={styles.modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          isVisible={this.state.ascendModalVisible}
          onBackButtonPress={this.closeAscendModal}
          onBackdropPress={this.closeAscendModal}
        >
          <ImageBackground
            source={require('src/images/ascend/window.png')}
            style={styles.modalBackground}
            imageStyle={styles.modalBackgroundImage}
          >
            <View style={[styles.modalButtons, styles.ascendModalButtons]}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.closeAscendModal}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('src/images/ascend/wait-button.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.handleAscendConfirm}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('src/images/ascend/ready-button.png')}
                />
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </Modal>
        <Modal
          style={styles.modal}
          deviceHeight={deviceHeight}
          deviceWidth={deviceWidth}
          isVisible={this.state.ascendResultVisible}
          onBackButtonPress={this.closeAscendResult}
          onBackdropPress={this.closeAscendResult}
          onSwipe={this.closeAscendResult}
          swipeDirection={'left'}
        >
          {this.AscendResult}
        </Modal>
        {this.Transcend}
        <View style={styles.alchemistDisplay}>
          <Text style={styles.alchemistDisplayText}>Level {level}</Text>
          <Text style={styles.alchemistDisplayText}>{rank}</Text>
          <View style={styles.manaBar}>
            <Progress.Bar
              color={'rgba(0, 102, 255, 1)'}
              progress={mana/manaForLevel}
              height={10}
              width={100}
            />
            <Text style={styles.manaText}>{mana}/{manaForLevel}</Text>
          </View>
        </View>
      </View>
    );
  }
}
