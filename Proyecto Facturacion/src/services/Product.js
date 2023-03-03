import axios from 'axios';

export async function CreateProduct(productName, productPrice, productId) {
    const options = {
        method: 'POST',
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/products/`,
        data: {
            productName,
            productPrice,
            productId,
        },
        withCredentials: true,
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
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/products/:id`,
        data: {
            productId,
            productCode,
            productName,
            productPrice,
        },
        withCredentials: true,
    };
    const response = await axios.request(options);

    return response.data;
}

export async function getproduct(product) {
    const options = {
        method: 'POST',
        url: `${
            import.meta.env.VITE_REACT_APP_API_URL
        }/products/:productCodeDesc`,
        data: {
            product,
        },
        withCredentials: true,
    };
    const response = await axios.request(options);

    return response.data;
}
