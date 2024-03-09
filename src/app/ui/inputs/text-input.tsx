"use client"
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useState } from "react";

export default function TextInput({ id, type, placeholder }: { id?: string, type: "text" | "email" | "password", placeholder?: string, name: string}) {
  const [text, setText] = useState("");

  const isPassword = type === "password";
  const [isShowPassword, setIsShowPassword] = useState(false);
  function handleTogglePassword() {
    setIsShowPassword(!isShowPassword);
  }

  return <div className="relative">
    <input className={
      clsx("w-full rounded-md h-10 px-4 py-3 shadow-md pr-8", {
        "pr-14": isPassword
      })
    }
      value={text}
      id={id}
      type={isPassword ? (isShowPassword ? "text" : "password") : type}
      onChange={(e) => { setText(e.target.value) }}
      placeholder={placeholder} />

    {text.length !== 0 && <XMarkIcon onClick={() => setText("")}
      className={clsx("h-5 w-5 absolute top-1/2 right-2 -translate-y-1/2 hover:cursor-pointer", {
        "right-8": isPassword,
      })} />}
    {isPassword && (isShowPassword ? <EyeIcon className="h-5 w-5 absolute top-1/2 right-2 -translate-y-1/2 hover:cursor-pointer" onClick={handleTogglePassword} /> : <EyeSlashIcon className="h-5 w-5 absolute top-1/2 right-2 -translate-y-1/2" onClick={handleTogglePassword} />)}
  </div>
}