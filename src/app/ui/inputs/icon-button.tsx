import { ReactNode } from "react";

export default function IconButton({ content,  icon}: { content: string, icon: ReactNode}) {
  return <div className="flex justify-center hover:bg-[#6FBC62] bg-[#979797] rounded-lg p-2 gap-2">
    {icon}
    <button type="button">{content}</button>
  </div>
}