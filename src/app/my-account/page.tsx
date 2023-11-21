import AuthButton from '@/components/buttons/AuthButton';
import { getProtectedSession } from '@/helpers/getProtectedSession';
import Image from 'next/image';
import React from 'react';

export default async function MyAccount() {
  const session = await getProtectedSession();

  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-orange-300">
      <AuthButton session={session} />
      <section>
        <p>{session?.user?.name}</p>
        <p>{session?.user?.token}</p>
        <p>{session?.user?.email}</p>
        <p>{session?.user?.phone}</p>
        <p>{session?.user?.about}</p>
        <p>{session?.user?.country?.title}</p>
        <p>{session?.user?.birthday}</p>
        <p>{session?.user?.birthday}</p>
        {session?.user?.profile_photo_path && (
          <Image
            src={
              session?.user?.profile_photo_path ??
              'https://akaria-backend.hellotree.dev/storage/users_images/95082Rectangle3(5).png'
            }
            alt=""
            width={200}
            height={200}
          />
        )}
        <p>{session?.user?.birthday}</p>
        <p>{session?.user?.about}</p>
        <p>{session?.user?.country?.title}</p>
        <p>{session?.user?.date_since}</p>
      </section>
    </main>
  );
}
