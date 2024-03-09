import Image from "next/image";
import Profile from "./profile";
import IconButton from "./inputs/icon-button";
import Groups from "./groups";
import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/outline";

export default function SideGroupsMenu() {
  return <div className="fixed w-1/4 min-w-[300px] h-full px-2 py-3 flex flex-col items-stretch gap-2 shrink-0">
    <div className="p-2">
      <Image className="m-auto" src="/logo.svg" alt="logo" height={43} width={54} />
    </div>
    <Profile />
    <Groups type="Owning" />
    <Groups type="Participating" />
    <IconButton icon={<ArrowLeftEndOnRectangleIcon className="h-5" />} content="Log out" />
  </div>
}