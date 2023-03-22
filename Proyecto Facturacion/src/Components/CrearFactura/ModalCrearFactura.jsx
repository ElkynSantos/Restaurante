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
    UpdateidFactura,
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

    /*  const handleShowEditModal = async (codigo_producto) => {
        await getproduct(codigo_producto).then((dataproduct) => {
            dispatch(guardar(dataproduct.products[0]));
            dispatch(showModalEP());
        });
    };*/

    const handleUpdateidFactura = (id) => {
        dispatch(UpdateidFactura(id));
    };

    const handleChangePagar = () => {
        dispatch(showpagarFacturaSlice());
        handleClose();
    };
    const handleClose = () => {
        dispatch(closeModalCreateBill());
    };

    const handleShow = () => {
        dispatch(showModalCreateBill());
    };
    const handleChangePendiente = async () => {
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
                handleUpdateidFactura(data1.msg);
                handleChangePagar();
            }
        } catch (error) {
            Swal.fire({
                text: 'No se pudo generar la factura',
                icon: 'error',
            });
        }
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
                <Modal.Body>
                    <Form name="test" id="test">
                        <br></br>

                        <Form.Group>
                            <Form.Label>
                                Nombre del Cliente (Opcional)
                            </Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Ingrese Nombre del Cliente"
                                required
                                minLength="0"
                                maxLength="40"
                                onChange={(e) => setCliente(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>RTN (Opcional)</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="rtn"
                                required
                                minLength="0"
                                maxLength="13"
                                onKeyPress={(event) => {
                                    if (
                                        !/^[0-9]{0,10}$/.test(event.key)
                                    ) {
                                        event.preventDefault();
                                    }
                                }}
                                onChange={(e) => {
                                    setRTN(e.target.value)}}
                            />
                        </Form.Group>
                    </Form>
                </Modal.Body>
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
/*
function BasicExample() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const [dropdown, setdropdown] = useState([]);

    useEffect(() => {
        const response = Promise.all([agetAllTaxes()])
            .then((data1) => {
                const ActiveTaxes = [];
                for (let i = 0; i < data1[0].allTaxes.length; i++) {
                    if (data1[0].allTaxes[i].status == 1) {
                        ActiveTaxes.push(data1[0].allTaxes[i]);
                    }
                }

                setdropdown(ActiveTaxes);
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    text: 'No se pudieron cargar los impuestos',
                    icon: 'error',
                });
            });
    }, []);

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    function findErrors() {
        const newErrors = {};
        let { nombrecliente, rtn } = form;
        console.log(form);
        if ((!nombrecliente && nombrecliente !== '') || nombrecliente == '') {
            newErrors.nombrecliente = 'ingrese nombre del client!';
        }

        if ((!rtn && rtn !== '') || rtn == '') {
            newErrors.productName = 'ingrese nombre del producto!';
        }

        console.log(newErrors.password);
        return newErrors;
    }

 /*   async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();
        // console.log(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            console.log('entroERROR');
        } else {
        }

        e.target.reset();
    }

    return (
        <Form name="test" id="test">
            <br></br>

            <Form.Group>
                <Form.Label>Nombre del Cliente (Opcional)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese Nombre del Cliente"
                    required
                    minLength="0"
                    maxLength="200"
                    onChange={(e) => setCliente(e.target.value)}
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>RTN (Opcional)</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="rtn"
                    required
                    minLength="0"
                    maxLength="13"
                    onChange={(e) => setRTN(e.target.value)}
                />
            </Form.Group>
        </Form>
    );
}*/
/*
   <Button variant="success" onClick={handleChangePagar}>
                        Pagar
                    </Button>
*/
export default modalCrearFactura;
