import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Game is Over!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    
  }
});

export default GameOverScreen;