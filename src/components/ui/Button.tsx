import {
  Pressable,
  PressableProps,
  StyleSheet,
  Text,
  ViewStyle,
} from 'react-native';
import { colors, radius, typography } from '@/theme';

type ButtonVariant = 'primary' | 'secondary' | 'text';

interface ButtonProps extends Omit<PressableProps, 'style'> {
  title: string;
  variant?: ButtonVariant;
  disabled?: boolean;
  style?: ViewStyle;
}

export function Button({
  title,
  variant = 'primary',
  disabled = false,
  style,
  ...props
}: ButtonProps) {
  return (
    <Pressable
      accessibilityRole="button"
      disabled={disabled}
      style={({ pressed }) => [
        styles.base,
        styles[variant],
        disabled && styles.disabled,
        pressed && !disabled && variant === 'primary' && styles.primaryPressed,
        pressed && !disabled && variant === 'secondary' && styles.secondaryPressed,
        style,
      ]}
      {...props}
    >
      <Text
        style={[
          typography.button,
          styles.label,
          variant === 'primary' && styles.primaryLabel,
          variant === 'secondary' && styles.secondaryLabel,
          variant === 'text' && styles.textLabel,
          disabled && styles.disabledLabel,
        ]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  base: {
    height: 52,
    borderRadius: radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  primaryPressed: {
    backgroundColor: colors.primaryDark,
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: colors.primary,
  },
  secondaryPressed: {
    backgroundColor: colors.primaryLight,
  },
  text: {
    backgroundColor: 'transparent',
    height: 44,
  },
  disabled: {
    backgroundColor: colors.border,
    borderColor: colors.border,
  },
  label: {
    textAlign: 'center',
  },
  primaryLabel: {
    color: colors.textInverse,
  },
  secondaryLabel: {
    color: colors.primary,
  },
  textLabel: {
    color: colors.primary,
  },
  disabledLabel: {
    color: colors.textSecondary,
  },
});
