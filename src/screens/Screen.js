import React from 'react';
import { AsyncStorage } from 'react-native';

import Home from './Home';
import Login from './Login';
import More from './More';
import Tips from './Tips';
import TransmutationPage from './TransmutationPage';
import Transmutations from './Transmutations';

import { idFor } from 'src/lib/helpers';
import { playSound, loopSound } from 'src/services/sound';
import ICONS from 'src/styles/icons';

export default class Screen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
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

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
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
      const username = await AsyncStorage.getItem('@Alchemy:username');
      const password = await AsyncStorage.getItem('@Alchemy:password');

      this.setState({username, password});
    } catch (error) {

    }
  }

  async storeLogin(username, password) {
    try {
      await AsyncStorage.setItem('@Alchemy:username', username);
      await AsyncStorage.setItem('@Alchemy:password', password);
    } catch (error) {

    }
  }

  handleUsernameChange(username) {
    this.setState({username});
  }

  handlePasswordChange(password) {
    this.setState({password});
  }

  handleSignIn() {
    const {username, password} = this.state;

    fetch('http://alchemy-api.herokuapp.com/api/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: username, password})
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

        this.storeLogin(username, password);
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
        <Login
          username={this.state.username}
          password={this.state.password}
          displayLoginError={this.state.displayLoginError}
          onChangeUsername={this.handleUsernameChange}
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
          isYoga={name === 'Yoga'}
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
      <Home
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

function normalizeRank(rank) {
  switch (rank) {
    case 'alchemist': return 'Alchemist';
    case 'acolyte': return 'Acolyte';
    default: return 'Apprentice';
  }
}
