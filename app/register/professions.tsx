import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FacebookConnect } from '@/components/FacebookConnect';
import { RegisterStep } from '@/components/RegisterStep';
import { Badge } from '@/components/ui';
import { PROFESSIONS } from '@/constants/professions';
import { colors, spacing, typography } from '@/theme';

export default function RegisterProfessionsScreen() {
  const router = useRouter();
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (profession: string) => {
    setSelected((current) =>
      current.includes(profession)
        ? current.filter((item) => item !== profession)
        : [...current, profession],
    );
  };

  return (
    <RegisterStep
      step={5}
      total={5}
      title="Choose your professions"
      subtitle="Select all that apply. You can offer multiple services."
      onContinue={() => router.replace('/(tabs)')}
      continueDisabled={selected.length === 0}
    >
      <Text style={styles.hint}>{selected.length} selected</Text>
      <View style={styles.grid}>
        {PROFESSIONS.map((profession) => (
          <Badge
            key={profession}
            label={profession}
            selected={selected.includes(profession)}
            onPress={() => toggle(profession)}
          />
        ))}
      </View>

      <View style={styles.facebookSection}>
        <FacebookConnect compact />
      </View>
    </RegisterStep>
  );
}

const styles = StyleSheet.create({
  hint: {
    ...typography.bodySmall,
    color: colors.textSecondary,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
  },
  facebookSection: {
    marginTop: spacing.lg,
  },
});
