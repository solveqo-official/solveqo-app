import { Ionicons } from '@expo/vector-icons';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { getJobById } from '@/data/jobs';
import { Button, Card, Input, Screen } from '@/components/ui';
import { colors, radius, spacing, typography } from '@/theme';

export default function JobDetailScreen() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const router = useRouter();
  const job = getJobById(id ?? '');

  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  if (!job) {
    return (
      <Screen title="Job not found">
        <Button title="Go back" onPress={() => router.back()} />
      </Screen>
    );
  }

  const canSendOffer = price.trim().length > 0 && Number(price) > 0;

  return (
    <Screen
      scroll
      footer={
        <View style={styles.footer}>
          <View style={styles.laborNote}>
            <Text style={styles.laborNoteTitle}>Labor price only</Text>
            <Text style={styles.laborNoteBody}>Materials are not included</Text>
          </View>
          <Input
            label="Your labor price"
            placeholder="Amount in EUR"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />
          <Input
            label="Message (optional)"
            placeholder="Add a short message to the customer"
            value={message}
            onChangeText={setMessage}
            multiline
            style={styles.messageInput}
          />
          <Button
            title="Send offer"
            disabled={!canSendOffer}
            onPress={() => router.push(`/offer-sent?jobId=${job.id}`)}
          />
        </View>
      }
    >
      <Pressable style={styles.backRow} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={colors.textPrimary} />
        <Text style={styles.backLabel}>Back</Text>
      </Pressable>

      <Text style={styles.title}>{job.title}</Text>

      <View style={styles.meta}>
        <Text style={styles.metaText}>{job.distance}</Text>
        <Text style={styles.metaDot}>·</Text>
        <Text style={styles.metaText}>{job.city}, {job.region}</Text>
        <Text style={styles.metaDot}>·</Text>
        <Text style={styles.metaText}>{job.timePosted}</Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.photos}>
        {job.photos.map((photo, i) => (
          <View key={i} style={styles.photo}>
            <Text style={styles.photoEmoji}>{photo}</Text>
          </View>
        ))}
      </ScrollView>

      <Card style={styles.section}>
        <Text style={styles.sectionTitle}>Description</Text>
        <Text style={styles.sectionBody}>{job.description}</Text>
      </Card>

      <Card style={styles.ownerCard}>
        <Text style={styles.sectionTitle}>Request owner</Text>
        <View style={styles.ownerRow}>
          <View style={styles.ownerAvatar}>
            <Text style={styles.ownerAvatarText}>{job.owner.avatar}</Text>
          </View>
          <View style={styles.ownerInfo}>
            <Text style={styles.ownerName}>{job.owner.name}</Text>
            <Text style={styles.ownerRating}>★ {job.owner.rating} · {job.owner.completedJobs} jobs</Text>
          </View>
        </View>
        <Text style={styles.hiddenNote}>Contact details hidden until offer is accepted</Text>
      </Card>
    </Screen>
  );
}

const styles = StyleSheet.create({
  backRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xs,
    marginBottom: spacing.md,
  },
  backLabel: {
    ...typography.body,
    color: colors.textPrimary,
  },
  title: {
    ...typography.heading1,
    letterSpacing: -0.5,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  meta: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
    marginBottom: spacing.lg,
  },
  metaText: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  metaDot: {
    color: colors.textSecondary,
  },
  photos: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
  },
  photo: {
    width: 100,
    height: 100,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  photoEmoji: {
    fontSize: 36,
  },
  section: {
    gap: spacing.sm,
    marginBottom: spacing.lg,
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
  ownerCard: {
    gap: spacing.md,
    marginBottom: spacing.xxl,
  },
  ownerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
  },
  ownerAvatar: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ownerAvatarText: {
    fontSize: 18,
    fontWeight: '700',
    color: colors.primary,
  },
  ownerInfo: {
    gap: 2,
  },
  ownerName: {
    ...typography.body,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  ownerRating: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  hiddenNote: {
    ...typography.caption,
    color: colors.textSecondary,
    fontStyle: 'italic',
  },
  footer: {
    gap: spacing.sm,
  },
  laborNote: {
    backgroundColor: colors.primaryLight,
    borderRadius: radius.md,
    padding: spacing.md,
    gap: 2,
  },
  laborNoteTitle: {
    ...typography.caption,
    fontWeight: '700',
    color: colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  laborNoteBody: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  messageInput: {
    minHeight: 80,
    textAlignVertical: 'top',
    paddingTop: spacing.md,
  },
});
