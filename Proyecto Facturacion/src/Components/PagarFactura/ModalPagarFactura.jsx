import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect, useMemo } from 'react';
import { CloseButton } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {
    showModalCreateBill,
    closeModalCreateBill,
} from '../../features/crearFacturaSlice';

import {
    showpagarFacturaSlice,
    closepagarFacturaSlice,
} from '../../features/pagarFacturaSlice.js';

import { useDispatch, useSelector } from 'react-redux';
//import { CreateProduct } from '../../services/Factura';
import Swal from 'sweetalert2';
import { agetAllTaxes } from '../../services/Taxes';
import DataTable from 'react-data-table-component';
import Table from 'react-bootstrap/Table';
function modalPagarFactura() {
    const dispatch = useDispatch();
    const [Cliente, setCliente] = useState('');
    const [RTN, setRTN] = useState('');
    const [DatosFactura, setDatosFactura] = useState([]);
    const [DatosOrden, setDatosOrden] = useState([]);
    const [isChecked, setIsChecked] = useState(false);
    const [Monto, setMonto] = useState(0);
    const [Cambio, setCambio] = useState(0);

    const idFactura = useSelector((state) => state.pagarFacturaSlice).idFactura;
    const show2 = useSelector((state) => state.pagarFacturaSlice).modalState;

    




    const getBillInfo = async () => {
        try {
            const DatosFactura = await fetch(
                'http://localhost:3000/bills/numFactura',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({ Numero_factura: idFactura }),
                }
            );

            const datos = await DatosFactura.json();

            console.log(datos.factura);
            setDatosFactura(datos.factura);
            const ID_orden = datos.factura.id_orden;

            const respuesta = await fetch(
                'http://localhost:3000/orders/listorders',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({ billid: ID_orden }),
                }
            );

            const data1 = await respuesta.json();

            console.log(data1.newOrder.Datos);
            setDatosOrden(data1.newOrder.Datos);
            /*
            const data = await response.json();

            if (data) {
                console.log('DATOS DE FACTURA----------');
                console.log(data);
            }*/
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    };

    useEffect(() => {
        if (show2) {
            getBillInfo();
        }
    }, [show2]);



    const handleChange = (event) => {
        setIsChecked(event.target.checked);
      };
    


    const handleChangePagado = async () => {
        console.log('===============INFORMACION PRECISADA===============');

        const Atiende = localStorage.getItem('USER');

        console.log('ATIENDE: ' + Atiende);
        console.log('Lista Pedidos: ' + PedidosSeleccionados);

        const hoy = new Date().toISOString().split('T')[0];
        console.log(hoy);

        let CLIENTE = Cliente;
        let RTN_Final = RTN;

        if (CLIENTE.length === 0) {
            CLIENTE = 'Consumidor Final';
        }
        if (RTN_Final.length === 0) {
            RTN_Final = '0000000000000';
        }

        await fetch(`http://localhost:3000/bills/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                numeroFactura: '101',
                nombreCliente: CLIENTE,
                RtnCliente: RTN_Final,
                fechaCreacion: hoy,
                subtotal: 0.0,
                total: 0.0,
                tarjetaEfectivo: 0,
                cambio: 0.0,
                anular: 0,
                pendiente: 1, //
                pagado: 0, //
                idConfiguracionFactura: 1,
                listapedidos: PedidosSeleccionados,
                usuarioAtiende: Atiende,
            }),
        })
            .then((data1) => {

                Swal.fire({
                    text: data1.msg,
                    icon: 'success',
                });
            })
            .catch((error) => {
                Swal.fire({
                    text: 'No se pudo generar la factura',
                    icon: 'error',
                });
            });
    };

    const handleClose = () => {
        dispatch(closepagarFacturaSlice());
    };

    const handleShow = () => {
        dispatch(showModalCreateBill());
    };

    const handleMonto = (MontoIngresado) => {

       setMonto(MontoIngresado);

       let Cambio = MontoIngresado- DatosFactura.Total;

   
setCambio(Cambio);

      };


      const handlePagar = async () => {
       
if(!(Monto > 0 && Cambio >= 0)){
    Swal.fire({
        text: "El Monto debe ser mayor al Total",
        icon: 'error',
    });

    return;
}

        await fetch(`http://localhost:3000/bills/payBill`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                idFactura_param: idFactura,
                Monto_param: Monto,
                Cambio_param: Cambio,
                EstadoEfectivo_Tarjeta: isChecked,
              
            }),
        })
            .then((data1) => {


console.log("=========DATA!============");
                console.log(data1.status);

if(data1.status != 200){
    Swal.fire({
        text: 'No se pudo pagar la factura',
        icon: 'error',
    });
}else{  Swal.fire({
    text: "Se realizó el pago correctamente",
    icon: 'success',
});}


              
            })
            .catch((error) => {
                Swal.fire({
                    text: 'No se pudo pagar la factura',
                    icon: 'error',
                });
            });








            handleClose();





    };





      






    const columns = [
        {
            name: 'Pedido ID',
            selector: 'pedido_id',
        },
        {
            name: 'Producto',
            selector: 'producto_nombre',
        },
        {
            name: 'Cantidad',
            selector: 'cantidad',
        },
        {
            name: 'Total',
            selector: 'total',
        },

        {
            name: 'Mesa',
            selector: 'numero_mesa',
        },
    ];


    const customStyles = {
        headCells: {
            style: {
                backgroundColor: '#1043B1',
                color: 'white',
            },
        },
        rows: {
            style: {
                backgroundColor: 'lightblue',
            },
        },
    };

    function transformData(data) {
        const transformedData = [];
      
        data.pedidos.forEach((pedido) => {
          const pedidoId = pedido.idPedido;
          pedido.productos.forEach((producto) => {
            transformedData.push({
              pedido_id: pedidoId,
              producto_nombre: producto.nombreProducto,
              cantidad: producto.cantidad,
              impuesto_monto: producto.impuesto.amount,
              impuesto_nombre: producto.impuesto.name,
              producto_precio: producto.precioProducto,
              numero_mesa: pedido.numeroMesa,
              total:
                'Lps. ' +
                (
                  producto.impuesto.amount * producto.precioProducto * producto.cantidad +
                  producto.precioProducto * producto.cantidad
                ).toFixed(2),
            });
          });
        });
      
        return transformedData;
      }





      let transformedData = [];

if(!(DatosOrden.length === 0)){
    console.log(DatosOrden);
    transformedData= transformData(DatosOrden);
}
    









    return (
        <>
            <Modal
                show={show2}
                size="lg"
                onHide={handleClose}
                className="modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title >Pagar Factura</Modal.Title>
                  

                    <Button onClick={handleClose} >Dejar como Pendiente</Button>
                </Modal.Header>
                <Modal.Body>
                    <Form name="test" id="test">
                        <br></br>

                        <Form.Group>
                            <Form.Label>
                                Atendido por: {DatosFactura.Usuario_atiende}
                            </Form.Label>
                              
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                Nombre del Cliente: {DatosFactura.Nombre_Cliente}
                            </Form.Label>
                              
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>
                                RTN: {DatosFactura.RTN_cliente}
                            </Form.Label>
                              
                        </Form.Group>

                     


                        <Form.Group>
                        {transformedData.length !== 0 ? (
    <DataTable
      columns={columns}
      data={transformedData}
      customStyles={customStyles}
    />

  
  ) : (
    <p>No hay datos para mostrar</p>
  )}

<Table striped bordered hover>
    <thead>
        <tr>
            <th>#</th>
            <th>Monto</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Subtotal</td>
            <td
                style={{
                    backgroundColor: '#FFFBB7',
                    color: 'black',
                }}
            >
                Lps. {DatosFactura.Subtotal}
            </td>
        </tr>
        <tr>
            <td>Total</td>
            <td
                style={{
                    backgroundColor: '#DACD03',
                    color: 'black',
                }}
            >
                Lps. {DatosFactura.Total}
            </td>
        </tr>
    </tbody>
</Table>
                       
                        </Form.Group>
                        <Form.Group>
                        <Form.Check
        type="checkbox"
        label="Pagar con Tarjeta"
        checked={isChecked}
        onChange={handleChange}
      />
 </Form.Group>


 <Form.Group>
 <FormControl
  aria-label="Amount (to the nearest dollar)"
  placeholder="Ingrese el Monto"
  required
  type="number"
  min="0"
  step="0.01"
  max="9999999.99"
  onKeyPress={(event) => {
    if (!/^[0-9]{0,8}$/.test(event.key)) {
      event.preventDefault();
    }
  }}
  onChange={(e) => {
    const inputValue = e.target.value.slice(0, 8); // Limita el valor a 8 caracteres
    handleMonto(parseFloat(inputValue).toFixed(2));
  }}
/>
                </Form.Group>



                <Form.Group>

{(Monto > 0 && Cambio >= 0) ? (
    <Form.Label>
     Cambio: {Cambio.toFixed(2)}
    </Form.Label>
         ) : (
            <p>Ingrese un Monto Valido para evaluar el Cambio.</p>
          )
         }
</Form.Group>

                       
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>

                    <Button variant="success" form="test" onClick={handlePagar}>
                        Pagar Factura
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default modalPagarFactura;

/*
  <CloseButton variant="white" onClick={handleClose} />
                    <Button>Facturar</Button>
*/
/*
 <Form.Group>
                            <Form.Label>Ingrese el Monto</Form.Label>
                            <Form.Control
                                type="numeric"
                                required
                                maxLength="10"
                                minLength="10"
                                onKeyPress={(event) => {
                                    if (
                                        !/^[0-9]{0,10}$/.test(event.key)
                                    ) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </Form.Group>

*/