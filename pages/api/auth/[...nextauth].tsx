import bcryptjs from 'bcryptjs';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import User from '../../../models/User';
import db from '../../../utils/db';

// Establish database connection outside of the authorize function
db.connect();

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },
    async session({ session, token }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    },
  },
  providers: [
    CredentialsProvider({
      async authorize({
        email,
        password,
      }: {
        email: string;
        password: string;
      }) {
        const user = await User.findOne({ email });
        if (user && bcryptjs.compareSync(password, user.password)) {
          const { _id, name, email, isAdmin } = user;
          return {
            _id,
            name,
            email,
            image: 'f',
            isAdmin,
          };
        }
        throw new Error('Invalid email or password');
      },
    }),
  ],
});
