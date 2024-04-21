'use server'

import { z } from "zod";
import { capitalize, onlyLetterRegex, passwordRegex } from "../utils/utils";
import { CONTAINS_OTHER_THAN_ALPHABET_ERROR as CONTAINS_NOT_ONLY_ALPHABET_ERROR, INVALID_EMAIL_ERROR, INVALID_PASSWORD_ERROR, LESS_THAN_MINIMUM_ERROR, MAXIMUM_EXCEEDED_ERROR, INVALID_FIELDS_ERROR, PASSWORD_NOT_MATCH_ERROR, REQUIRED_FIELD_ERROR } from "../utils/terms";

export type RegisterState = {
    success: boolean,
    message?: string, fieldErrors?: {
        firstName?: string[],
        lastName?: string[],
        email?: string[],
        password?: string[],
        confirmPassword?: string[],
    }
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
    email: z.coerce.string()
        .trim()
        .email({ message: INVALID_EMAIL_ERROR }),
    password: z.coerce.string()
        .trim()
        .min(8, LESS_THAN_MINIMUM_ERROR.replace(/%d/g, '8'))
        .regex(passwordRegex, { message: INVALID_PASSWORD_ERROR }),
    confirmPassword: z.coerce.string()
        .trim()
    // .min(8, { message: LESS_THAN_MINIMUM_ERROR.replace(/%d/g, '8') })
});

export async function register(previousState: RegisterState, formData: FormData): Promise<RegisterState> {

    const validatedFields = registerSchema.safeParse(Object.fromEntries(formData));

    if (!validatedFields.success) {
        console.log(validatedFields.error.flatten())
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

    await new Promise(resolve => setTimeout(resolve, 5000));


    console.log(validatedFields);
    return { success: true, message: 'Register successfully.' }

}