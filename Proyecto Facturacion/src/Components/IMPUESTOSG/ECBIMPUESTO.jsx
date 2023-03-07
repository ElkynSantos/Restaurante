import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import './Crear.css';
import BarraLateral from '../common/index.js';
import { Container } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTax, editTax } from '../../services/Taxes';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
function ECBMPUESTO() {
    const [show, setShow] = useState(false);

    const [nombreImpuesto, setNombreImpuesto] = useState('');
    const [porcentajeImpuesto, setPorcentajeImpuesto] = useState('');
    const [impuestos, setImpuestos] = useState([]);
    const [impuestoEditando, setImpuestoEditando] = useState(null);

    const handleShow = () => setShow(true);

    const handleEditClick = (id) => {
        handleShow();
        setImpuestoEditando(id);

        console.log('EDITCLICK');
    };

    const handleClose = () => {
        setShow(false);
        setNombreImpuesto('');
        setPorcentajeImpuesto('');
        console.log('CLOSE');
    };

    const handleEditImpuesto = async (taxNameParam, taxAmountParam) => {
        try {
            await fetch('http://localhost:3000/taxes/', {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taxId: impuestoEditando,
                    taxName: taxNameParam,
                    taxAmount: taxAmountParam,
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

            await fetch('http://localhost:3000/taxes')
                .then((response) => response.json())
                .then((DATA) => {
                    console.log(DATA.allTaxes);
                    setImpuestos(DATA.allTaxes);
                });

            setNombreImpuesto('');
            setPorcentajeImpuesto('');

            //   const impuesto = impuestos[index];
            //   setNombreImpuesto(impuesto.nombre);
            //  setPorcentajeImpuesto(impuesto.porcentaje);
            //   setImpuestoEditando(index);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    };

    const handleDeleteImpuesto = async (idImpuesto, status) => {
        try {
            console.log('ID: ' + idImpuesto);

            await fetch('http://localhost:3000/taxes/', {
                method: 'delete',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taxId: idImpuesto,
                    taxStatus: status ? false : true,
                }),
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);

                    if (
                        data.msg ==
                        'No es posible deshabilitar un impuesto en uso'
                    ) {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'error',
                            title: data.msg,
                            showConfirmButton: false,
                            timer: 2000,
                        });
                    } else {
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });

            await fetch('http://localhost:3000/taxes')
                .then((response) => response.json())
                .then((DATA) => {
                    console.log(DATA.allTaxes);
                    setImpuestos(DATA.allTaxes);
                });

            //  setImpuestos(impuestos.filter((_, i) => i !== index));
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    };
    useEffect(() => {
        const getAllTaxes = async () => {
            await fetch('http://localhost:3000/taxes')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data.allTaxes);
                    setImpuestos(data.allTaxes);
                });
        };

        getAllTaxes();
    }, [nombreImpuesto, porcentajeImpuesto]);

    const handleAddImpuesto = async (taxNameParam, taxAmountParam) => {
        try {
            await fetch('http://localhost:3000/taxes/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    taxDescription: taxNameParam,
                    taxAmount: taxAmountParam,
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
            await fetch('http://localhost:3000/taxes')
                .then((response) => response.json())
                .then((DATA) => {
                    console.log(DATA.allTaxes);
                    setImpuestos(DATA.allTaxes);
                });

            setNombreImpuesto('');
            setPorcentajeImpuesto('');
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    };
    return (
        <Container>
            <BarraLateral />

            <div className="impuestos-table">
                <h2>Lista de Impuestos</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr className="table-header">
                            <th>Nombre</th>
                            <th>Porcentaje</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {impuestos.map((impuesto, index) => (
                            <tr key={impuesto.id}>
                                <td>{impuesto.name}</td>
                                <td>{impuesto.amount + '%'}</td>
                                <td>
                                    <>
                                        <Button
                                            variant="warning"
                                            className="mr-2"
                                            onClick={() =>
                                                handleEditClick(impuesto.id)
                                            }
                                        >
                                            Editar
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>
                                                    Editar Impuesto
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Nombre del impuesto
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={
                                                                nombreImpuesto
                                                            }
                                                            onChange={(e) =>
                                                                setNombreImpuesto(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                            pattern="^[A-Za-z0-9]{1,10}$"
                                                            title="El nombre del impuesto debe contener letras y números y no debe ser mayor a 10 caracteres."
                                                        />
                                                    </Form.Group>
                                                    <Form.Group>
                                                        <Form.Label>
                                                            Porcentaje del
                                                            impuesto
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="text"
                                                            value={
                                                                porcentajeImpuesto
                                                            }
                                                            onChange={(e) =>
                                                                setPorcentajeImpuesto(
                                                                    e.target
                                                                        .value
                                                                )
                                                            }
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button
                                                    variant="danger"
                                                    onClick={handleClose}
                                                >
                                                    Close
                                                </Button>
                                                <Button
                                                    variant="warning"
                                                    className="mr-2"
                                                    onClick={() => {
                                                        handleEditImpuesto(
                                                            nombreImpuesto,
                                                            porcentajeImpuesto
                                                        );
                                                        handleClose();
                                                    }}
                                                >
                                                    Guardar Cambios
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>

                                    {impuesto.status ? (
                                        <Button
                                            variant="success"
                                            onClick={() =>
                                                handleDeleteImpuesto(
                                                    impuesto.id,
                                                    impuesto.status
                                                )
                                            }
                                        >
                                            Habilitado
                                        </Button>
                                    ) : (
                                        <Button
                                            variant="danger"
                                            onClick={() =>
                                                handleDeleteImpuesto(
                                                    impuesto.id,
                                                    impuesto.status
                                                )
                                            }
                                        >
                                            Deshabilitado
                                        </Button>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Form>
                    <Form.Group>
                        <Form.Label>Nombre del impuesto</Form.Label>
                        <Form.Control
                            type="text"
                            value={nombreImpuesto}
                            onChange={(e) => setNombreImpuesto(e.target.value)}
                            pattern="^[A-Za-z0-9]{1,10}$"
                            title="El nombre del impuesto debe contener letras y números y no debe ser mayor a 10 caracteres."
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Porcentaje del impuesto</Form.Label>
                        <Form.Control
                            type="text"
                            value={porcentajeImpuesto}
                            onChange={(e) =>
                                setPorcentajeImpuesto(e.target.value)
                            }
                        />
                    </Form.Group>
                    <Button
                        variant="primary"
                        className="mt-3"
                        onClick={() =>
                            handleAddImpuesto(
                                nombreImpuesto,
                                porcentajeImpuesto
                            )
                        }
                    >
                        Agregar Impuesto
                    </Button>{' '}
                    <Button
                        variant="secondary"
                        className="mt-3"
                        onClick={() => {
                            setNombreImpuesto('');
                            setPorcentajeImpuesto('');
                            setImpuestoEditando(null);
                        }}
                    >
                        Cancelar
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default ECBMPUESTO;

/*
                                    <Button
                                        variant="warning"
                                        className="mr-2"
                                        onClick={() =>
                                            handleEditImpuesto(
                                                impuesto.id,
                                                nombreImpuesto,
                                                porcentajeImpuesto
                                            )
                                        }
                                    >
                                        Editar
                                    </Button>
*/
