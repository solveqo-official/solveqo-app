import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { ReputationCard } from '@/components/ReputationCard';
import { Badge, Button, Card, Screen } from '@/components/ui';
import { getUserById } from '@/data/user';
import { colors, radius, spacing, typography } from '@/theme';

export default function PublicProfileScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const user = getUserById(id ?? '');

  if (!user) {
    return (
      <Screen title="Profile not found">
        <Button title="Go back" onPress={() => router.back()} />
      </Screen>
    );
  }

  const isOwnProfile = user.id === 'me';

  return (
    <Screen scroll contentContainerStyle={styles.content}>
      <Pressable style={styles.backRow} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={colors.textPrimary} />
        <Text style={styles.backLabel}>Back</Text>
      </Pressable>

      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{user.avatar}</Text>
        </View>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.region}>{user.region}</Text>
        <View style={styles.ratingRow}>
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text style={styles.rating}>{user.rating}</Text>
          <Text style={styles.reviews}>({user.reviewCount} reviews)</Text>
        </View>
      </View>

      <View style={styles.badges}>
        {user.professions.map((profession) => (
          <Badge key={profession} label={profession} selected />
        ))}
      </View>

      <ReputationCard
        points={user.reputationPoints}
        regionalRank={user.regionalRank}
        globalRank={user.globalRank}
      />

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.sectionBody}>{user.about}</Text>
      </Card>

      <View style={styles.statsRow}>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{user.completedJobs}</Text>
          <Text style={styles.statLabel}>Completed jobs</Text>
        </Card>
        <Card style={styles.statCard}>
          <Text style={styles.statValue}>{user.portfolioCount}</Text>
          <Text style={styles.statLabel}>Portfolio photos</Text>
        </Card>
      </View>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Portfolio</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.portfolio}>
          {Array.from({ length: user.portfolioCount }).map((_, i) => (
            <View key={i} style={styles.portfolioItem}>
              <Text style={styles.portfolioEmoji}>🖼️</Text>
            </View>
          ))}
        </ScrollView>
      </Card>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Reviews</Text>
        <Text style={styles.sectionBody}>
          Public reviews from completed jobs. Private details are never shown.
        </Text>
      </Card>

      {!isOwnProfile ? (
        <Button title="Follow" variant="secondary" onPress={() => {}} />
      ) : null}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.md,
    paddingBottom: spacing.xxl,
    gap: spacing.lg,
  },
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
  },
  backLabel: {
    ...typography.body,
    color: colors.textPrimary,
  },
  header: {
    alignItems: 'center',
    gap: spacing.sm,
  },
  avatar: {
    width: 88,
    height: 88,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 32,
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
  portfolio: {
    gap: spacing.sm,
  },
  portfolioItem: {
    width: 80,
    height: 80,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  portfolioEmoji: {
    fontSize: 28,
  },
});
