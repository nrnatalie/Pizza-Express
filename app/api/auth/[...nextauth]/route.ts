// import NextAuth, { AuthOptions } from "next-auth";
// import GitHubProvider from "next-auth/providers/github";

// export const authOptions: AuthOptions = {
//   providers: [
//     GitHubProvider({
//       clientId: process.env.GITHUB_ID || "",
//       clientSecret: process.env.GITHUB_SECRET || "",
//     }),
//   ],
// };

// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };
import NextAuth from 'next-auth';
import { authOptions } from '@/shared/constants/auth-options';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };