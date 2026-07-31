import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { Card } from '@/components/ui';
import { colors, radius, spacing, typography } from '@/theme';

type ActionCardProps = {
  title: string;
  subtitle: string;
  emoji: string;
  onPress: () => void;
  style?: ViewStyle;
};

export function ActionCard({ title, subtitle, emoji, onPress, style }: ActionCardProps) {
  return (
    <Pressable
      accessibilityRole="button"
      onPress={onPress}
      style={({ pressed }) => [pressed && styles.pressed, style]}
    >
      <Card style={styles.card}>
        <View style={styles.iconCircle}>
          <Text style={styles.emoji}>{emoji}</Text>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </Card>
    </Pressable>
  );
}

const cardShadow: ViewStyle = {
  shadowColor: '#0F172A',
  shadowOffset: { width: 0, height: 10 },
  shadowOpacity: 0.06,
  shadowRadius: 20,
  elevation: 3,
};

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.95,
    transform: [{ scale: 0.985 }],
  },
  card: {
    padding: spacing.lg,
    borderRadius: 20,
    borderWidth: 0,
    gap: spacing.sm,
    ...cardShadow,
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: radius.full,
    backgroundColor: colors.primaryLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  emoji: {
    fontSize: 22,
  },
  title: {
    ...typography.heading2,
    letterSpacing: -0.3,
    color: colors.textPrimary,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    lineHeight: 22,
  },
});
