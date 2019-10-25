import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = props => {
  return (
    <View style={styles.header}>
      <Text>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;