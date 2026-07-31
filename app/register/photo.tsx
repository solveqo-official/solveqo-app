import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { RegisterStep } from '@/components/RegisterStep';
import { Button } from '@/components/ui';
import { colors, radius, spacing, typography } from '@/theme';

export default function RegisterPhotoScreen() {
  const router = useRouter();

  return (
    <RegisterStep
      step={2}
      total={5}
      title="Add a profile photo"
      subtitle="Optional — helps others recognize and trust you."
      onContinue={() => router.push('/register/country')}
      secondaryAction={
        <Button title="Skip for now" variant="text" onPress={() => router.push('/register/country')} />
      }
    >
      <Pressable style={styles.avatar} accessibilityRole="button">
        <Text style={styles.avatarEmoji}>📷</Text>
        <Text style={styles.avatarHint}>Tap to add photo</Text>
      </Pressable>
    </RegisterStep>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 120,
    height: 120,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    borderWidth: 2,
    borderColor: colors.border,
    borderStyle: 'dashed',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: spacing.xs,
  },
  avatarEmoji: {
    fontSize: 28,
  },
  avatarHint: {
    ...typography.caption,
    color: colors.textSecondary,
  },
});
