import MainGroupContent from "../ui/main-group-content";
import MainGroupHeader from "../ui/main-group-header";

export default function Page(){
  return <div className="border-dashed border-[1px] p-1 min-h-screen flex flex-col">
    <MainGroupHeader />
    <MainGroupContent />
  </div>;
}