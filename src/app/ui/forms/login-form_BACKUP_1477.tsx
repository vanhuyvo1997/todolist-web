"use client"

import Link from "next/link";
import Button from "../inputs/button";
import LabeledInput from "../inputs/labeled-input";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import loginAction, { LoginState } from "@/app/lib/actions/login-action";
import FormErrors from "./form-errors";
import { useRouter } from "next/navigation";


const initialLoginState: LoginState = { success: false };

export default function LoginForm() {
  useEffect(() => {
    document.getElementById("email")?.focus();
  }, []);

  const rounter = useRouter();
  const [formState, formAction] = useFormState(loginAction, initialLoginState);
<<<<<<< HEAD

  useEffect(() => {
    if (formState.success) {

      localStorage.setItem("accessToken", formState.tokens!.accessToken!);
      localStorage.setItem("refreshToken", formState.tokens!.refreshToken!);

      rounter.push("/");
    }
  }, [formState, rounter]);
=======
>>>>>>> c7571ba (#2 remove console.log)

  return <form className="flex flex-col gap-2" action={formAction}>
    <h1 className='text-center text-2xl my-2 mb-5'>Log in with Tasks account </h1>

    <LabeledInput id="email" type="email" labelContent="Email" placeholder="Your email" name="email" errors={formState.fieldErrors?.email} />

    <LabeledInput id="password" type="password" labelContent="Password" placeholder="Your password" name="password" errors={formState.fieldErrors?.password} />

    <FormErrors message={formState.message} />

    <Button size="L" className="bg-[#6FBC62] my-5" content="Login" submit />

    <p className="text-center">or You do not have account? <Link className="text-blue-500 hover:text-blue-300 active:text-orange-400 visited:text-blue-800" href="/register">Let&apos;s create one.</Link></p>

  </form>;
}