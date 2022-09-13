/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUpScreen from './src/screens/SignUpScreen';
import FirstScreen from './src/screens/FirstScreen';
import SignInScreen from './src/screens/SignInScreen';
import Navigation from './src/navigation';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */


const Stack = createNativeStackNavigator();
const App = () => {
  return (
  <SafeAreaView style={styles.root}>
    
    <Navigation/>
   
  </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  }
});

export default App;

