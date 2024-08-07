import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import api from '../../../Api';
import {configs} from "eslint-plugin-prettier";

const DefaultLayout = React.lazy(() => import('./../../../layout/DefaultLayout'));


export default function useAuth() {

    const navigate = useNavigate();

    const [authenticated, setAuthenticated] = useState(false);
    const [roles, setRoles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [mensagens, setMensagens] = useState("");

    useEffect(() => {
        const token = sessionStorage.getItem('token');
        const roles = sessionStorage.getItem('roles');

        if(token) {
            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
            setRoles(JSON.parse(roles));
        }
        setLoading(false);

    }, []);

    async function handleLogin({ username, password }) {
        try {
            const {data: {token, email, perfis}, status} = await api.post('/auth', {
                email: username,
                senha: password,
            });

            if(status === 200) {
                sessionStorage.setItem('token', JSON.stringify(token));
                sessionStorage.setItem('roles', JSON.stringify(perfis));

                api.defaults.headers.Authorization = `Bearer ${token}`;
                api.interceptors.request.use(function (configs) {
                    if(tokenExpirado(configs.headers['Authorization'])) {
                        setMensagens("Sessão expirada. Faça login novamente.")
                        handleLogout();
                    }
                    return configs;
                }, function (error){
                    return Promise.reject(error);
                });

                setAuthenticated(true);
                setRoles(perfis);
                setMensagens("");

                navigate('/painel');
            }
        } catch (error) {
            if (error.response){
                setMensagens("Usuário e/ou senha inválido(s).");
                console.warn(error.response.status);
            }
        }
    }

    function handleLogout() {
        setAuthenticated(false);
        setRoles([]);
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('roles');
        api.defaults.headers.Authorization = undefined;
    }

    function tokenExpirado (token){
        if (api.defaults.headers.Authorization !== undefined) {
            const jwtPayload = JSON.parse(window.atob(token.split('.')[1]));
            return (jwtPayload.exp * 1000) < new Date().getTime();
        } else {
            return false;
        }
    }

    return { authenticated, roles, loading, mensagens, handleLogin, handleLogout };
}