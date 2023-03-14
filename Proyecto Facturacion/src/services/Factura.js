import axios from 'axios';



const getFacturas = async () => {
  return await fetch('http://localhost:3000/bills').then((response) =>
  response.json()
); 
};

export const getFactura = (Numero_factura) => 
{
  console.log("gerardo"+Numero_factura);
  return fetch('http://localhost:3000/bills/numFactura', {
     method: "POST",
     body: JSON.stringify({ Numero_factura: Numero_factura }),
     headers: {
        'Content-Type': 'application/json',
     }
  }).then(response => response.json())
}

export async function editFacturas(
  id,RTN_cliente,Nombre_cliente
) {
  const options = {
      method: 'PATCH',
      url: 'http://localhost:3000/bills/',
      data: {
          id,
          RTN_cliente,
          Nombre_cliente
  
      },
  };
  const response = await axios.request(options);

  return response.data;
}

const newFactura = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/newFactura', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const anularFactura = async (data) => {
  try {
    const response = await axios.patch('http://localhost:3000/bills/anular', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export {
  getFacturas,
  newFactura,
  anularFactura
};
