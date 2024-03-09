"use client"


import GroupItem from "./group-item";
import { GroupType, GroupTypeContext } from "../context/group-type-context";
import GroupTitle from "./group-title";

export default function Groups({ type }: { type: GroupType }) {
  return <GroupTypeContext.Provider value={type}>
    <div className="border-dashed border-[1px] rounded-md p-1 shadow-md">      
      <GroupTitle/>
      <div className="flex flex-col gap-1 max-h-72 overflow-y-scroll">
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123" selected/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
        <GroupItem groupId="#123"/>
      </div>
    </div>
  </GroupTypeContext.Provider>


}