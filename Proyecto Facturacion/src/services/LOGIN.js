import axios from 'axios';

export async function login(user, userPassword) {
    const options = {
        method: 'POST',
        url: 'http://localhost:5000/auth/login',
        data: {
            user,
            userPassword,
        },
    };
    const response = await axios.request(options);

    return response.data;
}
