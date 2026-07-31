import { useRouter } from 'expo-router';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SolveqoLogo } from '@/components/SolveqoLogo';
import { Button, Screen } from '@/components/ui';
import { colors, spacing, typography } from '@/theme';

export default function WelcomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWide = width >= 480;

  return (
    <Screen
      scroll={false}
      contentContainerStyle={[styles.content, isWide && styles.contentWide]}
      footer={
        <View style={styles.actions}>
          <Button title="Create account" onPress={() => router.push('/register/name')} />
          <Button title="Log in" variant="secondary" onPress={() => router.push('/login')} />
        </View>
      }
    >
      <View style={styles.hero}>
        <SolveqoLogo size="large" style={styles.logo} />
        <Text style={styles.headline}>Welcome to SOLVEQO</Text>
        <Text style={styles.subtitle}>
          Find trusted professionals.{'\n'}
          Offer your skills.{'\n'}
          Everything in one place.
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: spacing.xxl,
  },
  contentWide: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 440,
  },
  hero: {
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  logo: {
    marginBottom: spacing.lg,
  },
  headline: {
    fontSize: 34,
    fontWeight: '700',
    lineHeight: 40,
    letterSpacing: -0.6,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.body,
    fontSize: 17,
    lineHeight: 26,
    color: colors.textSecondary,
    marginTop: spacing.xs,
  },
  actions: {
    gap: spacing.sm,
  },
});
