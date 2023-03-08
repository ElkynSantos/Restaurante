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

const editFacturas = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/editFacturas', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};


const newFactura = async (data) => {
  try {
    const response = await axios.post('http://localhost:3000/newFactura', data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export {
  getFacturas,
  editFacturas,
  newFactura,
};
