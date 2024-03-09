import Image from "next/image";

export default function Profile(){
  return <div title="See profile" className="bg-[#979797] hover:bg-[#6FBC62] hover:cursor-pointer shadow-lg rounded-lg flex items-center gap-3 p-2">
    <div className="rounded-full bg-black border-1">
      <Image  src="/cat-avatar.png" alt="avatar" height="50" width="50"/>
    </div>
    <h1>Hello, Vo Van Huy</h1>
  </div>
}