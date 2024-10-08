import type { NextAuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@auth/prisma-adapter";
import type { Adapter } from "next-auth/adapters";
import { compare } from "bcrypt";

import prisma from "@/lib/prismaClient/prismaClient";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email", placeholder: "email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (!user) {
          throw new Error("UserNotFound");
        }

        const isVerified = user.emailVerified;

        if (!isVerified) {
          throw new Error("UserNotAuthenticated");
        }

        const isPasswordValid =
          user.password && (await compare(credentials.password, user.password));

        if (!isPasswordValid) {
          throw new Error("InvalidPassword");
        }
        return {
          id: user.id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          firstName: token.firstName,
          lastName: token.lastName,
        },
      };
    },
    jwt: async ({ user: currentUser, token }) => {
      const user = await prisma.user.findUnique({
        where: { email: token.email as string },
      });
      if (user) {
        (token.firstName = user.firstName), (token.lastName = user.lastName);
      }
      return token;
    },
  },
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
};

export default NextAuth(authOptions);
