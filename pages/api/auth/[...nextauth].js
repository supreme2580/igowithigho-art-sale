import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/auth/signin"
  },
  callbacks: {
    async session({ session, token, user }) {
      {
        //incase we need a unique id for the user
      }
      session.user.id = token.sub
      return session;
    }
  },
  secret: process.env.GOOGLE_CLIENT_SECRET
})