"use client"
import LabeledInput from "@/app/ui/inputs/labeled-input";
import Button from "../inputs/button";
import Link from "next/link";
import { useEffect } from "react";
import { register, RegisterState } from "@/app/lib/actions/register-action";
import { useFormState } from "react-dom";
import { Bounce, toast } from "react-toastify";

const initialState: RegisterState = { success: false, message: '', fieldErrors: {} }

export default function RegisterForm() {
  useEffect(() => {
    document.getElementById("firstName")?.focus();
  }, []);

  const [state, registerAction] = useFormState(register, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success(<>{state.message} <Link href="/login" className="text-blue-600 hover:underline">Let&apos;s login now.</Link></>);
    }
  }, [state]);


  return <form className="flex flex-col gap-2" action={registerAction}>
    <h1 className='text-center text-2xl my-2 mb-5'>Create new Tasks account</h1>
    <fieldset>
      <LabeledInput id="firstName" name="firstName" type="text" labelContent="Fist name" placeholder="Your first name" errors={state?.fieldErrors?.firstName} />

      <LabeledInput id="lastName" name="lastName" type="text" labelContent="Last name" placeholder="Your last name" errors={state?.fieldErrors?.lastName} />

      <LabeledInput id="email" name="email" type="email" labelContent="Email" placeholder="Your email" errors={state?.fieldErrors?.email} />

      <LabeledInput id="password" name="password" type="password" labelContent="Password" placeholder="Your password" errors={state?.fieldErrors?.password} />

      <LabeledInput id="confirmPassword" name="confirmPassword" type="password" labelContent="Confirm password" placeholder="Confirm your password" errors={state?.fieldErrors?.confirmPassword} />
    </fieldset>
    <div aria-atomic="true" aria-live="polite">
      {!state.success && state.message && <p className="mt-2 text-sm text-red-500"> {state.message}</p>}
    </div>
    <Button size="L" className="bg-[#6FBC62] my-5" content="Register" submit />

    <p className="text-center">or Already had an account? <Link className="text-blue-500 hover:text-blue-300 active:text-orange-400 visited:text-blue-800" href="/login">log in now.</Link></p>
  </form>;
}