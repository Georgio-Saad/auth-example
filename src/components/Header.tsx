import Link from 'next/link';
import React from 'react';
import AuthButton from './buttons/AuthButton';
import { getUnprotectedSession } from '@/helpers/getUnprotectedSession';

export default async function Header() {
  const session = await getUnprotectedSession();

  return (
    <header className="w-full flex flex-row justify-between items-center h-24 bg-yellow-200 bg-opacity-30 fixed">
      <div />
      <Link href="/">Home</Link>
      {session && <Link href="/my-account">My Account</Link>}
      <Link href="/protected">Protected</Link>
      <Link href="/un-protected">Public</Link>
      <Link href="/client-page">Client Page</Link>
      <AuthButton session={session} />
      <div />
    </header>
  );
}
