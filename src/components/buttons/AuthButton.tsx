'use client';

import { Session } from 'next-auth';
import { signIn, signOut } from 'next-auth/react';
import React from 'react';

export default function AuthButton({ session }: { session: Session | null }) {
  return (
    <button
      onClick={() => {
        if (session) {
          return signOut();
        }

        return signIn();
      }}
    >
      {!session ? 'Signin' : 'Sign out'}
    </button>
  );
}
