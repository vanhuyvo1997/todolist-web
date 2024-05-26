'use client'

import clsx from "clsx";
import { ReactNode } from "react";
import { useFormStatus } from "react-dom";

export default function Button({ size, submit, content, className, loadingText = "Processing...", icon }: { size: "S" | "M" | "L", submit: boolean, content: string, className?: string, loadingText?: string, icon?: ReactNode }) {

  const { pending } = useFormStatus();

  return <button className={
    clsx(
      "rounded-md shadow-md my-1 text-white hover:bg-black hover:text-white disabled:bg-black disabled:text-blue-600 flex justify-center gap-2",
      {
        "px-3 py-2 text-lg": size === "L",
        "p-2 text-base": size === "M",
        "p-1 text-sm": size === "S",
        [className ? className : ""]: !!className
      })
  } type={submit ? "submit" : "button"} disabled={pending}>{icon&& icon}<span>{!pending ? content : loadingText}</span></button>
}
