import React from 'react';
import { StyleSheet, View } from 'react-native';

import Header from './components/Header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
