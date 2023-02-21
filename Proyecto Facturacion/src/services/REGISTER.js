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
    // console.log(placeofBirth);
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/users/',
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
    };

    //console.log(options.data);
    const response = await axios.request(options);
    // console.log(response);

    return response.data;
}
