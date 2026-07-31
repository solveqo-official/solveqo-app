import { useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Screen } from '@/components/ui';
import { colors, radius, spacing, typography } from '@/theme';

export default function RequestSuccessScreen() {
  const router = useRouter();

  return (
    <Screen
      scroll={false}
      contentContainerStyle={styles.content}
      footer={<Button title="Back to home" onPress={() => router.replace('/(tabs)')} />}
    >
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>✓</Text>
      </View>
      <Text style={styles.title}>Request published</Text>
      <Text style={styles.body}>
        Professionals nearby can now view your request and send you price offers.
      </Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    gap: spacing.md,
  },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.md,
  },
  icon: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
  },
  title: {
    ...typography.heading1,
    letterSpacing: -0.5,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  body: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 320,
  },
});
