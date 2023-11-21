import { getUnprotectedSession } from '@/helpers/getUnprotectedSession';
import React from 'react';

export default async function UnProtected() {
  const session = await getUnprotectedSession();

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-orange-300">
      {`Welcome, ${session?.user?.email ?? 'who are you?'}`}
    </div>
  );
}
