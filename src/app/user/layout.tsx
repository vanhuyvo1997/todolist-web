import SideGroupsMenu from "../ui/side-groups-menu";
export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#DCDCDC]">
      <SideGroupsMenu/>
      <div className="mx-auto w-3/6 min-h-screen">{children}</div>
      <div className="fixed h-screen right-0 top-0 w-1/5">right</div>
    </div>
  );
}