import { Dispatch, SetStateAction } from "react";

export interface AuthContextType {
    setAuth: () => void | Dispatch<SetStateAction<string>> ;
}

