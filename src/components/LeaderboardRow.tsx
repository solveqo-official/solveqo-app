import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Badge, Card } from '@/components/ui';
import { PublicUser } from '@/types/reputation';
import { getBadgeForPoints } from '@/types/reputation';
import { colors, radius, spacing, typography } from '@/theme';

type LeaderboardRowProps = {
  user: PublicUser;
  rank: number;
  onPress: () => void;
};

export function LeaderboardRow({ user, rank, onPress }: LeaderboardRowProps) {
  const badge = getBadgeForPoints(user.reputationPoints);
  const isTopThree = rank <= 3;
  const rankColors = ['#F59E0B', '#9CA3AF', '#CD7F32'];

  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed]}
    >
      <Card style={styles.card}>
        <View style={styles.rankCol}>
          {isTopThree ? (
            <View style={[styles.rankBadge, { backgroundColor: `${rankColors[rank - 1]}22` }]}>
              <Text style={[styles.rankNumber, { color: rankColors[rank - 1] }]}>{rank}</Text>
            </View>
          ) : (
            <Text style={styles.rankPlain}>{rank}</Text>
          )}
        </View>

        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.avatar}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>{user.name}</Text>
          <Text style={styles.region} numberOfLines={1}>{user.region}</Text>
          <View style={styles.badges}>
            {user.professions.slice(0, 2).map((p) => (
              <Badge key={p} label={p} selected />
            ))}
          </View>
          <View style={styles.stats}>
            <Ionicons name="star" size={12} color="#F59E0B" />
            <Text style={styles.statText}>{user.rating}</Text>
            <Text style={styles.statDot}>·</Text>
            <Text style={styles.statText}>{user.completedJobs} jobs</Text>
            <Text style={styles.statDot}>·</Text>
            <Text style={[styles.statText, { color: badge.color, fontWeight: '600' }]}>
              {user.reputationPoints} pts
            </Text>
          </View>
        </View>

        <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
      </Card>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.92,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: 16,
  },
  rankCol: {
    width: 32,
    alignItems: 'center',
  },
  rankBadge: {
    width: 28,
    height: 28,
    borderRadius: radius.full,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rankNumber: {
    fontSize: 14,
    fontWeight: '800',
  },
  rankPlain: {
    ...typography.body,
    fontWeight: '700',
    color: colors.textSecondary,
  },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.primary,
  },
  info: {
    flex: 1,
    gap: 2,
  },
  name: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  region: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginTop: spacing.xs,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: spacing.xs,
  },
  statText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  statDot: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
