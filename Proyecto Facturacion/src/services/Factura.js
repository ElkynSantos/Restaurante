import axios from 'axios';
/*
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



*/

export async function CreateFactura(
    p_numeroFactura,
    p_nombreCliente,
    p_RtnCliente,
    p_fechaCreacion,
    p_subtotal,
    p_total,
    p_tarjetaEfectivo,
    p_cambio,
    p_anular,
    p_pendiente,
    p_pagado,
    p_idConfiguracionFactura,
    p_idOrden,
    p_usuarioAtiende
) {
    const hoy = new Date().toISOString().split('T')[0];
    console.log(hoy);
    await fetch(`http://localhost:3000/bills/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({
            numeroFactura: p_numeroFactura,
            nombreCliente: p_nombreCliente,
            RtnCliente: p_RtnCliente,
            fechaCreacion: p_fechaCreacion,
            subtotal: p_subtotal,
            total: p_total,
            tarjetaEfectivo: p_tarjetaEfectivo,
            cambio: p_cambio,
            anular: p_anular,
            pendiente: p_pendiente,
            pagado: p_pagado,
            idConfiguracionFactura: p_idConfiguracionFactura,
            idOrden: p_idOrden,
            usuarioAtiende: 'JORO7226',
        }),
    });
}

const getFacturas = async () => {
    return await fetch('http://localhost:3000/bills').then((response) =>
        response.json()
    );
};

export const getFactura = (Numero_factura) => {
    console.log('gerardo' + Numero_factura);
    return fetch('http://localhost:3000/bills/numFactura', {
        method: 'POST',
        body: JSON.stringify({ Numero_factura: Numero_factura }),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((response) => response.json());
};

export async function editFacturas(id, RTN_cliente, Nombre_cliente) {
    const options = {
        method: 'PATCH',
        url: 'http://localhost:3000/bills/',
        data: {
            id,
            RTN_cliente,
            Nombre_cliente,
        },
    };
    const response = await axios.request(options);

    return response.data;
}

const newFactura = async (data) => {
    try {
        const response = await axios.post(
            'http://localhost:3000/newFactura',
            data
        );
        return response.data;
    } catch (error) {
        console.error(error);
    }
};

const anularFacturass = async (id) => {
    try {
        const response = await axios.patch(
            'http://localhost:3000/bills/anular',
            id
        );
        return response.data;
    } catch (error) {
        console.log(error);
    }
};
export async function anularFactura(id) {
    const options = {
        method: 'PATCH',
        url: 'http://localhost:3000/bills/anular',
        data: {
            id,
        },
    };
    const response = await axios.request(options);

    return response.data;
}
export { getFacturas, newFactura };
