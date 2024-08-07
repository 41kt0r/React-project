import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";

export function GuestRouteGuard() {
    const {isAuthenticated} = useAuthContext();

    return isAuthenticated  
        ? <Outlet />
        : <Navigate to="/login" />
}

export function UserRouteGuard() {
    const {isAuthenticated} = useAuthContext();

    return !isAuthenticated  
        ? <Outlet />
        : <Navigate to="/" />
}