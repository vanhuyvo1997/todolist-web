'use client'

import clsx from "clsx";
import { useFormStatus } from "react-dom";

export default function Button({ size, submit, content, className, loadingText = "Processing..." }: { size: "S" | "M" | "L", submit: boolean, content: string, className: string, loadingText?: string }) {

  const { pending } = useFormStatus();

  return <button className={
    clsx(
      "rounded-md shadow-md my-1 text-white hover:bg-black hover:text-white disabled:bg-black disabled:text-blue-600",
      {
        "px-3 py-2 text-lg": size === "L",
        [className]: !!className
      })
  } type={submit ? "submit" : "button"} disabled={pending}>{!pending ? content : loadingText}</button>
}