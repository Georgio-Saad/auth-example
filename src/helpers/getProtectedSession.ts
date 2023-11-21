import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function getProtectedSession() {
  // REDIRECTS IF THERE IS NO SESSION

  const session = await getServerSession(authOptions);

  if (!session) return redirect('/auth/signin');

  return session;
}
