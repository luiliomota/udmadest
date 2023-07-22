import {useContext} from "react";
import {Context} from "../../context/auth";
import {Navigate, Outlet} from "react-router-dom";

export default function PrivateRoute ({ perfis }) {
    const { loading, authenticated, roles } = useContext(Context);

    // console.log("Roles: " + roles[0]);
    // console.log("Perfis: " + perfis);
    // console.log("Tem Perfis?: " + (perfis.indexOf(roles[0])));

    if (loading) {
        return <h2>Carregando..</h2>
    }

    if (authenticated && perfis && perfis.indexOf(roles[0]) === -1) {
        return <h2>Usuário não autorizado.</h2>
    }

    return authenticated ? <Outlet /> : <Navigate to="/register" />;
}