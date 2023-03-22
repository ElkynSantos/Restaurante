import React, { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
    FormControl,
    FormLabel,
    CloseButton,
} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import DataTable from 'react-data-table-component';
import { getproduct } from '../../services/Product';
import Dropdown from 'react-bootstrap/Dropdown';
import Swal from 'sweetalert2';
import { clear } from '../../features/pedidosSlice';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalPedidos } from '../../features/ModalPedidosSlice';

function PedidosModal() {
    const [value, setValue] = useState('(Seleccionar Mesa)');
    const show2 = useSelector((state) => state.ModalPedidos);
    const dispatch = useDispatch();
    const pedidos1 = useSelector((state) => state.pedidos).value;

    let DROPDOWN_Items = [];
    var array1 = [];
    for (let i = 0; i < 12; i++) {
        array1.push({ numero: i + 1, estado: false });
        DROPDOWN_Items[i] = (
            <Dropdown.Item eventKey={i + 1} onClick={() => handleMesas(i + 1)}>
                {i + 1}
            </Dropdown.Item>
        );
    }
    const handleMesas = (e) => {
        setValue(e);
    };

    const handleClose = () => {
        console.log(show2);
        console.log(pedidos1);
        console.log('entro11');
        dispatch(closeModalPedidos());
    };

    const columns = [
        {
            name: 'Codigo',
            selector: (row) => row.codigo_producto,
        },
        {
            name: 'Nombre',
            selector: (row) => row.nombre_producto,
        },
        {
            name: 'Precio',
            selector: (row) => row.precio_producto,
        },
        {
            name: 'Cantidad',
            selector: (row) => row.cant_producto,
        },
    ];

    const newOrder = async () => {
        if (value !== '(Seleccionar Mesa)') {
            let listaprod = [];
            for (let i = 0; i < pedidos1.length; i++) {
                const producto = await getproduct(
                    pedidos1[i].codigo_producto
                ).catch((error) => {
                    console.error(error);
                });

                console.log(producto);
                console.log(pedidos1[i].cant_producto);
                listaprod.push({
                    idProducto: producto.products[0].id,
                    cantidad: pedidos1[i].cant_producto,
                });
            }
            const Atiende = localStorage.getItem('USER');
            await fetch('http://localhost:3000/orders/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    tableId: value,
                    waiterId: Atiende,
                    products: listaprod,
                    delivery: 0,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
            dispatch(clear());

            setValue('(Seleccionar Mesa)');
            dispatch(closeModalPedidos());
        } else {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Por favor seleccione una mesa',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    console.log(show2);
    return (
        <>
            <Modal
                show={show2}
                size="xl"
                onHide={handleClose}
                className="modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>
                        Esta seguro que quieres aceptar esta orden?
                    </Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Container>
                        <Col align="start">
                            <Dropdown
                                variant="outline-primary"
                                id="dropdown-basic"
                            >
                                <Dropdown.Toggle
                                    variant="outline-primary"
                                    id="dropdown-basic"
                                >
                                    Seleccionar
                                </Dropdown.Toggle>

                                <Dropdown.Menu
                                    style={{
                                        maxHeight: '150px',
                                        overflowY: 'auto',
                                    }}
                                >
                                    {DROPDOWN_Items}
                                </Dropdown.Menu>
                            </Dropdown>
                            <h7>Mesa: {value}</h7>
                        </Col>
                        <DataTable
                            title="Productos de la orden"
                            className="mt-3"
                            columns={columns}
                            data={pedidos1}
                            noDataComponent={
                                <div className="p-4">
                                    No se encontraron productos
                                </div>
                            }
                            pagination
                            selectableRowsSingle
                        />
                    </Container>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={newOrder}>
                        Aceptar Orden
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PedidosModal;
