import { PlusCircleIcon } from "@heroicons/react/24/outline";
import { useGroupTypeContext } from "../context/group-type-context"

export default function GroupTitle() {
  const groupType = useGroupTypeContext();

  return <div className="relative py-1 ">
    <h2 className="text-[#6FBC62] text-lg font-medium">{groupType}</h2>
    {groupType === "Owning" && <PlusCircleIcon title="Create new group" className="hover:cursor-pointer h-6 absolute top-0.5 right-2" />}
  </div>

}