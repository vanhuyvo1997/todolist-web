import Image from "next/image";
import { ReactNode } from "react";

export default function AuthenticationLayout({ children }: { children: ReactNode }) {
  return (
  <div className="max-w-lg mt-10 mx-auto flex flex-col items-center gap-6">
    <Image src="/logo.svg" alt="logo" height={86} width={108} priority/>
    <div className="rounded-lg py-6 px-6 w-full flex flex-col items-stretch bg-[#EFEFEF] shadow-lg">
      {children}
    </div>
  </div>);
}