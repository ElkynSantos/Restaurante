import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect, useMemo } from 'react';
import { CloseButton } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import {
    showbillconfirmslice,
    closebillconfirmslice,
} from '../../features/billconfirmslice';
import {
    showModalCreateBill,
    closeModalCreateBill,
} from '../../features/crearFacturaSlice';
import { useDispatch, useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import Table from 'react-bootstrap/Table';

import {
    updateSubtotal,
    updateTotal,
} from '../../features/pedidoseleccionados';

//import { CreateProduct } from '../../services/Factura';
import Swal from 'sweetalert2';
import { agetAllTaxes } from '../../services/Taxes';

function modalCrearConfirmarFactura() {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closebillconfirmslice());
    };

    const handleShowCreate = () => {
        handleClose();
        dispatch(showModalCreateBill());
    };

    const show2 = useSelector((state) => state.billconfirmslice);
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
                    <Modal.Title>Confirmar Pedidos</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <BasicExample></BasicExample>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>

                    <Button variant="success" onClick={handleShowCreate}>
                        Confirmar
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function BasicExample() {
    const dispatch = useDispatch();
    const [DATA, setData] = useState([]);
    let UniversalData = [];
    const PedidosSeleccionados = useSelector(
        (state) => state.pedidoseleccionados
    ).value;
    const Subtotal = useSelector((state) => state.pedidoseleccionados).subtotal;
    const Total = useSelector((state) => state.pedidoseleccionados).total;

    const handleAddData = (newData) => {
        setData([...DATA, ...newData]);
    };

    useEffect(() => {
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

        ObtenerDatosdeFactura(PedidosSeleccionados);
    }, []);

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const [dropdown, setdropdown] = useState([]);

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    async function handleSubmit(e) {}

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
            name: 'Numero Mesa',
            selector: 'numero_mesa',
        },
    ];

    function transformData(data) {
        const transformedData = [];

        data.forEach((pedido) => {
            const pedidoId = pedido.pedido_id;
            pedido.productos.productos.forEach((producto) => {
                transformedData.push({
                    pedido_id: pedidoId,
                    producto_nombre: producto.producto_nombre,
                    cantidad: producto.cantidad,
                    impuesto_monto: producto.impuesto_monto,
                    impuesto_nombre: producto.impuesto_nombre,
                    producto_precio: producto.producto_precio,
                    numero_mesa: pedido.productos.numero_mesa,
                    total:
                        'Lps. ' +
                        (
                            producto.impuesto_monto *
                                producto.producto_precio *
                                producto.cantidad +
                            producto.producto_precio * producto.cantidad
                        ).toFixed(2),
                });
            });
        });

        return transformedData;
    }
    /*
    const data = [
        {
            pedido_id: 48,
            productos: {
                pedido_id: 48,
                productos: [
                    {
                        cantidad: 1,
                        producto_id: 6,
                        impuesto_monto: 0.02,
                        impuesto_nombre: 'Impuesto1',
                        producto_nombre: 'Pepsi',
                        producto_precio: 15,
                    },
                    {
                        cantidad: 1,
                        producto_id: 5,
                        impuesto_monto: 0.18,
                        impuesto_nombre: 'Imp18',
                        producto_nombre: 'Tortilla',
                        producto_precio: 5.12,
                    },
                ],
                numero_mesa: 4,
            },
        },
        {
            pedido_id: 49,
            productos: {
                pedido_id: 49,
                productos: [
                    {
                        cantidad: 4,
                        producto_id: 5,
                        impuesto_monto: 0.18,
                        impuesto_nombre: 'Imp18',
                        producto_nombre: 'Tortilla',
                        producto_precio: 5.12,
                    },
                    {
                        cantidad: 2,
                        producto_id: 6,
                        impuesto_monto: 0.02,
                        impuesto_nombre: 'Impuesto1',
                        producto_nombre: 'Pepsi',
                        producto_precio: 15,
                    },
                ],
                numero_mesa: 3,
            },
        },
    ];*/
    const transformedData = transformData(DATA);
    const subtotal = transformedData.reduce((accumulator, currentValue) => {
        return (
            accumulator + currentValue.cantidad * currentValue.producto_precio
        );
    }, 0);

    const total = transformedData.reduce((accumulator, currentValue) => {
        return (
            accumulator +
            currentValue.cantidad *
                currentValue.producto_precio *
                (1 + currentValue.impuesto_monto)
        );
    }, 0);

    dispatch(updateSubtotal(subtotal.toFixed(2)));

    dispatch(updateTotal(total.toFixed(2)));

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
    return (
        <Form onSubmit={handleSubmit} name="test" id="test">
            <br></br>

            <DataTable
                columns={columns}
                data={transformedData}
                customStyles={customStyles}
            />

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
                            Lps. {subtotal.toFixed(2)}
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
                            Lps. {total.toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div>Subtotal: Lps. {subtotal.toFixed(2)}</div>
            <div>Total: Lps. {total.toFixed(2)}</div>
        </Form>
    );
}

export default modalCrearConfirmarFactura;
