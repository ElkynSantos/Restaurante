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
