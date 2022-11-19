import { Outlet, Navigate } from "react-router-dom";
import { Navigation} from "./Navigation/Navigation";

export const PageLayout = ({ user, onLogout}) => {
    if (!user){
        return <Navigate to="/Login" />
    }


    return (
        <div>
            <Navigation onLogout={onLogout}/>
            Page Layout
            <Outlet />
            
        </div>
    )
}