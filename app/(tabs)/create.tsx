import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { Button, Input, Screen } from '@/components/ui';
import { colors, radius, spacing, typography } from '@/theme';

export default function CreateRequestScreen() {
  const router = useRouter();
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState<string[]>(['📷', '📷']);
  const [locationMode, setLocationMode] = useState<'current' | 'manual'>('current');
  const [manualLocation, setManualLocation] = useState('');

  const addPhoto = () => {
    if (photos.length < 5) {
      setPhotos([...photos, '📷']);
    }
  };

  const canPublish =
    description.trim().length >= 10 &&
    (locationMode === 'current' || manualLocation.trim().length >= 2);

  return (
    <Screen
      scroll
      title="Create request"
      subtitle="Describe what you need — professionals nearby will send you offers."
      footer={
        <Button
          title="Publish request"
          disabled={!canPublish}
          onPress={() => router.push('/create-request/success')}
        />
      }
    >
      <View style={styles.section}>
        <Text style={styles.label}>What needs to be done?</Text>
        <TextInput
          multiline
          numberOfLines={6}
          value={description}
          onChangeText={setDescription}
          placeholder="Describe the problem or work you need help with..."
          placeholderTextColor={colors.textSecondary}
          style={styles.textArea}
          textAlignVertical="top"
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Add photos</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.photos}>
          {photos.map((photo, index) => (
            <View key={index} style={styles.photoSlot}>
              <Text style={styles.photoEmoji}>{photo}</Text>
            </View>
          ))}
          {photos.length < 5 ? (
            <Pressable style={styles.addPhoto} onPress={addPhoto} accessibilityRole="button">
              <Text style={styles.addPhotoText}>+</Text>
            </Pressable>
          ) : null}
        </ScrollView>
      </View>

      <View style={styles.section}>
        <Text style={styles.label}>Location</Text>
        <Pressable
          style={[styles.locationOption, locationMode === 'current' && styles.locationOptionActive]}
          onPress={() => setLocationMode('current')}
        >
          <Text style={styles.locationEmoji}>📍</Text>
          <Text style={[styles.locationText, locationMode === 'current' && styles.locationTextActive]}>
            Use my current location
          </Text>
        </Pressable>
        <Pressable
          style={[styles.locationOption, locationMode === 'manual' && styles.locationOptionActive]}
          onPress={() => setLocationMode('manual')}
        >
          <Text style={styles.locationEmoji}>🏙️</Text>
          <Text style={[styles.locationText, locationMode === 'manual' && styles.locationTextActive]}>
            Enter city or region manually
          </Text>
        </Pressable>
        {locationMode === 'manual' ? (
          <Input
            placeholder="e.g. Barcelona, Eixample"
            value={manualLocation}
            onChangeText={setManualLocation}
          />
        ) : null}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  section: {
    marginBottom: spacing.xl,
    gap: spacing.sm,
  },
  label: {
    ...typography.bodySmall,
    fontWeight: '600',
    color: colors.textPrimary,
  },
  textArea: {
    ...typography.body,
    minHeight: 140,
    borderRadius: radius.lg,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
    padding: spacing.md,
    color: colors.textPrimary,
    lineHeight: 24,
  },
  photos: {
    gap: spacing.sm,
  },
  photoSlot: {
    width: 88,
    height: 88,
    borderRadius: radius.md,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.border,
  },
  photoEmoji: {
    fontSize: 28,
  },
  addPhoto: {
    width: 88,
    height: 88,
    borderRadius: radius.md,
    borderWidth: 1.5,
    borderColor: colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
  },
  addPhotoText: {
    fontSize: 28,
    color: colors.textSecondary,
  },
  locationOption: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.md,
    borderRadius: radius.md,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  locationOptionActive: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  locationEmoji: {
    fontSize: 20,
  },
  locationText: {
    ...typography.body,
    color: colors.textSecondary,
    flex: 1,
  },
  locationTextActive: {
    color: colors.primary,
    fontWeight: '600',
  },
});
