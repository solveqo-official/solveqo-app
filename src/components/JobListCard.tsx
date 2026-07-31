import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Card } from '@/components/ui';
import { Job } from '@/types';
import { colors, radius, spacing, typography } from '@/theme';

type JobListCardProps = {
  job: Job;
  onPress: () => void;
};

export function JobListCard({ job, onPress }: JobListCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <Card style={styles.card}>
        <View style={styles.row}>
          <View style={styles.thumb}>
            <Text style={styles.thumbEmoji}>{job.photos[0] ?? '📋'}</Text>
          </View>
          <View style={styles.content}>
            <Text style={styles.title}>{job.title}</Text>
            <Text style={styles.description} numberOfLines={2}>
              {job.shortDescription}
            </Text>
            <View style={styles.meta}>
              <Text style={styles.metaText}>{job.distance}</Text>
              <Text style={styles.metaDot}>·</Text>
              <Text style={styles.metaText}>{job.city}</Text>
              <Text style={styles.metaDot}>·</Text>
              <Text style={styles.metaText}>{job.timePosted}</Text>
            </View>
          </View>
        </View>
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.92,
    transform: [{ scale: 0.99 }],
  },
  card: {
    borderRadius: 16,
    padding: spacing.md,
  },
  row: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  thumb: {
    width: 56,
    height: 56,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  thumbEmoji: {
    fontSize: 24,
  },
  content: {
    flex: 1,
    gap: spacing.xs,
  },
  title: {
    ...typography.heading3,
    color: colors.textPrimary,
  },
  description: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  meta: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  metaText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  metaDot: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
