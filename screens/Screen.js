import React from 'react';
import {
  Alert,
  Button,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Swiper from 'react-native-swiper';

const styles = StyleSheet.create({
  backgroundImage: {
    height: '100%',
    width: '100%'
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
    height: '6%',
    width: '67%'
  },
  loginInput: {
    backgroundColor: 'white',
    color: 'dimgrey',
    fontSize: 18,
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
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center'
  },
  homePage: {
    flexDirection: 'column'
  },
  alchemistDisplayContainer: {
    flexDirection: 'row',
    height: '15%',
    width: '100%',
    justifyContent: 'flex-end',
    marginTop: 10,
    position: 'absolute'
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
    fontSize: 24,
    textAlign: 'center'
  },
  manaBar: {
    marginTop: 5
  },
  manaText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left'
  },
  levelUp: {
    position: 'absolute',
    right: -27,
    top: 64,
    zIndex: 1000
  },
  levelUpImage: {
    height: 130,
    width: 130
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

  },
  transmutation: {
    height: 90,
    width: 90
  },
  transmutationTree: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90%'
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
  goodFood: {

  },
  junkFood: {

  },
  yoga: {

  },
  transmutationPage: {
    padding: 10
  },
  transmutationHeader: {
    height: 125
  },
  transmutationTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12
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
    fontSize: 32,
    fontWeight: '600',
    right: -15,
    textShadowColor: 'black',
    textShadowOffset: {width: 2, height: 3},
    textShadowRadius: 10,
    width: '28%'
  },
  transmutationTitle: {
    alignItems: 'center',
    marginTop: -24
  },
  transmutationTitleText: {
    fontSize: 54,
    fontWeight: '600',
    textAlign: 'center'
  },
  transmutationBody: {
    marginTop: 25
  },
  transmutationInstructions: {
    fontSize: 32,
    textAlign: 'center'
  },
  transmute: {
    alignItems: 'center',
    marginBottom: 25,
    marginTop: 20
  },
  transmuteButton: {
    height: 65,
    width: 200
  },
  effectsTitle: {
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    width: '32%'
  },
  effectsTitleText: {
    marginLeft: 5,
    fontSize: 42
  },
  transmutationText: {
    fontSize: 20
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
    width: '34%'
  },
  expandButtonImage: {
    height: 45,
    width: 120
  },
  referencesSection: {
    marginTop: 10
  },
  referencesHeader: {
    fontSize: 36
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

export default class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: 'joh641@gmail.com',
      password: 'testpass',
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
  }

  handleEmailChange(email) {
    this.setState({email});
  }

  handlePasswordChange(password) {
    this.setState({password});
  }

  handleSignIn() {
    fetch('http://alchemy-api.herokuapp.com/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password
      })
    }).then(response => response.json())
      .then(json => {
        if (!json.auth_token) {
          this.setState({displayLoginError: true});

          return;
        }

        this.setState({
          authToken: json.auth_token,
          displayLoginError: false
        });

        this.fetchAlchemist().then(() => {
          this.setState({
            previousScreen: this.state.screen,
            screen: 'Home',
            signedIn: true
          });
        });
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
        this.setState({
          transmutationCategory: 1,
          previousScreen: this.state.screen,
          screen: 'Transmutations'
        });
      });
  }

  openTransmutation(name) {
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
    this.setState({previousScreen: this.state.screen, screen: 'Home'});
  }

  openTips() {
    this.setState({previousScreen: this.state.screen, screen: 'Tips'});
  }

  openMore() {
    this.setState({previousScreen: this.state.screen, screen: 'More'});
  }

  returnToTransmutations() {
    this.setState({
      previousScreen: this.state.screen,
      screen: 'Transmutations'
    });
  }

  goBack() {
    this.setState({
      previousScreen: this.state.screen,
      screen: this.state.previousScreen
    });
  }

  unlock(transmutation) {
    this.setState({unlocking: true});

    fetch(`http://alchemy-api.herokuapp.com/api/transmutations/${
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

    fetch(`http://alchemy-api.herokuapp.com/api/transmutations/${
      transmutation
    }/transmute`, {
      method: 'PUT',
      headers: {
        'Authorization': this.state.authToken,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(json => {
        this.setState({mana: json.mana, [transmutation]: 'COMPLETE'});
      });
  }

  levelUp() {
    this.setState({levelingUp: true});

    fetch('http://alchemy-api.herokuapp.com/api/me/transcend', {
      method: 'POST',
      headers: {
        'Authorization': this.state.authToken,
        'Content-Type': 'application/json'
      }
    }).then(response => response.json())
      .then(alchemist => {
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
      return (
        <TransmutationPage
          transmutation={transmutation}
          status={this.state[transmutation.name]}
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
      return <Tips tips={transmutation.tips} onBack={this.goBack} />;
    }

    if (screen === 'More') {
      return (
        <More
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
    <Swiper loop={false} showsButtons={false} index={category}>
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
        <Transmutation
          name={'Gratitude'}
          status={gratitudeStatus}
          onPress={onTransmutationPress}
        />
        <Transmutation
          name={'Connect'}
          status={connectStatus}
          onPress={onTransmutationPress}
        />
        <Transmutation
          name={'Values'}
          status={valuesStatus}
          onPress={onTransmutationPress}
        />
        <Transmutation
          name={'Affirmations'}
          status={affirmationsStatus}
          onPress={onTransmutationPress}
        />
        <Transmutation
          name={'Reading'}
          status={readingStatus}
          onPress={onTransmutationPress}
        />
        <Transmutation
          name={'Passion'}
          status={passionStatus}
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
          name={'Meditation'}
          status={meditationStatus}
          onPress={onTransmutationPress}
        />
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
        <View style={styles.transmutationTree}>
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

class TransmutationPage extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleUnlock = this.handleUnlock.bind(this);
    this.handleTransmute = this.handleTransmute.bind(this);
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
    Alert.alert(
      'Unlock',
      'Ya sure?',
      [
         {text: 'Cancel', style: 'cancel'},
         {
          text: 'OK',
          onPress: () => this.props.onUnlock(this.props.transmutation.name)
        }
      ]
    );
  }

  handleTransmute() {
    Alert.alert(
      'Transmute',
      'Ya sure?',
      [
         {text: 'Cancel', style: 'cancel'},
         {
          text: 'OK',
          onPress: () => this.props.onTransmute(this.props.transmutation.name)
        }
      ]
    );
  }

  render() {
    const {
      transmutation,
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
        headerContent={mana}
      >
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
    const {onBack, title, headerContent, children } = this.props;

    return (
      <View>
        <ImageBackground
          source={require('../assets/images/transmutation/background.png')}
          style={[styles.backgroundImage, styles.transmutationPage]}
        >
          <TransmutationHeader onBack={onBack} title={title}>
            {headerContent}
          </TransmutationHeader>
          <View style={styles.transmutationBody}>{children}</View>
        </ImageBackground>
      </View>
    );
  }
}

const Tips = ({tips, onBack}) => {
  return (
    <TransmutationTemplate onBack={onBack} title={'Tips'}>
      <Text style={styles.transmutationText}>{tips}</Text>
    </TransmutationTemplate>
  );
};

const More = ({content, references, onBack}) => {
  return (
    <TransmutationTemplate onBack={onBack} title={'More...'}>
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

    this.handleLevelUp = this.handleLevelUp.bind(this);
  }

  handleLevelUp() {
    Alert.alert(
      'Level Up',
      'Ya sure?',
      [
         {text: 'Cancel', style: 'cancel'},
         {
          text: 'OK',
          onPress: this.props.onLevelUp
        }
      ]
    );
  }

  render() {
    const {level, mana, rank, isUnlocking} = this.props;
    const manaForLevel = manaFor(level, rank);

    return (
      <View style={styles.alchemistDisplayContainer}>
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
        {
          !isUnlocking && manaForLevel && mana >= manaForLevel &&
            <LevelUp onLevelUp={this.handleLevelUp} />
        }
      </View>
    );
  }
}

const LevelUp = ({onLevelUp}) => {
  return (
    <TouchableOpacity style={styles.levelUp} onPress={onLevelUp}>
      <Image
        style={styles.levelUpImage}
        source={require('../assets/images/level-up.png')}
      />
    </TouchableOpacity>
  );
};

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
  if (transmutation === 'Good Food') return 'goodFood';
  if (transmutation === 'Junk Food') return 'junkFood';

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
