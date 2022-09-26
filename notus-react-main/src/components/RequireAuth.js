import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const RequireAuth = ({ allowedForms }) => {
    const { auth } = useAuth();
    const location = useLocation();
//console.log("auth forms>>", auth.forms)
//console.log("allowedForms>>", allowedForms)
    return (
        auth?.forms?.find(form => allowedForms?.includes(form))
            ? <Outlet />
            : auth?.accessToken //changed from user to accessToken to persist login after refresh
                ? <Navigate to="/history" state={{ from: location }} replace />
                : <Navigate to="/auth" state={{ from: location }} replace />
    );
}

export default RequireAuth;