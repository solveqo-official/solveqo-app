import { useRouter } from 'expo-router';
import { useState } from 'react';
import { RegisterStep } from '@/components/RegisterStep';
import { Input } from '@/components/ui';

export default function RegisterRegionScreen() {
  const router = useRouter();
  const [region, setRegion] = useState('');

  return (
    <RegisterStep
      step={4}
      total={5}
      title="Your region or city"
      subtitle="This helps match you with local opportunities."
      onContinue={() => router.push('/register/services')}
      continueDisabled={region.trim().length < 2}
    >
      <Input
        label="Region / City"
        placeholder="e.g. Barcelona"
        value={region}
        onChangeText={setRegion}
        autoFocus
      />
    </RegisterStep>
  );
}
