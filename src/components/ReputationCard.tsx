import { StyleSheet, Text, View } from 'react-native';
import { Card } from '@/components/ui';
import {
  getBadgeForPoints,
  getBadgeProgress,
  getNextBadge,
} from '@/types/reputation';
import { colors, radius, spacing, typography } from '@/theme';

type ReputationCardProps = {
  points: number;
  regionalRank: number;
  globalRank: number;
};

export function ReputationCard({ points, regionalRank, globalRank }: ReputationCardProps) {
  const badge = getBadgeForPoints(points);
  const nextBadge = getNextBadge(points);
  const progress = getBadgeProgress(points);

  return (
    <Card style={styles.card}>
      <Text style={styles.sectionLabel}>Reputation</Text>

      <View style={styles.pointsRow}>
        <Text style={styles.points}>{points.toLocaleString()}</Text>
        <Text style={styles.pointsLabel}>points</Text>
      </View>

      <View style={[styles.badgePill, { backgroundColor: `${badge.color}18` }]}>
        <View style={[styles.badgeDot, { backgroundColor: badge.color }]} />
        <Text style={[styles.badgeText, { color: badge.color }]}>{badge.label}</Text>
      </View>

      <View style={styles.ranksRow}>
        <View style={styles.rankItem}>
          <Text style={styles.rankValue}>#{regionalRank}</Text>
          <Text style={styles.rankLabel}>Regional</Text>
        </View>
        <View style={styles.rankDivider} />
        <View style={styles.rankItem}>
          <Text style={styles.rankValue}>#{globalRank}</Text>
          <Text style={styles.rankLabel}>Global</Text>
        </View>
      </View>

      {nextBadge ? (
        <View style={styles.progressSection}>
          <View style={styles.progressHeader}>
            <Text style={styles.progressLabel}>Progress to {nextBadge.label}</Text>
            <Text style={styles.progressPercent}>{Math.round(progress * 100)}%</Text>
          </View>
          <View style={styles.progressTrack}>
            <View style={[styles.progressFill, { width: `${progress * 100}%`, backgroundColor: badge.color }]} />
          </View>
          <Text style={styles.progressHint}>
            {nextBadge.minPoints - points} points to go
          </Text>
        </View>
      ) : (
        <Text style={styles.maxBadge}>Highest badge achieved</Text>
      )}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
    borderRadius: 20,
  },
  sectionLabel: {
    ...typography.caption,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.8,
    color: colors.primary,
  },
  pointsRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    gap: spacing.sm,
  },
  points: {
    fontSize: 36,
    fontWeight: '700',
    letterSpacing: -1,
    color: colors.textPrimary,
  },
  pointsLabel: {
    ...typography.body,
    color: colors.textSecondary,
  },
  badgePill: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
  },
  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: radius.full,
  },
  badgeText: {
    ...typography.bodySmall,
    fontWeight: '700',
  },
  ranksRow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing.md,
  },
  rankItem: {
    flex: 1,
    alignItems: 'center',
    gap: 2,
  },
  rankDivider: {
    width: 1,
    height: 32,
    backgroundColor: colors.border,
  },
  rankValue: {
    fontSize: 22,
    fontWeight: '700',
    color: colors.primary,
  },
  rankLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  progressSection: {
    gap: spacing.sm,
  },
  progressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  progressLabel: {
    ...typography.bodySmall,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  progressPercent: {
    ...typography.bodySmall,
    fontWeight: '600',
    color: colors.primary,
  },
  progressTrack: {
    height: 6,
    backgroundColor: colors.border,
    borderRadius: radius.full,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: radius.full,
  },
  progressHint: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  maxBadge: {
    ...typography.bodySmall,
    color: colors.success,
    fontWeight: '600',
  },
});
