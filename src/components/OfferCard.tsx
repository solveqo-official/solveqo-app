import { StyleSheet, Text, View } from 'react-native';
import { Badge, Button, Card } from '@/components/ui';
import { Offer } from '@/types';
import { colors, radius, spacing, typography } from '@/theme';

type OfferCardProps = {
  offer: Offer;
  onViewProfile: () => void;
  onAccept: () => void;
  onDecline: () => void;
};

export function OfferCard({ offer, onViewProfile, onAccept, onDecline }: OfferCardProps) {
  const { professional } = offer;

  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{professional.avatar}</Text>
        </View>
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{professional.name}</Text>
          <View style={styles.ratingRow}>
            <Text style={styles.rating}>★ {professional.rating}</Text>
            <Text style={styles.completed}>{professional.completedJobs} jobs completed</Text>
          </View>
        </View>
      </View>

      <View style={styles.badges}>
        {professional.professions.map((p) => (
          <Badge key={p} label={p} selected />
        ))}
      </View>

      <View style={styles.priceBox}>
        <Text style={styles.priceLabel}>Labor price only</Text>
        <Text style={styles.price}>€{offer.laborPrice}</Text>
        <Text style={styles.priceNote}>Materials are not included</Text>
      </View>

      {offer.message ? (
        <Text style={styles.message}>"{offer.message}"</Text>
      ) : null}

      <Button title="View profile" variant="secondary" onPress={onViewProfile} />
      <Button title="Accept offer" onPress={onAccept} />
      <Button title="Decline" variant="text" onPress={onDecline} />
    </Card>
  );
}

const styles = StyleSheet.create({
  card: {
    gap: spacing.md,
    borderRadius: 20,
  },
  header: {
    flexDirection: 'row',
    gap: spacing.md,
    alignItems: 'center',
  },
  avatar: {
    width: 52,
    height: 52,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.primary,
  },
  headerInfo: {
    flex: 1,
    gap: 2,
  },
  name: {
    ...typography.heading3,
    color: colors.textPrimary,
  },
  ratingRow: {
    flexDirection: 'row',
    gap: spacing.sm,
    alignItems: 'center',
  },
  rating: {
    ...typography.bodySmall,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  completed: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  priceBox: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: 2,
  },
  priceLabel: {
    ...typography.caption,
    fontWeight: '600',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  price: {
    fontSize: 28,
    fontWeight: '700',
    color: colors.textPrimary,
  },
  priceNote: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  message: {
    ...typography.body,
    color: colors.textSecondary,
    fontStyle: 'italic',
    lineHeight: 22,
  },
});
