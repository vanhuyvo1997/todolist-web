// + control behaviour of the library.
// + specify custom authentication logic, adapters, etc. 
/* In this file we’ll pass in all the options to the
 framework specific initalization function and then export
 the route handler(s), signin and signout methods, and more. */

//  You can name this file whatever you want and place it wherever you like.

import NextAuth from "next-auth";
import { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";



const providers: Provider[] = [
    {
        id: process.env.AUTH_MYTASK_ID,
        name: "MyTask",
        issuer: process.env.AUTHORIZATION_SERVER_BASE_URL,
        clientId: process.env.AUTH_MYTASK_ID,
        clientSecret: process.env.AUTH_MYTASK_SECRET,
        type: "oidc",
        authorization: { params: { scope: "openid profile email read write" } },
        checks: ["state", "pkce"],
        profile(profile) {
            console.log(profile)
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.picture,
            };
        },
    },
    Credentials({
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {
            console.log(credentials);
            return {};
        }
    }),
    Google,
    Github,
]

export const providerMap = providers.map((provider) => {
    if (typeof provider === "function") {
        const providerData = provider()
        return { id: providerData.id, name: providerData.name }
    } else {
        return { id: provider.id, name: provider.name }
    }
})

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers,
    pages: { signIn: "/login" },
    debug: true
});
