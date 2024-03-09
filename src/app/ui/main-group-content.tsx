import TaskColumn from "./task-column";

export default function MainGroupContent(){
  return <div className="flex place-content-between gap-1 h-full bg-black">
    <TaskColumn/>
    <TaskColumn/>
    <TaskColumn/>
  </div>
}