import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth, { AuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/github"
import { prismaClient } from "./prisma"

export const authOptions: AuthOptions = {
  adapter:PrismaAdapter(prismaClient),
  // Configure one or more authentication providers
  providers: [
   GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)