import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectRoute = () => {
  const { auth, loading } = useAuth();

  if (loading) return "Cargando...";
  const token = localStorage.getItem("token")

  return <>{token ? 
      (
        <div className="flex bg-gray-100">
          <div className="flex-grow text-gray-800">
            <Outlet />
          </div>
        </div>
      )
    : <Navigate to="/" />}</>;
};
