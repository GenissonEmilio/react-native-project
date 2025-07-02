import React, { JSX } from 'react';
import { View, Text, StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'

export default function About(): JSX.Element {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={[styles.title, { color: theme.text }]}>Building the About page</Text>

      <Text style={{ marginTop: 10, justifyContent: 'center', textAlign: 'center' }}>
        This is the page that contains information about the application.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color: '#0000EE',
  }
});