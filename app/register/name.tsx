import { useRouter } from 'expo-router';
import { useState } from 'react';
import { RegisterStep } from '@/components/RegisterStep';
import { Input } from '@/components/ui';

export default function RegisterNameScreen() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <RegisterStep
      step={1}
      total={5}
      title="What's your name?"
      subtitle="Use your real name or a nickname — whatever feels right."
      onContinue={() => router.push('/register/photo')}
      continueDisabled={name.trim().length < 2}
    >
      <Input
        label="Name or nickname"
        placeholder="e.g. Alex"
        value={name}
        onChangeText={setName}
        autoFocus
      />
    </RegisterStep>
  );
}
