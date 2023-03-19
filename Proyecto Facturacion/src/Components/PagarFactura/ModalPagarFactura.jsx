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

function modalPagarFactura() {
    const dispatch = useDispatch();
    const [Cliente, setCliente] = useState('');
    const [RTN, setRTN] = useState('');
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

            console.log(datos.factura.id_orden);
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

            console.log(data1);
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
                    <Modal.Title>Pagar Factura</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />

                    <Button>Facturar</Button>
                    <Button>Dejar como Pendiente</Button>
                </Modal.Header>
                <Modal.Body>
                    <Form name="test" id="test">
                        <br></br>

                        <Form.Group>
                            <Form.Label>
                                Nombre del Cliente (Opcional)
                            </Form.Label>
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Ingrese el Monto</Form.Label>
                            <Form.Control
                                type="text"
                                required
                                maxLength="10"
                                minLength="10"
                                onKeyPress={(event) => {
                                    if (
                                        !/^[a-zA-Z0-9]{0,10}$/.test(event.key)
                                    ) {
                                        event.preventDefault();
                                    }
                                }}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>

                    <Button variant="success" form="test" type="submit">
                        Pagar Factura
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default modalPagarFactura;
