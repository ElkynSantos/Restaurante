import axios from 'axios';

export async function resetPassword(email) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/auth/reset-password/',
        data: {
            email,
        },
    };
    const response = await axios.request(options);

    return response.data;
}
