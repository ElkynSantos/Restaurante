import axios from 'axios';

export async function Register(
    name,
    lastName,
    rol,
    dni,
    gender,
    birthday,
    placeofBirth,
    phone,
    email,
    password
) {
    console.log(
        name,
        lastName,
        rol,
        dni,
        gender,
        birthday,
        placeofBirth,
        phone,
        email,
        password
    );

    // console.log(placeofBirth);
    const options = {
        method: 'POST',
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/users/`,
        data: {
            name,
            lastName,
            rol,
            dni,
            gender,
            birthday,
            placeofBirth,
            phone,
            email,
            password,
        },
        withCredentials: true,
    };

    const response = await axios.request(options);

    return response.data;
}
