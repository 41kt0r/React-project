import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function RouteGuard() {
    const {isAuthenticated} = AuthContext();

    return isAuthenticated  
        ? <Outlet />
        : <Navigate to="/login" />
}