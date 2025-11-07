import { authApi } from '@/lib/services/api-client'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        try {
          const data = await authApi.login({
            email: credentials?.email || '',
            password: credentials?.password || '',
          })

          if (data.token) {
            return {
              id: data.user.id,
              email: data.user.email,
              name: `${data.user.firstName} ${data.user.lastName}`,
              firstName: data.user.firstName,
              lastName: data.user.lastName,
              userType: data.user.userType,
              accessToken: data.token,
            } as any
          }

          return null
        } catch (error: any) {
          if (error.response?.status === 401) {
            throw new Error('Invalid email or password');
          } else if (error.response?.status === 400) {
            throw new Error(error.response?.data?.message || 'Invalid request');
          } else if (error.response?.status >= 500) {
            throw new Error('Authentication service is temporarily unavailable');
          } else {
            throw new Error('Authentication failed. Please try again.');
          }
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = (user as any).accessToken
        token.user = {
          id: user.id,
          firstName: (user as any).firstName,
          lastName: (user as any).lastName,
          userName: (user as any).userName,
          email: user.email!,
          userType: (user as any).userType,
        }
      }
      return token
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken as string
      session.user = token.user as any
      return session
    },
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
})

export { handler as GET, handler as POST }