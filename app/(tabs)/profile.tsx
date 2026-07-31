import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FacebookConnect } from '@/components/FacebookConnect';
import { FriendRow } from '@/components/FriendRow';
import { ReputationCard } from '@/components/ReputationCard';
import { Badge, Card, Screen } from '@/components/ui';
import { mockFriends, FriendUser } from '@/data/leaderboard';
import { mockUser } from '@/data/user';
import { useFacebookConnection } from '@/context/FacebookConnectionContext';
import { colors, radius, spacing, typography } from '@/theme';

export default function ProfileScreen() {
  const router = useRouter();
  const { connected } = useFacebookConnection();
  const [friends, setFriends] = useState<FriendUser[]>(mockFriends);

  const toggleFollow = (id: string) => {
    setFriends((current) =>
      current.map((friend) =>
        friend.id === id ? { ...friend, isFollowing: !friend.isFollowing } : friend,
      ),
    );
  };

  return (
    <Screen scroll contentContainerStyle={styles.content}>
      <Pressable
        style={styles.settingsButton}
        onPress={() => router.push('/profile/settings')}
        accessibilityRole="button"
      >
        <Ionicons name="settings-outline" size={22} color={colors.textSecondary} />
      </Pressable>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{mockUser.name.charAt(0)}</Text>
        </View>
        <Text style={styles.name}>{mockUser.name}</Text>
        <Text style={styles.region}>{mockUser.region}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text style={styles.rating}>{mockUser.rating}</Text>
          <Text style={styles.reviews}>({mockUser.reviewCount} reviews)</Text>
        </View>
      </View>

      <View style={styles.badges}>
        {mockUser.professions.map((profession) => (
          <Badge key={profession} label={profession} selected />
        ))}
      </View>

      <ReputationCard
        points={mockUser.reputationPoints ?? 0}
        regionalRank={mockUser.regionalRank ?? 0}
        globalRank={mockUser.globalRank ?? 0}
      />

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>About me</Text>
        <Text style={styles.sectionBody}>{mockUser.about}</Text>
      </Card>

      <View style={styles.statsRow}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{mockUser.completedJobs}</Text>
          <Text style={styles.statLabel}>Completed jobs</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{mockUser.portfolioCount}</Text>
          <Text style={styles.statLabel}>Portfolio photos</Text>
        </Card>
      </View>

      {connected ? (
        <View style={styles.friendsSection}>
          <Text style={styles.sectionTitle}>Friends on SOLVEQO</Text>
          <Text style={styles.friendsSubtitle}>
            Follow friends and view their public profiles, jobs, and reviews.
          </Text>
          {friends.map((friend) => (
            <FriendRow
              key={friend.id}
              friend={friend}
              onPress={() => router.push(`/user/${friend.id}`)}
              onFollowToggle={() => toggleFollow(friend.id)}
            />
          ))}
        </View>
      ) : (
        <FacebookConnect compact />
      )}

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Text style={styles.sectionBody}>
          Mock reviews will appear here once the marketplace is live.
        </Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.lg,
    paddingBottom: spacing.xxl,
    gap: spacing.lg,
  },
  settingsButton: {
    alignSelf: 'flex-end',
    padding: spacing.xs,
  },
  header: {
    alignItems: 'center',
    gap: spacing.sm,
    marginTop: -spacing.lg,
  },
  avatar: {
    width: 96,
    height: 96,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.sm,
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '700',
    color: colors.primary,
  },
  name: {
    ...typography.heading1,
    letterSpacing: -0.5,
    color: colors.textPrimary,
  },
  region: {
    ...typography.body,
    color: colors.textSecondary,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  rating: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  reviews: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    justifyContent: 'center',
  },
  section: {
    gap: spacing.sm,
  },
  sectionTitle: {
    ...typography.heading3,
    color: colors.textPrimary,
  },
  sectionBody: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 24,
  },
  statsRow: {
    flexDirection: 'row',
    gap: spacing.md,
  },
  statCard: {
    flex: 1,
    alignItems: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.lg,
  },
  statValue: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.primary,
  },
  statLabel: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    textAlign: 'center',
  },
  friendsSection: {
    gap: spacing.md,
  },
  friendsSubtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
    marginTop: -spacing.sm,
  },
});
