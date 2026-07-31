import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { FacebookConnectionProvider } from '@/context/FacebookConnectionContext';

export default function RootLayout() {
  return (
    <FacebookConnectionProvider>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </FacebookConnectionProvider>
  );
}
