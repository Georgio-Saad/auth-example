import { User } from '@/app/api/auth/[...nextauth]/route';
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}
