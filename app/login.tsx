import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { SolveqoLogo } from '@/components/SolveqoLogo';
import { Button, Input, Screen } from '@/components/ui';
import { colors, spacing, typography } from '@/theme';

export default function LoginScreen() {
  const router = useRouter();

  return (
    <Screen
      footer={<Button title="Log in" onPress={() => router.replace('/(tabs)')} />}
    >
      <SolveqoLogo size="medium" style={styles.logo} />
      <Text style={styles.title}>Log in</Text>
      <Text style={styles.subtitle}>Welcome back. Enter your details to continue.</Text>
      <View style={styles.form}>
        <Input label="Email" placeholder="you@example.com" keyboardType="email-address" autoCapitalize="none" />
        <Input label="Password" placeholder="Your password" secureTextEntry />
        <Text style={styles.note}>Mock login — no authentication yet.</Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  logo: {
    marginBottom: spacing.xl,
  },
  title: {
    ...typography.heading1,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.xl,
  },
  form: {
    gap: spacing.lg,
  },
  note: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});
