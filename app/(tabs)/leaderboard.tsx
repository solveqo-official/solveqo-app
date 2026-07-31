import { useRouter } from 'expo-router';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LeaderboardRow } from '@/components/LeaderboardRow';
import { ReputationCard } from '@/components/ReputationCard';
import { SegmentedControl } from '@/components/ui';
import { getGlobalLeaderboard, getRegionalLeaderboard } from '@/data/leaderboard';
import { mockCurrentUser } from '@/data/user';
import { colors, spacing, typography } from '@/theme';

export default function LeaderboardScreen() {
  const router = useRouter();
  const [tab, setTab] = useState<'Regional' | 'Global'>('Regional');

  const data =
    tab === 'Regional'
      ? getRegionalLeaderboard(mockCurrentUser.region)
      : getGlobalLeaderboard();

  return (
    <SafeAreaView style={styles.safe} edges={['top', 'left', 'right']}>
      <View style={styles.header}>
        <Text style={styles.title}>Leaderboard</Text>
        <Text style={styles.subtitle}>
          Rankings based on reputation points — quality over quantity.
        </Text>
      </View>

      <View style={styles.topSection}>
        <ReputationCard
          points={mockCurrentUser.reputationPoints}
          regionalRank={mockCurrentUser.regionalRank}
          globalRank={mockCurrentUser.globalRank}
        />
        <SegmentedControl
          options={['Regional', 'Global']}
          selected={tab}
          onChange={(value) => setTab(value as 'Regional' | 'Global')}
        />
        {tab === 'Regional' ? (
          <Text style={styles.regionLabel}>{mockCurrentUser.region}</Text>
        ) : null}
      </View>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        style={styles.list}
        contentContainerStyle={styles.listContent}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <LeaderboardRow
            user={item}
            rank={tab === 'Regional' ? index + 1 : item.globalRank}
            onPress={() => router.push(`/user/${item.id}`)}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
  },
  header: {
    paddingTop: spacing.lg,
    gap: spacing.xs,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.bodySmall,
    color: colors.textSecondary,
    lineHeight: 20,
  },
  topSection: {
    gap: spacing.md,
    paddingVertical: spacing.md,
  },
  regionLabel: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  list: {
    flex: 1,
  },
  listContent: {
    gap: spacing.sm,
    paddingBottom: spacing.xxl,
  },
});
