import { getServerSession } from 'next-auth';
import AuthButton from '../components/buttons/AuthButton';
import { authOptions } from './api/auth/[...nextauth]/route';

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-orange-300">
      <AuthButton session={session} />
    </main>
  );
}
