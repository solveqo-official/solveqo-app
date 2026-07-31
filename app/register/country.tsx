import { useRouter } from 'expo-router';
import { useState } from 'react';
import { RegisterStep } from '@/components/RegisterStep';
import { Input } from '@/components/ui';

export default function RegisterCountryScreen() {
  const router = useRouter();
  const [country, setCountry] = useState('');

  return (
    <RegisterStep
      step={3}
      total={5}
      title="Where are you based?"
      subtitle="We'll show you relevant requests and professionals nearby."
      onContinue={() => router.push('/register/region')}
      continueDisabled={country.trim().length < 2}
    >
      <Input
        label="Country"
        placeholder="e.g. Spain"
        value={country}
        onChangeText={setCountry}
        autoFocus
      />
    </RegisterStep>
  );
}
