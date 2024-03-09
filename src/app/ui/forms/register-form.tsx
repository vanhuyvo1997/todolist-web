"use client"
import LabeledInput from "@/app/ui/inputs/labeled-input";
import Button from "../inputs/button";
import Link from "next/link";
import { useEffect } from "react";

export default function RegisterForm() {
  useEffect(()=>{
    document.getElementById("firstName")?.focus();
  }, []);


  return <form className="flex flex-col gap-2">
    <h1 className='text-center text-2xl my-2 mb-5'>Create new Tasks account</h1>

    <LabeledInput id="firstName" name="firstName" type="text" labelContent="Fist name" placeholder="Your first name" />

    <LabeledInput id="lastName" name="lastName" type="text" labelContent="Last name" placeholder="Your last name" />

    <LabeledInput id="email" name="email" type="text" labelContent="email" placeholder="Your email" />

    <LabeledInput id="password" name="password" type="password" labelContent="Password" placeholder="Your password" />

    <LabeledInput id="confirmPassword" name="confirmPassword" type="password" labelContent="Confirm password" placeholder="Confirm your password" />

    <Button size="L" className="bg-[#6FBC62] my-5" content="Register" submit />

    <p className="text-center">or Already had an account? <Link className="text-blue-500 hover:text-blue-300 active:text-orange-400 visited:text-blue-800" href="/login">log in now.</Link></p>

  </form>;
}