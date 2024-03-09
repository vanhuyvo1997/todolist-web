import { TrashIcon, UserGroupIcon, UserPlusIcon } from "@heroicons/react/24/outline";

export default function MainGroupHeader(){
  return <div className="border-solid rounded-lg p-2 flex place-content-between items-center h-20">
    <div className="flex gap-3">
      <UserGroupIcon className="h-10 w-auto shrink-0" />
      <div className="flex flex-col">
        <h1 className="text-lg font-medium">Group name</h1>
        <small>#groupid</small>
      </div>
    </div>
    
    <div className="flex items-center gap-4">
      <div>
        150 participants
      </div>
      <UserPlusIcon className="h-6 w-auto shrink-0" title="Add member"/>
      <TrashIcon className="h-6 w-auto shrink-0" title="Delete group"/>
    </div>
  </div>
}