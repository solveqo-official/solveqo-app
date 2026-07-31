import { useLocalSearchParams, useRouter } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import { OfferCard } from '@/components/OfferCard';
import { getOffersForRequest } from '@/data/offers';
import { Screen } from '@/components/ui';
import { colors, spacing, typography } from '@/theme';

export default function OffersScreen() {
  const { requestId } = useLocalSearchParams<{ requestId: string }>();
  const router = useRouter();
  const offers = getOffersForRequest(requestId ?? 'req-1');

  return (
    <Screen
      scroll
      title="Offers"
      subtitle="Review price offers from professionals. Labor only — materials not included."
      contentContainerStyle={styles.content}
    >
      <View style={styles.notice}>
        <Text style={styles.noticeTitle}>Labor price only</Text>
        <Text style={styles.noticeBody}>All prices shown are for labor. Materials are not included.</Text>
      </View>

      {offers.map((offer) => (
        <OfferCard
          key={offer.id}
          offer={offer}
          onViewProfile={() => router.push('/(tabs)/profile')}
          onAccept={() =>
            router.push(`/accepted/${offer.jobId}?offerId=${offer.id}&proPhone=${encodeURIComponent(offer.professional.phone)}`)
          }
          onDecline={() => {}}
        />
      ))}
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingBottom: spacing.xxl,
  },
  notice: {
    backgroundColor: colors.primaryLight,
    borderRadius: 12,
    padding: spacing.md,
    gap: 2,
  },
  noticeTitle: {
    ...typography.caption,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  noticeBody: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
});
