import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";


const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation()

    if (loading){
        return <h2>Loading...</h2>
    }

    if(user){
        return children
    }

    <Navigate to="/login" state={{ from: location }} replace />
};

export default PrivateRoute;