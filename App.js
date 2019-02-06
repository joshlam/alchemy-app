import React from 'react';
import { StyleSheet, View } from 'react-native';

import Screen from './screens/Screen';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Screen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  }
});
