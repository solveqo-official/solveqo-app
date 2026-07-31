import { StyleSheet, Text, View, ViewStyle } from 'react-native';
import { colors, spacing, typography } from '@/theme';

type SolveqoLogoProps = {
  size?: 'large' | 'medium';
  style?: ViewStyle;
};

export function SolveqoLogo({ size = 'large', style }: SolveqoLogoProps) {
  const isLarge = size === 'large';
  const fontSize = isLarge ? 36 : 28;
  const taglineSize = isLarge ? 11 : 10;

  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.wordmark, { fontSize, lineHeight: fontSize + 4 }]}>
        <Text style={[styles.solve, { fontSize }]}>SOLVE</Text>
        <Text style={[styles.qo, { fontSize }]}>QO</Text>
      </Text>
      <Text style={[styles.tagline, { fontSize: taglineSize }]}>
        FROM PROBLEM TO SOLUTION
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: spacing.sm,
    alignItems: 'flex-start',
  },
  wordmark: {
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  solve: {
    color: colors.textPrimary,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  qo: {
    color: colors.primary,
    fontWeight: '800',
    letterSpacing: 1.2,
  },
  tagline: {
    ...typography.caption,
    fontWeight: '600',
    letterSpacing: 2,
    color: colors.textSecondary,
  },
});
