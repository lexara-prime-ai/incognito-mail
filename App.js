import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyle.text}>Incognito Mail</Text>
      <Text>A lightweight Mailing App...</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 1000,
    letterSpacing: 3,
  },
});

const textStyle = StyleSheet.create({
  text: {
    fontSize: 56,
  },
});