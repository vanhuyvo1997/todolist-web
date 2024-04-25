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


    return { success: false };
}