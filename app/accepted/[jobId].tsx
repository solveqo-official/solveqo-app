import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { Linking, Pressable, StyleSheet, Text, View } from 'react-native';
import { getJobById } from '@/data/jobs';
import { mockCustomerPhone } from '@/data/messages';
import { getOffersForRequest } from '@/data/offers';
import { Badge, Button, Card, Screen } from '@/components/ui';
import { colors, radius, spacing, typography } from '@/theme';

export default function OfferAcceptedScreen() {
  const { jobId, offerId, proPhone } = useLocalSearchParams<{
    jobId: string;
    offerId: string;
    proPhone: string;
  }>();
  const router = useRouter();

  const job = getJobById(jobId ?? '1');
  const offer = getOffersForRequest(job?.requestId ?? 'req-1').find((o) => o.id === offerId);

  const professionalPhone = decodeURIComponent(proPhone ?? offer?.professional.phone ?? '');
  const customerPhone = mockCustomerPhone;

  const handleCall = (phone: string) => {
    Linking.openURL(`tel:${phone}`);
  };

  return (
    <Screen scroll contentContainerStyle={styles.content}>
      <View style={styles.iconWrap}>
        <Text style={styles.icon}>✓</Text>
      </View>

      <Text style={styles.title}>Offer accepted</Text>
      <Text style={styles.body}>
        You can now contact each other by phone or continue the conversation in SOLVEQO chat.
      </Text>

      <View style={styles.statusBadge}>
        <Text style={styles.statusText}>Accepted</Text>
      </View>

      {offer ? (
        <Card style={styles.offerSummary}>
          <Text style={styles.summaryLabel}>Accepted offer</Text>
          <Text style={styles.summaryPrice}>€{offer.laborPrice}</Text>
          <Text style={styles.summaryNote}>Labor price only · Materials not included</Text>
          <View style={styles.proRow}>
            <View style={styles.proAvatar}>
              <Text style={styles.proAvatarText}>{offer.professional.avatar}</Text>
            </View>
            <View>
              <Text style={styles.proName}>{offer.professional.name}</Text>
              <View style={styles.badges}>
                {offer.professional.professions.map((p) => (
                  <Badge key={p} label={p} selected />
                ))}
              </View>
            </View>
          </View>
        </Card>
      ) : null}

      <Card style={styles.contactCard}>
        <Text style={styles.contactTitle}>Contact details</Text>
        <View style={styles.phoneRow}>
          <Ionicons name="call-outline" size={18} color={colors.primary} />
          <View style={styles.phoneInfo}>
            <Text style={styles.phoneLabel}>Professional</Text>
            <Text style={styles.phoneNumber}>{professionalPhone}</Text>
          </View>
        </View>
        <View style={styles.phoneRow}>
          <Ionicons name="call-outline" size={18} color={colors.primary} />
          <View style={styles.phoneInfo}>
            <Text style={styles.phoneLabel}>Customer</Text>
            <Text style={styles.phoneNumber}>{customerPhone}</Text>
          </View>
        </View>
      </Card>

      <View style={styles.actions}>
        <Button title="Call" onPress={() => handleCall(professionalPhone)} />
        <Button
          title="Open chat"
          variant="secondary"
          onPress={() => router.push(`/chat/${jobId}?name=${encodeURIComponent(offer?.professional.name ?? 'Professional')}`)}
        />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    gap: spacing.lg,
    paddingBottom: spacing.xxl,
    alignItems: 'center',
  },
  iconWrap: {
    width: 72,
    height: 72,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
  },
  icon: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.primary,
  },
  title: {
    ...typography.heading1,
    letterSpacing: -0.5,
    color: colors.textPrimary,
    textAlign: 'center',
  },
  body: {
    ...typography.body,
    color: colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
    maxWidth: 340,
  },
  statusBadge: {
    backgroundColor: '#D1FAE5',
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.xs,
    borderRadius: radius.full,
  },
  statusText: {
    ...typography.bodySmall,
    fontWeight: '700',
    color: colors.success,
  },
  offerSummary: {
    width: '100%',
    gap: spacing.sm,
    borderRadius: 20,
  },
  summaryLabel: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
  },
  summaryPrice: {
    fontSize: 32,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  summaryNote: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  proRow: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
    marginTop: spacing.sm,
  },
  proAvatar: {
    width: 44,
    height: 44,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  proAvatarText: {
    fontWeight: '700',
    color: colors.primary,
  },
  proName: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
    marginBottom: spacing.xs,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  contactCard: {
    width: '100%',
    gap: spacing.md,
    borderRadius: 16,
  },
  contactTitle: {
    ...typography.heading3,
    color: colors.textPrimary,
  },
  phoneRow: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  phoneInfo: {
    gap: 2,
  },
  phoneLabel: {
    ...typography.caption,
    color: colors.textSecondary,
  },
  phoneNumber: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  actions: {
    width: '100%',
    gap: spacing.sm,
  },
});
