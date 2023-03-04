import axios from 'axios';

export async function CreateProduct(
    productName,
    productPrice,
    productId,
    taxId
) {
    console.log(productPrice);
    const options = {
        method: 'POST',
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/products/`,
        data: {
            productName,
            productPrice,
            productId,
            taxId,
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
    productPrice,
    taxRate
) {
    const options = {
        method: 'PATCH',
        url: 'http://localhost:3000/products/productCodeDesc',
        data: {
            productId,
            productCode,
            productName,
            productPrice,
            taxRate,
        },
        withCredentials: true,
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

export async function EditStatus(productID, status) {
    const options = {
        method: 'DELETE',
        url: 'http://localhost:3000/products/productCodeDesc',
        data: {
            productID,
            status,
        },
    };
    const response = await axios.request(options);

    return response.data;
}
