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

function modalCrearFactura() {
    const dispatch = useDispatch();
    const [Cliente, setCliente] = useState('');
    const [RTN, setRTN] = useState('');
    const PedidosSeleccionados = useSelector(
        (state) => state.pedidoseleccionados
    ).value;

    const subtotal = useSelector((state) => state.pedidoseleccionados).subtotal;
    const total = useSelector((state) => state.pedidoseleccionados).total;

    const handleChangePagar = () => {
        dispatch(showpagarFacturaSlice());
        handleClose();
    };

    const handleChangePendiente = async () => {
        console.log('===============INFORMACION PRECISADA===============');
        /*
const ObtenerDatosdeFactura = async (idPedido) => {
    await fetch(`http://localhost:3000/bills/getBillData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },

        body: JSON.stringify({ NPedido: JSON.stringify(idPedido) }),
    })
        .then((response) => response.json())
        .then((datos) => {
            setData(datos.Respuesta.resultadosFinal);
        });
};
*/

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
        try {
            const response = await fetch(`http://localhost:3000/bills/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },

                body: JSON.stringify({
                    numeroFactura: '101',
                    nombreCliente: CLIENTE,
                    RtnCliente: RTN_Final,
                    fechaCreacion: hoy,
                    subtotal: subtotal,
                    total: total,
                    tarjetaEfectivo: 0,
                    cambio: 0.0,
                    anular: 0,
                    pendiente: 1, //
                    pagado: 0, //
                    idConfiguracionFactura: 1,
                    listapedidos: PedidosSeleccionados,
                    usuarioAtiende: Atiende,
                }),
            });

            const data1 = await response.json();
            if (data1.msg) {
                Swal.fire({
                    text:
                        'Factura generada correctamente con id - ' + data1.msg,
                    icon: 'success',
                });
            }
        } catch (error) {
            Swal.fire({
                text: 'No se pudo generar la factura',
                icon: 'error',
            });
        }
    };

    const handleClose = () => {
        dispatch(closeModalCreateBill());
    };

    const handleShow = () => {
        dispatch(showModalCreateBill());
    };

    const show2 = useSelector((state) => state.createbill);
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
                    <Modal.Title>Crear Factura</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body></Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>
                    <Button variant="primary" onClick={handleChangePendiente}>
                        Generar Factura
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
