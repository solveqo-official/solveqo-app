import { useRouter } from 'expo-router';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { ActionCard } from '@/components/ActionCard';
import { Button, Card, Screen } from '@/components/ui';
import { colors, spacing, typography } from '@/theme';

export default function HomeScreen() {
  const router = useRouter();
  const { width } = useWindowDimensions();
  const isWide = width >= 480;

  return (
    <Screen scroll contentContainerStyle={[styles.content, isWide && styles.contentWide]}>
      <View style={styles.topBar}>
        <View>
          <Text style={styles.greeting}>Good morning</Text>
          <Text style={styles.greetingSub}>What would you like to do?</Text>
        </View>
      </View>

      <View style={styles.actions}>
        <ActionCard
          emoji="📝"
          title="Create request"
          subtitle="Describe what you need help with."
          onPress={() => router.push('/(tabs)/create')}
        />
        <ActionCard
          emoji="🗺️"
          title="Find jobs"
          subtitle="Explore nearby work opportunities."
          onPress={() => router.push('/(tabs)/jobs')}
        />
      </View>

      <Card style={styles.activeRequest}>
        <Text style={styles.activeLabel}>Your active request</Text>
        <Text style={styles.activeTitle}>Leaking kitchen sink</Text>
        <Text style={styles.activeMeta}>3 offers received</Text>
        <Button
          title="View offers"
          variant="secondary"
          onPress={() => router.push('/offers/req-1')}
          style={styles.activeButton}
        />
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.xl,
  },
  contentWide: {
    alignSelf: 'center',
    width: '100%',
    maxWidth: 480,
  },
  topBar: {
    gap: spacing.xs,
  },
  greeting: {
    ...typography.heading2,
    color: colors.textPrimary,
  },
  greetingSub: {
    ...typography.body,
    color: colors.textSecondary,
  },
  actions: {
    gap: spacing.lg,
  },
  activeRequest: {
    gap: spacing.sm,
    borderRadius: 16,
  },
  activeLabel: {
    ...typography.caption,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    color: colors.primary,
  },
  activeTitle: {
    ...typography.heading3,
    color: colors.textPrimary,
  },
  activeMeta: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  activeButton: {
    marginTop: spacing.sm,
  },
});
