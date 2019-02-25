import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import Screen from 'src/screens/Screen';

const white = '#fff';

const styles = StyleSheet.create({
  container: {
    backgroundColor: white,
    flex: 1
  }
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden />
        <Screen />
      </View>
    );
  }
}
