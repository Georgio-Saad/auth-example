'use client';

import { useSession } from 'next-auth/react';
import React from 'react';

interface UpdateSession {
  email: string;
}

export default function ClientPage() {
  const { data: session } = useSession();

  return (
    <div className="flex min-h-screen flex-col items-center p-24 bg-orange-300">
      {session?.user?.email}
    </div>
  );
}
