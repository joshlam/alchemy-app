import React from 'react';
import {
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

import { fontSize } from 'src/lib/sizes';
import withSharedStyles from 'src/lib/styles';

const styles = withSharedStyles({
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
  usernameInput: {

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
  }
});

const LoginError = ({display}) => {
  if (!display) return null;

  return <Text style={styles.loginError}>Invalid credentials</Text>;
};

export default ({
  username,
  password,
  displayLoginError,
  onChangeUsername,
  onChangePassword,
  onSignIn
}) => {
  return (
    <ImageBackground
      style={styles.backgroundImage}
      source={require('src/images/login.png')}
    >
      <View style={styles.loginScreen}>
        <LoginError display={displayLoginError} />
        <TextInput
          style={[
            styles.loginForm,
            styles.loginInput,
            styles.usernameInput
          ]}
          value={username}
          onChangeText={onChangeUsername}
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
