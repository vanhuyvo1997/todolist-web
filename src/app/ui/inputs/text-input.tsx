"use client"
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { useRef, useState } from "react";

export default function TextInput({ id, type, placeholder }: { id?: string, type: "text" | "email" | "password", placeholder?: string, name: string }) {

  const [value, setValue] = useState('');

  const isEmpty = value.length === 0;

  const isPassword = type === "password";

  const [isShowPassword, setIsShowPassword] = useState(false);
  function toggleShowPassword() {
    setIsShowPassword(!isShowPassword);
    inputRef.current?.focus();
  }

  const inputRef = useRef<HTMLInputElement>(null);
  function handleClearValue() {
    setValue('');
    inputRef.current?.focus();
  }


  return <div className="flex bg-white rounded-md items-center">
    <div className="relative w-full">
      <input ref={inputRef} id={id} value={value} onChange={(e) => setValue(e.target.value)} type={isShowPassword ? "text" : type} className="bg-transparent w-full h-10 px-4 pr-6 py-3" />
      {!isEmpty && <XMarkIcon onClick={handleClearValue} className="absolute right-1 top-1/2 -translate-y-1/2" height={17} />}
    </div>
    {isPassword && <div className="p-1">
      {isShowPassword ? <EyeIcon height={17} onClick={toggleShowPassword} /> : <EyeSlashIcon onClick={toggleShowPassword} height={17} />}
    </div>}
  </div>
}  