import { useState, useEffect, createContext, ReactNode } from "react";
import { Report } from "../api/types";
import clientAxios from "../config/clientAxios";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";


export interface DashContextType {
  dashboard: Report | null | [];
}

const initialDashContext: DashContextType = {
  dashboard: null,
};

export const DashContext = createContext<DashContextType>(initialDashContext);


interface DashProviderProps {
  children: ReactNode;
}

export const DashProvider = ({ children }: DashProviderProps) => {
  const navigate = useNavigate();


  const [dashboard, setDashboard] = useState(initialDashContext.dashboard);
  const { auth } = useAuth()

  useEffect(() => {
    const token = localStorage.getItem("token");
    const authUser = async () => {
      if (!token) {
        
        return
      }

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await clientAxios("/report", config);
        setDashboard(data)
        
        navigate('/dashboard')
      } catch (error) {
        setDashboard([])
      } 
    };
    authUser();
  }, [auth]);
  const value: DashContextType = { dashboard };
  return <DashContext.Provider value={value}>{children}</DashContext.Provider>;
};
