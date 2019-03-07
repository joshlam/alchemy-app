import React from 'react';
import { AppState, StatusBar, StyleSheet, View } from 'react-native';

import Screen from 'src/screens/Screen';
import { pauseSound, resumeSound } from 'src/services/sound';

const white = '#fff';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1
  }
});

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {appState: AppState.currentState};

    this.handleAppStateChange = this.handleAppStateChange.bind(this);
  }

  componentDidMount() {
    AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this.handleAppStateChange);
  }

  handleAppStateChange(nextAppState) {
    const appState = this.state.appState;

    if (appState.match(/inactive|background/) && nextAppState === 'active') {
      resumeSound();
    }

    if (appState === 'active' && nextAppState.match(/inactive|background/)) {
      pauseSound();
    }

    this.setState({appState: nextAppState});
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Screen />
      </View>
    );
  }
}
