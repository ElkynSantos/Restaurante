import axios from 'axios';

export async function login(user, userPassword) {
    const options = {
        method: 'POST',
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/auth/login`,
        data: {
            user,
            userPassword,
        },
        withCredentials: true,
    };
    const response = await axios.request(options);

    return response.data;
}
