import axios from 'axios';

export async function CreateTax(taxName, taxPercentage) {
    const options = {
        method: 'POST',
        url: 'http://localhost:3000/taxes/',
        data: {
            taxName,
            taxPercentage,
        },
    };
    const response = await axios.request(options);

    return response.data;
}

export const agetAllTaxes = async () => {
    return await fetch('http://localhost:3000/taxes').then((response) =>
        response.json()
    );
};

export const editTax = (tax) => {
    return fetch('http://localhost:3000/taxes', {
        method: 'PATCH',
        body: JSON.stringify(tax),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
};

export const deleteTax = (tax, status) => {
    return fetch('http://localhost:3000/taxes', {
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
