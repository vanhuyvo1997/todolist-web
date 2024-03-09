"use client"

import Link from "next/link";
import Button from "../inputs/button";
import LabeledInput from "../inputs/labeled-input";
import { useEffect } from "react";

export default function LoginForm() {
  useEffect(()=>{
    document.getElementById("email")?.focus();
  }, []);


  return <form className="flex flex-col gap-2">
    <h1 className='text-center text-2xl my-2 mb-5'>Log in with Tasks account </h1>

    <LabeledInput id="email" type="text" labelContent="Email" placeholder="Your email" name="email"/>

    <LabeledInput id="password" type="password" labelContent="Password" placeholder="Your password" name="password"/>

    <Button size="L" className="bg-[#6FBC62] my-5" content="Login" submit />

    <p className="text-center">or You do not have account? <Link className="text-blue-500 hover:text-blue-300 active:text-orange-400 visited:text-blue-800" href="/register">Let&apos;s create one.</Link></p>

  </form>;
}