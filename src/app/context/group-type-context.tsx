import { createContext, useContext } from "react"

export type GroupType = "Owning" | "Participating";
export const GroupTypeContext = createContext<GroupType>("Owning");
export function useGroupTypeContext() {
  return useContext(GroupTypeContext);
}