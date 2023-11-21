import { getProtectedSession } from '@/helpers/getProtectedSession';
import React from 'react';

export default async function Protected() {
  const session = await getProtectedSession();
  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-orange-300">
      {'Welcome, ' + session.user.name}
    </div>
  );
}
