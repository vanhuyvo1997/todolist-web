"use server"

import { z } from 'zod';
import { EmailSchema } from '../schemas';
import { REQUIRED_FIELD_ERROR } from '../utils/terms';
import { signIn } from '../../../../auth';
import { CredentialsSignin } from 'next-auth';
import { redirect } from 'next/navigation';


export type LoginState = {
    success: boolean,
    message?: string,
    fieldErrors?: {
        email?: string[],
        password?: string[],
    },
    tokens?: {
        accessToken?: string,
        refreshToken?: string,
    }
}

const LoginSchema = z.object({
    email: EmailSchema,
    password: z.coerce.string().trim().min(1, { message: REQUIRED_FIELD_ERROR }),
})


export default async function loginAction(prevState: LoginState, formData: FormData): Promise<LoginState> {
    const validateFileds = LoginSchema.safeParse(Object.fromEntries(formData));
    if (!validateFileds.success) {
        return { success: false, message: "Invalid fields", fieldErrors: validateFileds.error.flatten().fieldErrors }
    }
    const { email, password } = validateFileds.data;
    try {
        await signIn("credentials", {
            redirectTo: "/user",
            email,
            password,
        })
        return { success: true }
    } catch (error) {
        if (error instanceof CredentialsSignin) return { success: false, message: "Invalid credentials." };
        else throw error;
    }
}

