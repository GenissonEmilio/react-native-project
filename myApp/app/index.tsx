import { JSX } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Logo from '../assets/icon.png';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.img} />

      <Text style={styles.title}>Construindo a página Home</Text>

      <Text style={{ marginTop: 10}}>
        Esta é a página inicial do aplicativo
      </Text>
      
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
});