"use server"

import { z } from 'zod';
import { EmailSchema } from '../schemas';
import { REQUIRED_FIELD_ERROR } from '../utils/terms';

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

    return await login(validateFileds.data);
}


async function login(data: { email: string, password: string }): Promise<LoginState> {

    try {
        const response = await fetch("https://eb57ce97-9be9-41b9-8f62-f2c15c52591d.mock.pstmn.io/login_success", {
            body: JSON.stringify(data),
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            cache: "no-cache",
        });

        if (response.ok) {
            let rsData = await response.json()
            return { success: true, tokens: rsData }
        } else if (response.status === 401) {
            return { success: false, message: "Invalid email or password." }
        } else {
            return { success: false, message: "Something went wrong. Please try again." }
        }
    } catch (error) {
        console.error(error);
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        return { success: false, message }
    }
}

