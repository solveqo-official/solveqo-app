import { Ionicons } from '@expo/vector-icons';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Button, Card } from '@/components/ui';
import { FriendUser } from '@/data/leaderboard';
import { colors, radius, spacing, typography } from '@/theme';

type FriendRowProps = {
  friend: FriendUser;
  onPress: () => void;
  onFollowToggle: () => void;
};

export function FriendRow({ friend, onPress, onFollowToggle }: FriendRowProps) {
  return (
    <Card style={styles.card}>
      <Pressable style={styles.mainRow} onPress={onPress} accessibilityRole="button">
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{friend.avatar}</Text>
        </View>
        <View style={styles.info}>
          <Text style={styles.name}>{friend.name}</Text>
          <Text style={styles.meta}>
            {friend.mutualFriends} mutual friend{friend.mutualFriends !== 1 ? 's' : ''}
          </Text>
          <View style={styles.stats}>
            <Ionicons name="star" size={12} color="#F59E0B" />
            <Text style={styles.statText}>{friend.rating}</Text>
            <Text style={styles.statDot}>·</Text>
            <Text style={styles.statText}>{friend.completedJobs} jobs</Text>
          </View>
        </View>
        <Ionicons name="chevron-forward" size={18} color={colors.textSecondary} />
      </Pressable>
      <Button
        title={friend.isFollowing ? 'Following' : 'Follow'}
        variant={friend.isFollowing ? 'secondary' : 'primary'}
        onPress={onFollowToggle}
        style={styles.followButton}
      />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.sm,
    borderRadius: 16,
    padding: spacing.md,
  },
  mainRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
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
  meta: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  stats: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    marginTop: 2,
  },
  statText: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  statDot: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  followButton: {
    height: 40,
  },
});
