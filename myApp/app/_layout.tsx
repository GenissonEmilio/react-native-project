import { Stack } from 'expo-router';
import { Text, StyleSheet, View } from 'react-native';

export default function Layout() {
  return (
    <Stack screenOptions={{
      headerStyle: { backgroundColor: '#f4511e' },
      headerTintColor: '#fff',
      
    }}>
      {/* Main Content */}
      <Stack.Screen name="index" options={{ title: 'Home' }} />
      <Stack.Screen name="about" options={{ title: 'About' }} />
      <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />

    </Stack>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
  },
});

