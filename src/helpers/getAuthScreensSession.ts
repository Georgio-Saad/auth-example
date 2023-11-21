import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

export async function getAuthScreensSession() {
  // CHECKS FOR SESSION AND REDIRECTS IF THERE IS ONE

  const session = await getServerSession(authOptions);

  if (session) redirect('/my-account');

  return session;
}
