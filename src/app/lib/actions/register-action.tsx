'use server'

import { z } from "zod";
import { capitalize, onlyLetterRegex } from "../utils/utils";
import { CONTAINS_OTHER_THAN_ALPHABET_ERROR as CONTAINS_NOT_ONLY_ALPHABET_ERROR, MAXIMUM_EXCEEDED_ERROR, INVALID_FIELDS_ERROR, PASSWORD_NOT_MATCH_ERROR, REQUIRED_FIELD_ERROR } from "../utils/terms";
import { EmailSchema, PasswordSchema } from "../schemas";

export type RegisterState = {
    success: boolean,
    message?: string,
    fieldErrors?: RegisterFildErrors,
}

type RegisterFildErrors = {
    firstName?: string[],
    lastName?: string[],
    email?: string[],
    password?: string[],
    confirmPassword?: string[],
}



const registerSchema = z.object({
    firstName: z.coerce.string()
        .trim()
        .min(1, { message: REQUIRED_FIELD_ERROR })
        .max(32, { message: MAXIMUM_EXCEEDED_ERROR.replace(/%d/g, '32') })
        .regex(onlyLetterRegex, { message: CONTAINS_NOT_ONLY_ALPHABET_ERROR })
        .transform(capitalize),
    lastName: z.coerce.string()
        .trim()
        .min(1, { message: REQUIRED_FIELD_ERROR })
        .max(32, { message: MAXIMUM_EXCEEDED_ERROR.replace(/%d/g, '32') })
        .regex(onlyLetterRegex, { message: CONTAINS_NOT_ONLY_ALPHABET_ERROR })
        .transform(capitalize),
    email: EmailSchema,
    password: PasswordSchema,
    confirmPassword: z.coerce.string()
        .trim(),
});

export async function registerAction(previousState: RegisterState, formData: FormData): Promise<RegisterState> {

    const validatedFields = registerSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        return { success: false, message: INVALID_FIELDS_ERROR, fieldErrors: validatedFields.error.flatten().fieldErrors }
    }

    if (validatedFields.data.confirmPassword !== validatedFields.data.password) {
        return {
            success: false,
            message: INVALID_FIELDS_ERROR,
            fieldErrors: {
                confirmPassword: [PASSWORD_NOT_MATCH_ERROR]
            }
        }
    }

    return register(validatedFields.data)
}

type RegisterData = { firstName: string, lastName: string, email: string, password: string, confirmPassword: string }

async function register(data: RegisterData) {
    try {
        console.log(process.env.REGISTER_API);
        const response = await fetch(process.env.REGISTER_API, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
            cache: 'no-store',
        });
        if (response.ok) {
            return { success: true, message: 'Register successfully.' }
        } else if (response.status === 409) {
            return {
                success: false,
                message: "Invalid fields",
                fieldErrors: {
                    email: ["This email has been in use."]
                }
            };
        } else {
            return { success: false, message: "Something went wrong" };
        }
    } catch (error) {
        let message;
        if (error instanceof Error) message = error.message;
        else message = String(error);
        console.error(message);
        return { success: false, message: message }
    }
}