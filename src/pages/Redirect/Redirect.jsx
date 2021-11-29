import VerifyTokenService from "../../Services/VerifyTokenService";
import { Navigate } from "react-router-dom";
import { UseContext } from "../../Services/ContextProject";

const rolePages = {
    "admin": "/admin",
    "user": "/user"
}

const Redirect = () => {
    const { user } = UseContext();

    if (!user) {
        return (<p>No se puede redireccionar</p>)
    }

    return <Navigate replace to={rolePages[user.role] ?? "/"} />;
}

export default Redirect;