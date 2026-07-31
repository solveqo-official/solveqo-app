import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Card } from '@/components/ui';
import { Job } from '@/types';
import { colors, spacing, typography } from '@/theme';

type JobPreviewCardProps = {
  job: Job;
  onView: () => void;
  onDismiss?: () => void;
};

export function JobPreviewCard({ job, onView, onDismiss }: JobPreviewCardProps) {
  return (
    <Card style={styles.card}>
      {onDismiss ? (
        <Pressable style={styles.dismiss} onPress={onDismiss} hitSlop={8}>
          <Text style={styles.dismissText}>✕</Text>
        </Pressable>
      ) : null}
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.description} numberOfLines={2}>
        {job.shortDescription}
      </Text>
      <View style={styles.meta}>
        <Text style={styles.metaText}>{job.distance}</Text>
        <Text style={styles.metaDot}>·</Text>
        <Text style={styles.metaText}>{job.region}</Text>
        <Text style={styles.metaDot}>·</Text>
        <Text style={styles.metaText}>{job.timePosted}</Text>
      </View>
      <Button title="View job" onPress={onView} style={styles.button} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.sm,
    borderRadius: 20,
    padding: spacing.lg,
  },
  dismiss: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    zIndex: 1,
  },
  dismissText: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  title: {
    ...typography.heading3,
    color: colors.textPrimary,
    paddingRight: spacing.lg,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  metaText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  metaDot: {
    color: colors.textSecondary,
  },
  button: {
    marginTop: spacing.xs,
  },
});
