import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Card = props => {};

const styles = StyleSheet.create({
  card: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 7,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10
  }
});

export default Card;