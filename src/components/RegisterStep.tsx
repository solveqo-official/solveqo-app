import { ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button, Screen } from '@/components/ui';
import { colors, spacing, typography } from '@/theme';

interface RegisterStepProps {
  step: number;
  total: number;
  title: string;
  subtitle?: string;
  children: ReactNode;
  buttonTitle?: string;
  onContinue?: () => void;
  secondaryAction?: ReactNode;
  continueDisabled?: boolean;
  hideContinue?: boolean;
}

export function RegisterStep({
  step,
  total,
  title,
  subtitle,
  children,
  buttonTitle = 'Continue',
  onContinue,
  secondaryAction,
  continueDisabled = false,
  hideContinue = false,
}: RegisterStepProps) {
  return (
    <Screen
      scroll
      contentContainerStyle={styles.content}
      footer={
        hideContinue ? (
          secondaryAction ? <View style={styles.footer}>{secondaryAction}</View> : undefined
        ) : (
          <View style={styles.footer}>
            {secondaryAction}
            <Button
              title={buttonTitle}
              onPress={onContinue!}
              disabled={continueDisabled}
            />
          </View>
        )
      }
    >
      <Text style={styles.stepLabel}>
        Step {step} of {total}
      </Text>
      <Text style={styles.title}>{title}</Text>
      {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
      <View style={styles.body}>{children}</View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingTop: spacing.xl,
  },
  stepLabel: {
    ...typography.caption,
    fontWeight: '600',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: colors.primary,
    marginBottom: spacing.sm,
  },
  title: {
    ...typography.heading1,
    letterSpacing: -0.5,
    color: colors.textPrimary,
    marginBottom: spacing.sm,
  },
  subtitle: {
    ...typography.body,
    color: colors.textSecondary,
    marginBottom: spacing.lg,
  },
  body: {
    marginTop: spacing.md,
    gap: spacing.md,
  },
  footer: {
    gap: spacing.sm,
  },
});
