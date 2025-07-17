import { JSX } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';
import Logo from '../assets/icon.png';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Building the Home page</Text>

      <Text style={{ marginTop: 10}}>
        This is the home page of the application
      </Text>

      <Text style={{ marginTop: 10, justifyContent: 'center', textAlign: 'center' }}>
        You can navigate to the About and Contact pages using the links below.
      </Text>

      <Link href="/about" style={styles.link}>Go to the about page</Link>
      <Link href="/contact" style={styles.link}>Go to the contact page</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  img: {
    marginVertical: 20,
    width: 50,
    height: 50,
    backgroundColor: '#000000',
  },
  link: {
    marginVertical: 10,
    borderBottomWidth: 1,
    color: '#0000EE',
  },
});