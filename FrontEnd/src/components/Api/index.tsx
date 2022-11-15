import axios from 'axios';

function config() {
    const customAxios = axios.create({baseURL:'http://localhost:8080'});
    return customAxios;
}

export default config();
