import { useContext } from "react";
import { DashContext, DashContextType } from "../context/DashProvider";

export const useDash = (): DashContextType => {

    return useContext(DashContext);
}