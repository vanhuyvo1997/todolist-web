"use client"

import { ArrowRightStartOnRectangleIcon, TrashIcon, UserGroupIcon } from "@heroicons/react/24/outline";
import { useGroupTypeContext } from "../context/group-type-context";
import clsx from "clsx";

export default function GroupItem({ groupId , selected = false }: { groupId: string, selected?: boolean}) {
  const groupType = useGroupTypeContext()

  return <div className={
    clsx("p-1 rounded-md flex items-center relative gap-2  pr-7 cursor-default", selected ? "bg-[#6FBC62] " : "bg-[#E9E9E9] hover:bg-[#d1d1d1]")
  }>
    <UserGroupIcon className="h-10 w-auto shrink-0" />
    <div className="w-full flex flex-col overflow-hidden">
      <div className="text-ellipsis overflow-hidden whitespace-nowrap ">Group name is very long, you have to be careful</div>
      <small>{groupId}</small>
    </div>
    {groupType === "Owning" ? <TrashIcon className="h-6 w-auto absolute right-1 cursor-pointer" title="Delete group" /> : <ArrowRightStartOnRectangleIcon className="cursor-pointer h-6 w-auto absolute right-1" title="Leave group" />}
  </div>
}