import { Navigate } from "react-router-dom";
import VerifyTokenService from "../../Services/VerifyTokenService";
import { UseContext } from "../../Services/ContextProject";

const RequireAuth =({role, children}) => {
    const {token, user} = UseContext();

    if(!token){
        return <Navigate replace to={"/login"} />
    }

    if(!user || user.role !== role){
        return <Navigate replace to={"/404"} />
    }

    return children;
}

export default RequireAuth;