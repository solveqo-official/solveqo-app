import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useFacebookConnection } from '@/context/FacebookConnectionContext';
import { Button, Card } from '@/components/ui';
import { colors, radius, spacing, typography } from '@/theme';

type FacebookConnectProps = {
  compact?: boolean;
};

export function FacebookConnect({ compact = false }: FacebookConnectProps) {
  const { connected, connect, disconnect } = useFacebookConnection();

  if (connected) {
    return (
      <Card style={[styles.card, compact && styles.cardCompact]}>
        <View style={styles.connectedRow}>
          <View style={styles.fbIconConnected}>
            <Text style={styles.fbLetter}>f</Text>
          </View>
          <View style={styles.connectedInfo}>
            <Text style={styles.connectedTitle}>Facebook connected</Text>
            <Text style={styles.connectedSubtitle}>
              See friends on SOLVEQO, follow them, and view their public profiles.
            </Text>
          </View>
          <Ionicons name="checkmark-circle" size={22} color={colors.success} />
        </View>
        {!compact ? (
          <Button title="Disconnect" variant="text" onPress={disconnect} />
        ) : null}
      </Card>
    );
  }

  return (
    <Card style={[styles.card, compact && styles.cardCompact]}>
      <View style={styles.row}>
        <View style={styles.fbIcon}>
          <Text style={styles.fbLetter}>f</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.title}>Connect with Facebook</Text>
          <Text style={styles.subtitle}>
            Optional — find friends on SOLVEQO and follow their public activity.
          </Text>
        </View>
      </View>
      <Text style={styles.privacyNote}>
        Only public profiles are shared. Private information is never exposed.
      </Text>
      <Pressable
        accessibilityRole="button"
        onPress={connect}
        style={({ pressed }) => [styles.fbButton, pressed && styles.fbButtonPressed]}
      >
        <Text style={styles.fbButtonText}>Connect with Facebook</Text>
      </Pressable>
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
    borderRadius: 16,
  },
  cardCompact: {
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'flex-start',
  },
  connectedRow: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  fbIcon: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: '#1877F2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbIconConnected: {
    width: 44,
    height: 44,
    borderRadius: radius.md,
    backgroundColor: '#1877F2',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.9,
  },
  fbLetter: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.textInverse,
  },
  info: {
    flex: 1,
    gap: spacing.xs,
  },
  connectedInfo: {
    flex: 1,
    gap: 2,
  },
  title: {
    ...typography.heading3,
    color: colors.textPrimary,
  },
  connectedTitle: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  connectedSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 18,
  },
  privacyNote: {
    ...typography.caption,
    color: colors.textSecondary,
    lineHeight: 16,
  },
  fbButton: {
    backgroundColor: '#1877F2',
    borderRadius: radius.md,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fbButtonPressed: {
    opacity: 0.9,
  },
  fbButtonText: {
    ...typography.button,
    color: colors.textInverse,
  },
});
