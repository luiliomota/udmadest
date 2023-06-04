

import axios from "axios";

function config() {
    const customAxios = axios.create({
        baseURL: '',
        // baseURL: 'http://localhost:8084',
    });

    customAxios.defaults.headers['Access-Control-Allow-Origin'] = '*';

    return customAxios;
}

export default config();