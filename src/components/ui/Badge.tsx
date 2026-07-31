import { Pressable, StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, radius, spacing, typography } from '@/theme';

interface BadgeProps {
  label: string;
  selected?: boolean;
  onPress?: () => void;
  style?: ViewStyle;
}

export function Badge({ label, selected = false, onPress, style }: BadgeProps) {
  const labelStyle = [styles.label, selected && styles.labelSelected];
  const containerStyle = [styles.badge, selected && styles.badgeSelected, style];

  if (onPress) {
    return (
      <Pressable
        accessibilityRole="button"
        onPress={onPress}
        style={({ pressed }) => [
          ...containerStyle,
          pressed && styles.badgePressed,
        ]}
      >
        <Text style={labelStyle}>{label}</Text>
      </Pressable>
    );
  }

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: radius.full,
    borderWidth: 1,
    borderColor: colors.border,
    backgroundColor: colors.surface,
  },
  badgeSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.primaryLight,
  },
  badgePressed: {
    opacity: 0.85,
  },
  label: {
    ...typography.bodySmall,
    fontWeight: '500',
    color: colors.textSecondary,
  },
  labelSelected: {
    color: colors.primary,
    fontWeight: '600',
  },
});
