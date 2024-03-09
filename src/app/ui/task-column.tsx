import { BarsArrowDownIcon, DocumentPlusIcon, PlusIcon } from "@heroicons/react/24/outline";
import Task from "./task";

export default function TaskColumn(){
  return <div className="w-full rounded-md p-2 bg-white flex flex-col">
    <div className="flex place-content-between items-center">
      <h2 className="text-xl">Title</h2>
      <div className="flex gap-3">
        <BarsArrowDownIcon className="h-6 w-auto" title="Sort"/>
        <DocumentPlusIcon className="h-6 w-auto" title="Add new task"/>
      </div>
    </div>
    <div className="flex flex-col gap-2 mt-2">
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </div>
  </div>
}