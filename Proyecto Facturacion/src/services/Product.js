import axios from 'axios';

export async function CreateProduct(productName, productPrice, productId) {
    console.log(productPrice);
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/products/',
        data: {
            productName,
            productPrice,
            productId,
        },
    };
    const response = await axios.request(options);

    return response.data;
}

export async function editar(
    productId,
    productCode,
    productName,
    productPrice
) {
    const options = {
        method: 'PATCH',
        url: 'http://localhost:3000/products/:id',
        data: {
            productId,
            productCode,
            productName,
            productPrice,
        },
    };
    const response = await axios.request(options);

    return response.data;
}

export async function getproduct(product) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/products/productCodeDesc',
        data: {
            product,
        },
    };
    const response = await axios.request(options);

    return response.data;
}
