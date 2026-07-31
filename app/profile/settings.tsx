import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { FacebookConnect } from '@/components/FacebookConnect';
import { Screen } from '@/components/ui';
import { colors, spacing, typography } from '@/theme';

export default function ProfileSettingsScreen() {
  const router = useRouter();

  return (
    <Screen scroll contentContainerStyle={styles.content}>
      <Pressable style={styles.backRow} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={22} color={colors.textPrimary} />
        <Text style={styles.backLabel}>Back</Text>
      </Pressable>

      <Text style={styles.title}>Settings</Text>
      <Text style={styles.subtitle}>Manage your account connections and preferences.</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Connections</Text>
        <FacebookConnect />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.md,
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
  title: {
    ...typography.heading1,
    letterSpacing: -0.5,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
  },
  section: {
    gap: spacing.md,
  },
  sectionTitle: {
    ...typography.heading3,
    color: colors.textPrimary,
  },
});
