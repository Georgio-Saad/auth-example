import AuthButton from '@/components/buttons/AuthButton';
import { getProtectedSession } from '@/helpers/getProtectedSession';
import React from 'react';

export default async function MyAccount() {
  const session = await getProtectedSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-300">
      <AuthButton session={session} />
      <p>{session?.user?.name}</p>
    </main>
  );
}
