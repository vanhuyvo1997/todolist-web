"use client"
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useRef, useState } from "react";

type TextInputProps = {
  id?: string,
  type: "text" | "email" | "password",
  placeholder?: string,
  name: string,
  required?: boolean,
  errors?: string[],
  value: string,
  onChange: (e: string) => void
};

export default function TextInput({ id, type, placeholder, name, required, errors, value, onChange }: Readonly<TextInputProps>
) {


  const isEmpty = value.length === 0;

  const isPassword = type === "password";

  const [isShowPassword, setIsShowPassword] = useState(false);

  function toggleShowPassword() {
    setIsShowPassword(!isShowPassword);
    inputRef.current?.focus();
  }

  const inputRef = useRef<HTMLInputElement>(null);
  function handleClearValue() {
    onChange('');
    inputRef.current?.focus();
  }



  return <>
    <div className="flex bg-white rounded-md items-center">
      <div className="relative w-full">
        <input placeholder={placeholder} required={required} name={name} ref={inputRef} id={id} value={value} onChange={e => onChange(e.target.value)} type={isShowPassword ? "text" : type} className="bg-transparent w-full h-10 px-4 pr-6 py-3" />
        {!isEmpty && <XMarkIcon title="Clear" onClick={handleClearValue} className="absolute right-1 top-1/2 -translate-y-1/2" height={17} />}
      </div>
      {isPassword && <div className="p-1">
        {isShowPassword ? <EyeIcon title="Hide pasword" height={17} onClick={toggleShowPassword} /> : <EyeSlashIcon title="Show password" onClick={toggleShowPassword} height={17} />}
      </div>}
    </div>
    <div id={id ? id + "-errors" : undefined} aria-atomic="true" aria-live="polite">
      {errors && errors.length > 0 && errors.map(error => <p key={error} className="mt-2 text-sm text-red-500">* {error}</p>)}
    </div>
  </>
}  