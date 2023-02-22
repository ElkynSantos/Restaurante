import axios from 'axios';

export async function CreateProduct(productName, productPrice) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/products/',
        data: {
            productName,
            productPrice,
        },
    };
    const response = await axios.request(options);

    return response.data;
}

export async function editar(productCode, productName, productPrice) {
    const options = {
        method: 'PATCH',
        url: 'http://localhost:3000/products/:id',
        data: {
            productCode,
            productName,
            productPrice,
        },
    };
    const response = await axios.request(options);

    return response.data;
}
