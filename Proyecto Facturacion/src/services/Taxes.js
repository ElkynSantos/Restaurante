import axios from 'axios';

export async function CreateTax(taxName, taxPercentage) {
    const options = {
        method: 'POST',
        url: `${import.meta.env.VITE_REACT_APP_API_URL}/taxes/`,
        data: {
            taxName,
            taxPercentage,
        },
    };
    const response = await axios.request(options);

    return response.data;
}

export const agetAllTaxes = async () => {
    return await fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/taxes/`).then(
        (response) => response.json()
    );
};

export const editTax = (tax) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/taxes/`, {
        method: 'PATCH',
        body: JSON.stringify(tax),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
};

export const deleteTax = (tax, status) => {
    return fetch(`${import.meta.env.VITE_REACT_APP_API_URL}/taxes/`, {
        method: 'DELETE',
        body: JSON.stringify({
            taxId: tax,
            opt: status == 1 ? 0 : 1,
        }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
};
