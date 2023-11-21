import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';

export async function getUnprotectedSession() {
  // RETURNS SESSION SIMPLY WITH NO REDIRECTION
  const session = await getServerSession(authOptions);

  return session;
}
