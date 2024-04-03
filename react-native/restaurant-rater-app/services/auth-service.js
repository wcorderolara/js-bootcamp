import axios from 'axios';
import config from './config';

async function authenticate(method, args) {
    const response = await axios.post(`${config.baseUrl}/auth/${method}`, args)
    return response.data;
}

export async function login(email, password) {
    args = {
        email: email,
        password: password
    }

    return await authenticate('login', args);
}

export async function register(username, email, password) {
    args = {
        username: username,
        email: email,
        password: password
    }

    return await authenticate('register', args);
}
