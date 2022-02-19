import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 1000,
    headers: {"Access-Control-Allow-Origin": "*"}
});

export const exeCode = async code => instance.post('/exe-code', { code })
