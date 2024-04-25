import { z } from "zod";
import { INVALID_EMAIL_ERROR, INVALID_PASSWORD_ERROR, LESS_THAN_MINIMUM_ERROR } from "./utils/terms";
import { passwordRegex } from "./utils/utils";

export const PasswordSchema = z.coerce.string()
    .trim()
    .min(8, LESS_THAN_MINIMUM_ERROR.replace(/%d/g, '8'))
    .regex(passwordRegex, { message: INVALID_PASSWORD_ERROR });

export const EmailSchema = z.coerce.string()
    .trim()
    .email({ message: INVALID_EMAIL_ERROR });