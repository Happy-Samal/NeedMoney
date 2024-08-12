import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from "next-auth/providers/facebook";
import User from '@/models/User';
import ConnectDB from '@/db/ConnectDB';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorization: {
        params: {
          access_type: "offline",
        },
      },
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: {
        params: {
          access_type: "offline",
        },
      },
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
      authorization: {
        params: {
          access_type: "offline",
        },
      },
    })
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      try {
        await ConnectDB();
        const userExist = await User.findOne({ email: user.email });

        if (!userExist) {
          const newUser = new User({
            email: user.email,
            username: user.email.split("@")[0],
            image: user.image,
            provider: account.provider,
          });
          await newUser.save();
        }
        return true;
      } catch (error) {
        console.error('Error during sign-in:', error);
        return false;
      }
    },
    async session({ session, user, token }) {
      try {
        await ConnectDB();
        const dbUser = await User.findOne({ email: session.user.email });
        if (dbUser) {
          session.user.username = dbUser.username;
          session.user.image = dbUser.image;
        }
        return session;
      } catch (error) {
        console.error('Error during session retrieval:', error);
        return session;
      }
    },
  }
});

export { handler as GET, handler as POST };
