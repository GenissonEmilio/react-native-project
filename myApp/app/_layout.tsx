import { Stack } from 'expo-router';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar';

export default function Layout() {
  const colorScheme = useColorScheme() ?? 'light';
  const theme = Colors[colorScheme];

  return (
    <>
      <StatusBar style="auto" />
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        
      }}>
        {/* Main Content */}
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact' }} />

      </Stack>
    </>
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

