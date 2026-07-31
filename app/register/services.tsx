import { useRouter } from 'expo-router';
import { StyleSheet, View } from 'react-native';
import { RegisterStep } from '@/components/RegisterStep';
import { Button } from '@/components/ui';
import { spacing } from '@/theme';

export default function RegisterServicesScreen() {
  const router = useRouter();

  return (
    <RegisterStep
      step={5}
      total={5}
      title="Do you provide services?"
      subtitle="You can always add or update this later in your profile."
      hideContinue
    >
      <View style={styles.actions}>
        <Button title="Yes" onPress={() => router.push('/register/professions')} />
        <Button title="Not right now" variant="secondary" onPress={() => router.replace('/(tabs)')} />
      </View>
    </RegisterStep>
  );
}

const styles = StyleSheet.create({
  actions: {
    gap: spacing.sm,
  },
});
