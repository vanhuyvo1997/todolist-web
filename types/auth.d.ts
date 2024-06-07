// types/next-auth.d.ts
import NextAuth from 'next-auth';


declare module "@auth/core/types" {
    interface User {
        access_token: string,
        refresh_token: string,
    }

    interface Session  {
        access_token: string;
        refresh_token: string;
    }
}

declare module "@auth/core/jwt" {
    interface JWT  {
        access_token: string;
        refresh_token: string;
    }
}
