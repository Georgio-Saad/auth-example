import NextAuth, { AuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import axios from 'axios';

const googleCallbackUrl = '';

interface SigninResponse {
  user: User;
  token: string;
}

interface User {
  id: number;
  profile_photo: string;
  passport: string;
  name: string;
  email: string;
  phone: string;
  country_id: number;
  about: string;
  remember_token: string | null;
  admin_notes: string | null;
  birthday: string;
  host: number;
  created_at: Date;
  updated_at: Date;
  profile_photo_path: string;
  passport_path: string;
  date_since: string;
  favorites_ids: number[];
  favorite_services_ids: number[];
  country: {
    id: number;
    title: string;
    created_at: Date | null;
    updated_at: Date | null;
  };
  token?: string;
}

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  pages: { signIn: '/auth/signin', newUser: '/auth/register' },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Email',
          type: 'password',
        },
      },
      authorize: async (credentials, req) => {
        if (!credentials?.email || !credentials.password) return null;

        try {
          const response = await axios.post(
            'https://akaria-backend.hellotree.dev/api/en/login',
            { email: credentials?.email, password: credentials?.password }
          );

          const data: SigninResponse = response.data;

          const returnedUser: User = { ...data.user, token: data.token };

          return returnedUser as any;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      if (account?.type === 'credentials') {
        token.creds = user;
        return token;
      }

      if (account) {
        try {
          const response = await axios.post(
            'https://akaria-backend.hellotree.dev/api/en/google-login',
            { id_token: account.id_token, google_id: account.providerAccountId }
          );

          const data: SigninResponse = response.data;

          const returnedUser: User = { ...data.user, token: data.token };

          token.meta = returnedUser;
        } catch (error) {
          console.log(error);
        }
      }

      return token;
    },
    async session({ session, token }) {
      if (token.creds) {
        session.user = token.creds;
        return session;
      }
      (session as any).user = token.meta;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
