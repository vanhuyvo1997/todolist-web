"use client"
import LabeledInput from "@/app/ui/inputs/labeled-input";
import Button from "../inputs/button";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { registerAction, RegisterState } from "@/app/lib/actions/register-action";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import FormErrors from "./form-errors";

const initialState: RegisterState = { success: false, message: '', fieldErrors: {} }

export default function RegisterForm() {

  const formRef = useRef<HTMLFormElement>(null);
  useEffect(() => {
    document.getElementById("firstName")?.focus();
  }, []);

  const [state, formAction] = useFormState(registerAction, initialState);

  useEffect(() => {
    if (state.success) {
      (document.getElementById("firstName") as HTMLInputElement).value = "";
      (document.getElementById("lastName") as HTMLInputElement).value = "";
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("password") as HTMLInputElement).value = "";
      (document.getElementById("confirmPassword") as HTMLInputElement).value = "";
      toast.success(<>{state.message} <Link href="/login" className="text-blue-600 hover:underline">Let&apos;s login now.</Link></>);
    }
  }, [state]);


  return <form ref={formRef} className="flex flex-col gap-2" action={formAction}>
    <h1 className='text-center text-2xl my-2 mb-5'>Create new Tasks account</h1>
    <fieldset>
      <LabeledInput id="firstName" name="firstName" type="text" labelContent="Fist name" placeholder="Your first name" errors={state?.fieldErrors?.firstName} />

      <LabeledInput id="lastName" name="lastName" type="text" labelContent="Last name" placeholder="Your last name" errors={state?.fieldErrors?.lastName} />

      <LabeledInput id="email" name="email" type="email" labelContent="Email" placeholder="Your email" errors={state?.fieldErrors?.email} />

      <LabeledInput id="password" name="password" type="password" labelContent="Password" placeholder="Your password" errors={state?.fieldErrors?.password} />

      <LabeledInput id="confirmPassword" name="confirmPassword" type="password" labelContent="Confirm password" placeholder="Confirm your password" errors={state?.fieldErrors?.confirmPassword} />
    </fieldset>

    <FormErrors message={state.message} />

    <Button size="L" className="bg-[#6FBC62] my-5" content="Register" submit />

    <p className="text-center">or Already had an account? <Link className="text-blue-500 hover:text-blue-300 active:text-orange-400 visited:text-blue-800" href="/login">log in now.</Link></p>
  </form>;
}