import SigninForm from '@/components/forms/SigninForm';
import { getAuthScreensSession } from '@/helpers/getAuthScreensSession';
import React from 'react';

export default async function Signin() {
  await getAuthScreensSession();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-300">
      <SigninForm />
    </main>
  );
}
