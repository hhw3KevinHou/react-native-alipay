import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainEntry from './src/components/android/Entry';


export default class App extends React.Component {
  render() {
    return (
        <MainEntry/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
