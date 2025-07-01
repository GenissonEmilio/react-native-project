import React, { JSX } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Contact(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Building the Contact page</Text>

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