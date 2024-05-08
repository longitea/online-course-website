import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/authContext";

export const AuthRoute = ({ redirect = "/" }) => {
  const { user } = useAuth();
  if (user) <Navigate to={redirect} />;
  return <Outlet />;
};
