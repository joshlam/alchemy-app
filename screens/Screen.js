import React from 'react';
import {
  Alert,
  AsyncStorage,
  Button,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import * as Progress from 'react-native-progress';
import Sound from 'react-native-sound';
import Swiper from 'react-native-swiper';

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Platform.OS === 'ios'
  ? Dimensions.get('window').height
  : require('react-native-extra-dimensions-android').get('REAL_WINDOW_HEIGHT');
const screenSizeFrom = height => {
  if (height > 850) return 'XXL';
  if (height > 800) return 'XL';
  if (height > 750) return 'L';
  if (height > 700) return 'M';

  return 'S';
};
const screenSize = screenSizeFrom(deviceHeight);
const fontSize = size => {
  if (size >= 30) return size - (Platform.OS === 'ios' ? 8 : 7);

  return size - (Platform.OS === 'ios' ? 4 : 2);
};

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%'
  },
  scrollView: {
    flex: 1
  },
  transmutationTemplate: {

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
  modal: {

  },
  modalBackground: {
    height: '100%',
    justifyContent: 'center',
    width: '100%'
  },
  modalBackgroundImage: {
    resizeMode: 'contain'
  },
  modalButtons: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    marginLeft: 10,
    marginTop: 65,
    width: '100%'
  },
  modalButton: {
    width: 130
  },
  modalButtonImage: {
    height: 45,
    width: 120
  },
  levelModalButtons: {
    marginLeft: 5
  },
  ascendModalButtons: {
    marginLeft: 0
  },
  paddedBackground: {
    padding: 2.5
  },
  loginScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 80
  },
  loginError: {
    color: 'red'
  },
  loginForm: {
    borderRadius: 4,
    height: 40,
    width: '67%'
  },
  loginInput: {
    backgroundColor: 'white',
    color: 'dimgrey',
    fontSize: fontSize(18),
    fontWeight: '400',
    marginBottom: 7,
    padding: 10
  },
  nameInput: {

  },
  passwordInput: {

  },
  signInButton: {
    justifyContent: 'center',
    backgroundColor: 'gold',
    borderRadius: 4,
  },
  signInButtonText: {
    color: 'white',
    fontSize: fontSize(20),
    fontWeight: '600',
    textAlign: 'center'
  },
  homePage: {
    flexDirection: 'column'
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
  },
  ascend: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
  ascendImage: {
    height: 150,
    width: 150
  },
  levelUp: {
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
  levelUpImage: {
    height: 150,
    width: 150
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
  },
  transmutationContainer: {
    height: 120,
    width: 120,
    zIndex: 4
  },
  transmutation: {
    height: '100%',
    width: '100%'
  },
  mindTransmutationTree: {
    alignItems: 'flex-end',
    flexDirection: 'row',
    height: '90%',
    justifyContent: 'space-between'
  },
  bodyTransmutationTree: {
    alignItems: 'center',
    height: '90%',
    justifyContent: 'space-between'
  },
  transmutationRow: {
    flexDirection: 'row'
  },
  transmutationRow1: {

  },
  transmutationRow1: {

  },
  transmutationRow1: {

  },
  transmutationRow1: {

  },
  transmutationRow1: {

  },
  transmutationRow1: {

  },
  homeButtonContainer: {
    height: '10%'
  },
  homeButton: {
    left: 15,
    position: 'absolute'
  },
  homeButtonImage: {
    height: 80,
    width: 80
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

  },
  transmutationPage: {
    paddingBottom: 0,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: Platform.OS === 'ios' ? 20 : 15
  },
  transmutationPageBackground: {

  },
  transmutationHeader: {

  },
  transmutationTop: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  backButton: {
    height: 37,
    width: 51
  },
  backButtonImage: {
    height: '100%',
    width: '100%'
  },
  transmutationMana: {
    color: 'rgba(0,195,255,1)',
    fontSize: fontSize(32),
    fontWeight: '600',
    textShadowColor: 'black',
    textShadowOffset: {width: -1, height: 3},
    textShadowRadius: 1
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
  },
  transmutationInstructions: {
    color: 'black',
    fontSize: fontSize(32) - (Platform.OS === 'ios' ? 3 : 0),
    textAlign: 'center'
  },
  transmute: {
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10
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
  transmutationText: {
    color: 'black',
    fontSize: fontSize(20)
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
  },
  referencesSection: {
    marginTop: 10,
    paddingBottom: 10
  },
  referencesHeader: {
    color: 'black',
    fontSize: fontSize(36)
  }
});

const ICONS = {
  Gratitude: {
    READY: require('../assets/images/mind/ready/gratitude.png'),
    COMPLETE: require('../assets/images/mind/complete/gratitude.png')
  },
  Connect: {
    LOCKED: require('../assets/images/mind/locked/connect.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/connect.png'),
    READY: require('../assets/images/mind/ready/connect.png'),
    COMPLETE: require('../assets/images/mind/complete/connect.png')
  },
  Values: {
    LOCKED: require('../assets/images/mind/locked/values.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/values.png'),
    READY: require('../assets/images/mind/ready/values.png'),
    COMPLETE: require('../assets/images/mind/complete/values.png')
  },
  Affirmations: {
    LOCKED: require('../assets/images/mind/locked/affirmations.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/affirmations.png'),
    READY: require('../assets/images/mind/ready/affirmations.png'),
    COMPLETE: require('../assets/images/mind/complete/affirmations.png')
  },
  Reading: {
    LOCKED: require('../assets/images/mind/locked/reading.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/reading.png'),
    READY: require('../assets/images/mind/ready/reading.png'),
    COMPLETE: require('../assets/images/mind/complete/reading.png')
  },
  Passion: {
    LOCKED: require('../assets/images/mind/locked/passion.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/passion.png'),
    READY: require('../assets/images/mind/ready/passion.png'),
    COMPLETE: require('../assets/images/mind/complete/passion.png')
  },
  Mindfulness: {
    LOCKED: require('../assets/images/mind/locked/mindfulness.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/mindfulness.png'),
    READY: require('../assets/images/mind/ready/mindfulness.png'),
    COMPLETE: require('../assets/images/mind/complete/mindfulness.png')
  },
  Visualization: {
    LOCKED: require('../assets/images/mind/locked/visualization.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/visualization.png'),
    READY: require('../assets/images/mind/ready/visualization.png'),
    COMPLETE: require('../assets/images/mind/complete/visualization.png')
  },
  Meditation: {
    LOCKED: require('../assets/images/mind/locked/meditation.png'),
    UNLOCKABLE: require('../assets/images/mind/unlockable/meditation.png'),
    READY: require('../assets/images/mind/ready/meditation.png'),
    COMPLETE: require('../assets/images/mind/complete/meditation.png')
  },
  Hydration: {
    READY: require('../assets/images/body/ready/hydration.png'),
    COMPLETE: require('../assets/images/body/complete/hydration.png')
  },
  Sleep: {
    LOCKED: require('../assets/images/body/locked/sleep.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/sleep.png'),
    READY: require('../assets/images/body/ready/sleep.png'),
    COMPLETE: require('../assets/images/body/complete/sleep.png')
  },
  Supplement: {
    LOCKED: require('../assets/images/body/locked/supplement.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/supplement.png'),
    READY: require('../assets/images/body/ready/supplement.png'),
    COMPLETE: require('../assets/images/body/complete/supplement.png')
  },
  Fitness: {
    LOCKED: require('../assets/images/body/locked/fitness.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/fitness.png'),
    READY: require('../assets/images/body/ready/fitness.png'),
    COMPLETE: require('../assets/images/body/complete/fitness.png')
  },
  Nature: {
    LOCKED: require('../assets/images/body/locked/nature.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/nature.png'),
    READY: require('../assets/images/body/ready/nature.png'),
    COMPLETE: require('../assets/images/body/complete/nature.png')
  },
  Sunlight: {
    LOCKED: require('../assets/images/body/locked/sunlight.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/sunlight.png'),
    READY: require('../assets/images/body/ready/sunlight.png'),
    COMPLETE: require('../assets/images/body/complete/sunlight.png')
  },
  'Good Food': {
    LOCKED: require('../assets/images/body/locked/good-food.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/good-food.png'),
    READY: require('../assets/images/body/ready/good-food.png'),
    COMPLETE: require('../assets/images/body/complete/good-food.png')
  },
  'Junk Food': {
    LOCKED: require('../assets/images/body/locked/junk-food.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/junk-food.png'),
    READY: require('../assets/images/body/ready/junk-food.png'),
    COMPLETE: require('../assets/images/body/complete/junk-food.png')
  },
  Yoga: {
    LOCKED: require('../assets/images/body/locked/yoga.png'),
    UNLOCKABLE: require('../assets/images/body/unlockable/yoga.png'),
    READY: require('../assets/images/body/ready/yoga.png'),
    COMPLETE: require('../assets/images/body/complete/yoga.png')
  }
}

let backgroundMusic;

export default class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      displayLoginError: false,
      screen: 'Login',
      signedIn: false,
      levelingUp: false,
      unlocking: false,
      transmuting: false,
      transmutationCategory: 0,
      bodyUnlock: false,
      mindUnlock: false
    };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
    this.fetchAlchemist = this.fetchAlchemist.bind(this);
    this.fetchTransmutations = this.fetchTransmutations.bind(this);
    this.fetchTransmutation = this.fetchTransmutation.bind(this);
    this.openMindTransmutations = this.openMindTransmutations.bind(this);
    this.openBodyTransmutations = this.openBodyTransmutations.bind(this);
    this.openTransmutation = this.openTransmutation.bind(this);
    this.openHome = this.openHome.bind(this);
    this.openTips = this.openTips.bind(this);
    this.openMore = this.openMore.bind(this);
    this.returnToTransmutations = this.returnToTransmutations.bind(this);
    this.goBack = this.goBack.bind(this);
    this.levelUp = this.levelUp.bind(this);
    this.transmute = this.transmute.bind(this);
    this.unlock = this.unlock.bind(this);
    this.onPageChange = this.onPageChange.bind(this);
  }

  componentDidMount() {
    loopSound('login', 'mp3');

    this.retrieveLogin();
  }

  async retrieveLogin() {
    try {
      const email = await AsyncStorage.getItem('@Alchemy:email');
      const password = await AsyncStorage.getItem('@Alchemy:password');

      this.setState({email, password});
    } catch (error) {

    }
  }

  async storeLogin(email, password) {
    try {
      await AsyncStorage.setItem('@Alchemy:email', email);
      await AsyncStorage.setItem('@Alchemy:password', password);
    } catch (error) {

    }
  }

  handleEmailChange(email) {
    this.setState({email});
  }

  handlePasswordChange(password) {
    this.setState({password});
  }

  handleSignIn() {
    const {email, password} = this.state;

    fetch('http://alchemy-api.herokuapp.com/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email, password})
    }).then(response => response.json())
      .then(json => {
        if (!json.auth_token) {
          playSound('login_incorrect');

          this.setState({displayLoginError: true});

          return;
        }

        playSound('login_correct');

        this.setState({
          authToken: json.auth_token,
          displayLoginError: false
        });

        this.fetchAlchemist().then(() => {
          loopSound('home');

          this.setState({
            previousScreen: this.state.screen,
            screen: 'Home',
            signedIn: true
          });
        });

        this.storeLogin(email, password);
      });
  }

  fetchAlchemist() {
    return (
      fetch('http://alchemy-api.herokuapp.com/api/me', {
        method: 'GET',
        headers: {
          'Authorization': this.state.authToken,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(alchemist => {
          this.setState({
            alchemistFetched: true,
            rank: normalizeRank(alchemist.rank),
            level: alchemist.level,
            mana: alchemist.mana,
            mindUnlock: alchemist.mind_unlock,
            bodyUnlock: alchemist.body_unlock
          });
        })
    );
  }

  fetchTransmutations() {
    const authToken = this.state.authToken;

    return Promise.all([
      fetch('http://alchemy-api.herokuapp.com/api/transmutations/mind', {
        method: 'GET',
        headers: {
          'Authorization': authToken,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json()),
      fetch('http://alchemy-api.herokuapp.com/api/transmutations/body', {
        method: 'GET',
        headers: {
          'Authorization': authToken,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
    ]).then(([mind, body]) => this.setState(Object.assign({}, mind, body)));
  }

  fetchTransmutation(name) {
    return (
      fetch(`http://alchemy-api.herokuapp.com/api/transmutations/${name}`, {
        method: 'GET',
        headers: {
          'Authorization': this.state.authToken,
          'Content-Type': 'application/json'
        }
      }).then(response => response.json())
        .then(json => this.setState({transmutation: json}))
    );
  }

  openMindTransmutations() {
    this.fetchTransmutations()
      .then(() => {
        loopSound('transmutations');

        this.setState({
          transmutationCategory: 0,
          previousScreen: this.state.screen,
          screen: 'Transmutations'
        });
      });
  }

  openBodyTransmutations() {
    this.fetchTransmutations()
      .then(() => {
        loopSound('transmutations');

        this.setState({
          transmutationCategory: 1,
          previousScreen: this.state.screen,
          screen: 'Transmutations'
        });
      });
  }

  openTransmutation(name) {
    playSound('open_transmutation');

    this.fetchTransmutation(name)
      .then(() => {
        this.setState({
          transmutationCategory: categoryFor(name),
          previousScreen: this.state.screen,
          screen: 'Transmutation'
        });
      });
  }

  openHome() {
    playSound('button_home');

    loopSound('home');

    this.setState({previousScreen: this.state.screen, screen: 'Home'});
  }

  openTips() {
    playSound('button_tips');

    this.setState({previousScreen: this.state.screen, screen: 'Tips'});
  }

  openMore() {
    playSound('button_more');

    this.setState({previousScreen: this.state.screen, screen: 'More'});
  }

  returnToTransmutations() {
    playSound('button_back');

    this.setState({
      previousScreen: this.state.screen,
      screen: 'Transmutations'
    });
  }

  goBack() {
    playSound('button_back');

    this.setState({
      previousScreen: this.state.screen,
      screen: this.state.previousScreen
    });
  }

  unlock(transmutation) {
    this.setState({unlocking: true});

    return fetch(`http://alchemy-api.herokuapp.com/api/transmutations/${
      transmutation
    }/unlock`, {
      method: 'PUT',
      headers: {
        'Authorization': this.state.authToken,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        const currentCategory = this.state.transmutationCategory;
        const unlockCategory = currentCategory ? 'bodyUnlock' : 'mindUnlock';
        const firstUnlock = this.state.mindUnlock && this.state.bodyUnlock;
        const nextCategory = firstUnlock
          ? 1 - currentCategory
          : currentCategory;

        playSound(`unlock_${idFor(transmutation)}`, 'mp3');

        this.fetchTransmutations()
          .then(() => {
            this.setState({
              [transmutation]: 'READY',
              [unlockCategory]: false,
              unlocking: false,
              transmutationCategory: nextCategory,
              previousScreen: this.state.screen,
              screen: 'Transmutations'
            });
          });
      });
  }

  transmute(transmutation) {
    this.setState({transmuting: true});

    return fetch(`http://alchemy-api.herokuapp.com/api/transmutations/${
      transmutation
    }/transmute`, {
      method: 'PUT',
      headers: {
        'Authorization': this.state.authToken,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        playSound(`transmute_${idFor(transmutation)}`, 'mp3');

        this.setState({mana: json.mana, [transmutation]: 'COMPLETE'});
      });
  }

  levelUp(ascending) {
    this.setState({levelingUp: true});

    return fetch('http://alchemy-api.herokuapp.com/api/me/transcend', {
      method: 'POST',
      headers: {
        'Authorization': this.state.authToken,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(alchemist => {
        playSound(ascending ? 'ascend_accept' : 'level_up_accept', 'mp3');

        this.setState({
          rank: normalizeRank(alchemist.rank),
          level: alchemist.level,
          mana: alchemist.mana,
          mindUnlock: alchemist.mind_unlock,
          bodyUnlock: alchemist.body_unlock
        });

        this.fetchTransmutations()
          .then(() => this.setState({levelingUp: false}));
      });
  }

  onPageChange(bodyTransmutations) {
    if (bodyTransmutations) {
      playSound('turn_right_to_body');
    } else {
      playSound('turn_left_to_mind');
    }
  }

  render() {
    if (!this.state.signedIn) {


      return (
        <LoginScreen
          email={this.state.email}
          password={this.state.password}
          displayLoginError={this.state.displayLoginError}
          onChangeEmail={this.handleEmailChange}
          onChangePassword={this.handlePasswordChange}
          onSignIn={this.handleSignIn}
        />
      );
    }

    const {
      rank,
      level,
      mana,
      screen,
      mindUnlock,
      bodyUnlock,
      Gratitude,
      Connect,
      Values,
      Affirmations,
      Reading,
      Passion,
      Mindfulness,
      Visualization,
      Meditation,
      Hydration,
      Sleep,
      Supplement,
      Fitness,
      Nature,
      Sunlight,
      Yoga,
      transmutation,
      transmutationCategory
    } = this.state;

    const isUnlocking = mindUnlock || bodyUnlock;

    if (screen === 'Transmutations' ) {
      return (
        <Transmutations
          rank={rank}
          level={level}
          mana={mana}
          onLevelUp={this.levelUp}
          onPageChange={this.onPageChange}
          onHomePress={this.openHome}
          onTransmutationPress={this.openTransmutation}
          category={transmutationCategory}
          isUnlocking={isUnlocking}
          gratitudeStatus={Gratitude}
          connectStatus={Connect}
          valuesStatus={Values}
          affirmationsStatus={Affirmations}
          readingStatus={Reading}
          passionStatus={Passion}
          mindfulnessStatus={Mindfulness}
          visualizationStatus={Visualization}
          meditationStatus={Meditation}
          hydrationStatus={Hydration}
          sleepStatus={Sleep}
          supplementStatus={Supplement}
          fitnessStatus={Fitness}
          natureStatus={Nature}
          sunlightStatus={Sunlight}
          goodFoodStatus={this.state['Good Food']}
          junkFoodStatus={this.state['Junk Food']}
          yogaStatus={Yoga}
        />
      );
    }

    if (screen === 'Transmutation') {
      const name = transmutation.name;
      const status = this.state[name];

      return (
        <TransmutationPage
          transmutation={transmutation}
          status={status}
          icon={ICONS[name][status]}
          isUnlocking={isUnlocking}
          onTransmutations={this.returnToTransmutations}
          onUnlock={this.unlock}
          onTransmute={this.transmute}
          openTips={this.openTips}
          openMore={this.openMore}
        />
      );
    }

    if (screen === 'Tips') {
      const name = transmutation.name;

      return (
        <Tips
          icon={ICONS[name][this.state[name]]}
          tips={transmutation.tips}
          onBack={this.goBack}
        />
      );
    }

    if (screen === 'More') {
      const name = transmutation.name;

      return (
        <More
          icon={ICONS[name][this.state[name]]}
          content={transmutation.more}
          references={transmutation.references}
          onBack={this.goBack}
        />
      );
    }

    return (
      <HomePage
        alchemistFetched={this.state.alchemistFetched}
        rank={rank}
        level={level}
        mana={mana}
        isUnlocking={isUnlocking}
        onLevelUp={this.levelUp}
        openMindTransmutations={this.openMindTransmutations}
        openBodyTransmutations={this.openBodyTransmutations}
      />
    );
  }
}

const LoginError = ({display}) => {
  if (!display) return null;

  return <Text style={styles.loginError}>Invalid credentials</Text>;
};

const LoginScreen = ({
  email,
  password,
  displayLoginError,
  onChangeEmail,
  onChangePassword,
  onSignIn
}) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('../assets/images/login.png')}
    >
      <View style={styles.loginScreen}>
        <LoginError display={displayLoginError} />
        <TextInput
          style={[
            styles.loginForm,
            styles.loginInput,
            styles.emailInput
          ]}
          value={email}
          onChangeText={onChangeEmail}
        />
        <TextInput
          style={[
            styles.loginForm,
            styles.loginInput,
            styles.passwordInput
          ]}
          value={password}
          secureTextEntry={true}
          onChangeText={onChangePassword}
        />
        <TouchableOpacity
          style={[styles.loginForm, styles.signInButton]}
          onPress={onSignIn}
        >
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const HomePage = ({
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

const Transmutations = ({
  rank,
  level,
  mana,
  onLevelUp,
  onPageChange,
  onHomePress,
  onTransmutationPress,
  category,
  isUnlocking,
  gratitudeStatus,
  connectStatus,
  valuesStatus,
  affirmationsStatus,
  readingStatus,
  passionStatus,
  mindfulnessStatus,
  visualizationStatus,
  meditationStatus,
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
    <Swiper
      loop={false}
      showsButtons={false}
      index={category}
      onIndexChanged={onPageChange}
    >
      <MindTransmutations
        rank={rank}
        level={level}
        mana={mana}
        onLevelUp={onLevelUp}
        onHomePress={onHomePress}
        onTransmutationPress={onTransmutationPress}
        isUnlocking={isUnlocking}
        gratitudeStatus={gratitudeStatus}
        connectStatus={connectStatus}
        valuesStatus={valuesStatus}
        affirmationsStatus={affirmationsStatus}
        readingStatus={readingStatus}
        passionStatus={passionStatus}
        mindfulnessStatus={mindfulnessStatus}
        visualizationStatus={visualizationStatus}
        meditationStatus={meditationStatus}
      />
      <BodyTransmutations
        rank={rank}
        level={level}
        mana={mana}
        onLevelUp={onLevelUp}
        onHomePress={onHomePress}
        onTransmutationPress={onTransmutationPress}
        isUnlocking={isUnlocking}
        hydrationStatus={hydrationStatus}
        sleepStatus={sleepStatus}
        supplementStatus={supplementStatus}
        fitnessStatus={fitnessStatus}
        natureStatus={natureStatus}
        sunlightStatus={sunlightStatus}
        goodFoodStatus={goodFoodStatus}
        junkFoodStatus={junkFoodStatus}
        yogaStatus={yogaStatus}
      />
    </Swiper>
  );
};

const MindTransmutations = ({
  rank,
  level,
  mana,
  onLevelUp,
  onHomePress,
  onTransmutationPress,
  isUnlocking,
  gratitudeStatus,
  connectStatus,
  valuesStatus,
  affirmationsStatus,
  readingStatus,
  passionStatus,
  mindfulnessStatus,
  visualizationStatus,
  meditationStatus
}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/mind/blank-transmutations.png')}
        style={[styles.backgroundImage, styles.paddedBackground]}
      >
        <AlchemistDisplay
          rank={rank}
          level={level}
          mana={mana}
          isUnlocking={isUnlocking}
          onLevelUp={onLevelUp}
        />
        <View style={styles.mindTransmutationTree}>
          <View style={[
            styles.transmutationColumn,
            styles.transmutationColumn1
          ]}>
            <Transmutation
              name={'Reading'}
              status={readingStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Connect'}
              status={connectStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={[
            styles.transmutationColumn,
            styles.transmutationColumn2
          ]}>
            <Transmutation
              name={'Meditation'}
              status={meditationStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Mindfulness'}
              status={mindfulnessStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Visualization'}
              status={visualizationStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Affirmations'}
              status={affirmationsStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Gratitude'}
              status={gratitudeStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={[
            styles.transmutationColumn,
            styles.transmutationColumn3
          ]}>
            <Transmutation
              name={'Passion'}
              status={passionStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Values'}
              status={valuesStatus}
              onPress={onTransmutationPress}
            />
          </View>
        </View>
        <HomeButton onPress={onHomePress} />
      </ImageBackground>
    </View>
  );
};

const BodyTransmutations = ({
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
        style={[styles.backgroundImage, styles.paddedBackground]}
      >
        <AlchemistDisplay
          rank={rank}
          level={level}
          mana={mana}
          isUnlocking={isUnlocking}
          onLevelUp={onLevelUp}
        />
        <View style={styles.bodyTransmutationTree}>
          <View style={[styles.transmutationRow, styles.transmutationRow1]}>
            <Transmutation
              name={'Yoga'}
              status={yogaStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={[styles.transmutationRow, styles.transmutationRow2]}>
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
          <View style={[styles.transmutationRow, styles.transmutationRow3]}>
             <Transmutation
               name={'Fitness'}
               status={fitnessStatus}
               onPress={onTransmutationPress}
            />
          </View>
          <View style={[styles.transmutationRow, styles.transmutationRow4]}>
            <Transmutation
              name={'Sunlight'}
              status={sunlightStatus}
              onPress={onTransmutationPress}
            />
            <Transmutation
              name={'Nature'}
              status={natureStatus}
              onPress={onTransmutationPress}
            />
          </View>
          <View style={[styles.transmutationRow, styles.transmutationRow5]}>
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
          <View style={[styles.transmutationRow, styles.transmutationRow6]}>
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

class Transmutation extends React.PureComponent {
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

class TransmutationPage extends React.Component {
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
        <Text style={styles.transmutationText}>
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

class TransmutationTemplate extends React.PureComponent {
  render() {
    const {onBack, title, icon, headerContent, children } = this.props;

    return (
      <View style={styles.transmutationTemplate}>
        <ImageBackground
          source={require('../assets/images/transmutation/background.png')}
          style={[styles.backgroundImage, styles.transmutationPage]}
          imageStyle={styles.transmutationPageBackground}
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

const Tips = ({icon, tips, onBack}) => {
  return (
    <TransmutationTemplate
      onBack={onBack}
      title={'Tips'}
      icon={icon}
    >
      <Text style={styles.transmutationText}>{tips}</Text>
    </TransmutationTemplate>
  );
};

const More = ({icon, content, references, onBack}) => {
  return (
    <TransmutationTemplate
      onBack={onBack}
      title={'More...'}
      icon={icon}
    >
      <Text style={styles.transmutationText}>{content}</Text>
      <View style={styles.referencesSection}>
        <Text style={styles.referencesHeader}>References</Text>
        <Text style={styles.transmutationText}>{references}</Text>
      </View>
    </TransmutationTemplate>
  );
};

class TransmutationHeader extends React.PureComponent {
  render() {
    return (
      <View style={styles.transmutationHeader}>
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



class AlchemistDisplay extends React.PureComponent {
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

  get manaForLevel() {
    return manaFor(this.props.level, this.props.rank);
  }

  get ascendAvailable() {
    const {level, rank} = this.props;

    return this.levelUpAvailable && level === 10 && rank !== 'Alchemist';
  }

  get levelUpAvailable() {
    const {mana, isUnlocking} = this.props;
    const manaForLevel = this.manaForLevel;

    return !isUnlocking && manaForLevel && mana >= manaForLevel;
  }

  get Transcend() {
    if (this.ascendAvailable) return <Ascend onAscend={this.handleAscend} />;

    if (this.levelUpAvailable) {
      return <LevelUp onLevelUp={this.handleLevelUp} />;
    }

    return <View />;
  }

  get AscendResult() {
    if (this.props.rank === 'Acolyte') {
      return (
        <ImageBackground
          source={
            require('../assets/images/ascend/acolyte.png')
          }
          style={styles.modalBackground}
          imageStyle={styles.modalBackgroundImage}
        />
      );
    }

    return (
      <ImageBackground
        source={
          require('../assets/images/ascend/alchemist.png')
        }
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
    const {level, mana, rank} = this.props;
    const manaForLevel = this.manaForLevel;

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
            source={
              require('../assets/images/level/window.png')
            }
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
                  source={require('../assets/images/level/no-button.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.handleLevelUpConfirm}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('../assets/images/level/yes-button.png')}
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
            source={
              require('../assets/images/level/result.png')
            }
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
            source={
              require('../assets/images/ascend/window.png')
            }
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
                  source={require('../assets/images/ascend/wait-button.png')}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={this.handleAscendConfirm}
              >
                <Image
                  style={styles.modalButtonImage}
                  source={require('../assets/images/ascend/ready-button.png')}
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

class LevelUp extends React.PureComponent {
  componentDidMount() {
    playSound('level_up_alert');
  }

  render() {
    return (
      <TouchableOpacity style={styles.levelUp} onPress={this.props.onLevelUp}>
        <Image
          style={styles.levelUpImage}
          source={require('../assets/images/level-up.png')}
        />
      </TouchableOpacity>
    );
  }
}

class Ascend extends React.PureComponent {
  componentDidMount() {
    playSound('ascend_alert', 'mp3');
  }

  render() {
    return (
      <TouchableOpacity style={styles.ascend} onPress={this.props.onAscend}>
        <Image
          style={styles.ascendImage}
          source={require('../assets/images/ascend.png')}
        />
      </TouchableOpacity>
    );
  }
}

const HomeButton = ({onPress}) => {
  return (
    <View style={styles.homeButtonContainer}>
      <TouchableOpacity style={styles.homeButton} onPress={onPress}>
        <Image
          style={styles.homeButtonImage}
          source={require('../assets/images/home-button.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

const BackButton = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.backButton} onPress={onPress}>
      <Image
        style={[styles.backButtonImage]}
        source={require('../assets/images/transmutation/back-button.png')}
      />
    </TouchableOpacity>
  );
};

function categoryFor(transmutation) {
  switch (transmutation) {
    case 'Gratitude':
    case 'Connect':
    case 'Values':
    case 'Affirmations':
    case 'Reading':
    case 'Passion':
    case 'Mindfulness':
    case 'Visualization':
    case 'Meditation':
      return 0;
    case 'Hydration':
    case 'Sleep':
    case 'Supplement':
    case 'Fitness':
    case 'Nature':
    case 'Sunlight':
    case 'Good Food':
    case 'Junk Food':
    case 'Yoga':
      return 1;
  }
}

function idFor(transmutation) {
  if (transmutation === 'Good Food') return 'goodfood';
  if (transmutation === 'Junk Food') return 'junkfood';

  return transmutation.toLowerCase();
}

function manaFor(level, rank) {
  if (rank === 'Alchemist' && level === 11) return 0;

  return level * 10;
}

function normalizeRank(rank) {
  switch (rank) {
    case 'alchemist': return 'Alchemist';
    case 'acolyte': return 'Acolyte';
    default: return 'Apprentice';
  }
}

function playSound(file, extension = 'wav') {
  const sound = new Sound(
    `${file}.${extension}`,
    Sound.MAIN_BUNDLE,
    error => sound.play(() => sound.release())
  );
}

function loopSound(file, extension = 'wav') {
  if (backgroundMusic) backgroundMusic.stop().release();

  backgroundMusic = new Sound(
    `${file}.${extension}`,
    Sound.MAIN_BUNDLE,
    error => backgroundMusic.setNumberOfLoops(-1).play()
  );
}
