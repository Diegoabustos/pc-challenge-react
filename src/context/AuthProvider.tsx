import { useState, useEffect, createContext, ReactNode } from "react";
import { User } from "../api/types";
import clientAxios from "../config/clientAxios";

export interface AuthContextType {
  auth: User ;
  setAuth: React.Dispatch<React.SetStateAction<User>>;
  loading: boolean;
  logout: () => void;
}

const initialAuthContext: AuthContextType = {
  auth: {
    name: "Challenge"
  },
  setAuth: () => {},
  loading: false,
  logout: () => {},
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType>(initialAuthContext);

export const AuthProvider = ({ children }: AuthProviderProps) => {

  // States
  const [auth, setAuth] = useState(initialAuthContext.auth);;
  const [loading, setLoading] = useState(true)

  
  const token = localStorage.getItem("token");
  useEffect(() => {
    const authUser = async () => {
      if (!token) {
        setLoading(false);
        return
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientAxios("/me", config);
        setAuth(data)
      } catch (error) {
        setAuth({})
      } finally {
        setLoading(false)
      }
    };
    authUser();
  }, [token]);

  const logout = () => {
    setAuth({})
  }



  const value: AuthContextType = {
    auth,
    setAuth,
    loading,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

