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
import * as jose from 'jose';
import * as fs from 'fs';


type TokenClaim = {
    jti: string,
    sub: string,
    iat: number,
    exp: number,
    last_name: string,
    avatar: string,
    type: string,
    first_name: string,
    authorities: string[]
}

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
                refresh_token: "",
                access_token: "",
                authorities: ["USER"]
            };
        },
    },
    Credentials({
        credentials: {
            email: {},
            password: {},
        },
        authorize: async (credentials) => {
            try {
                const response = await fetch(process.env.LOGIN_API, {
                    headers: { "Content-Type": "application/json" },
                    method: "POST",
                    body: JSON.stringify({ email: credentials.email, password: credentials.password })
                });

                if (response.ok) {
                    const data = await response.json();
                    const key = fs.readFileSync(process.env.PUBLIC_KEY_FILE, "utf-8");
                    const ecPublicKey = await jose.importSPKI(key, "RS256");
                    let verifyResult = await jose.jwtVerify<TokenClaim>(data.accessToken, ecPublicKey);
                    return {
                        id: verifyResult.payload.jti,
                        email: verifyResult.payload.sub,
                        image: verifyResult.payload.avatar,
                        name: verifyResult.payload.first_name + " " + verifyResult.payload.last_name,
                        access_token: data.accessToken,
                        refresh_token: data.refreshToken,
                        authorities: verifyResult.payload.authorities,
                    };
                } else if (response.status === 404) {
                    throw new Error("User not found.");
                } else return null;
            } catch (error) {
                console.error(error);
                return null;
            }
        },
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
    callbacks: {
        jwt({ token, user }) {
            if (user) {
                token.access_token = user.access_token;
                token.refresh_token = user.refresh_token;
            }
            return token;
        },
        session({ session, token }) {
            if (token) {
                session.access_token = token.access_token;
                session.refresh_token = token.refresh_token;
            }
            console.log(session);
            return session;
        },
        redirect({ url, baseUrl }) {
            if (url.startsWith("/")) return `${baseUrl}${url}`;
            if (new URL(url).origin === baseUrl) return url;
            return baseUrl;
        }
    },
    pages: { signIn: "/login" },
    debug: true,
});
