import { useContext } from "react";
import { GlobalContext } from "../context";

export default function useGlobalState() {
  return useContext(GlobalContext);
}
