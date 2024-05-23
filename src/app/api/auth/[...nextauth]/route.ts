import NextAuth from "next-auth";

const handler = NextAuth({
    providers: [
        {
            id: process.env.MYTASK_ID,
            clientId: process.env.MYTASK_ID,
            clientSecret: process.env.MYTASK_SECRET,
            name: "My Task",
            type: "oauth",
            wellKnown: `${process.env.AUTHORIZATION_SERVER_BASE_URL}/.well-known/openid-configuration`,
            profile(profile) {
                console.log(profile);
                return {
                    id: profile.sub,
                    name: profile.sub,
                    email: profile.sub,
                  }
            },
        },
    ]
})

export { handler as GET, handler as POST }