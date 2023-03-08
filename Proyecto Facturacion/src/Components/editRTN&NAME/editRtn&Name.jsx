

import React, {  useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row, Form, CloseButton } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';
import { editFacturas } from '../../services/Factura';
//import { Register } from '../../services/REGISTER';
//import { addUser } from '../../features/usersSlice';
import { showModalFactura, closeModalFactura } from '../../features/editFacturaSlice';
function Example() {
    const dispatch = useDispatch();

    // const [show, setShow] = useState(false);
    const handleClose = () => {
        dispatch(closeModalFactura());
    };

    const handleShow = () => {
        dispatch(showModalFactura());
    };

    const showF = useSelector((state) => state.editFactura);
    console.log("show2:" + JSON.stringify(showF));
    return (
        <>
            <Modal
                show={showF.modalState}
                size="lg"
                onHide={handleClose}
                // class="modal-dialog modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Editar Información de factura</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <EditRTN></EditRTN>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Atrás
                    </Button>

                    <Button className="bg-blue" form="test" type="submit">
                        Guardar datos
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function EditRTN() {
    const dispatch = useDispatch();
    const valoresF = useSelector((state) => state.editFactura);
    const [form, setForm] = useState({});
    const [dataF, setDataF] = useState([]);
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    useEffect(() => {
        console.log(valoresF);
        setDataF(valoresF.currentFactura);
        setForm(valoresF.currentFactura);
    }, [valoresF]);


    async function handleSubmit(e) 
    {
        e.preventDefault();
            console.log(form);
            try
            {
                const data = await editFacturas (dataF.id, form.RTN_cliente, form.Nombre_Cliente);
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: data.msg,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            catch(error)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un problema al editar la factura',
                });
            }
       
        console.log("data:"+data);
    }

    return (
        <div className="mb-3 mt-md-3">
            <h4 className="mb-3 text-blue fw-bold">
                Edite los datos del cliente actual.{' '}
            </h4>
            <h5 className="mb-3 text-blue fw-bold">
                Atendido por: {  localStorage.getItem('USER')}{' '}
            </h5>

            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">
                                    Nombre Completo
                                </Form.Label>
                                <Form.Control
                                    defaultValue={dataF?.Nombre_Cliente || ''}
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    onChange={(e) =>
                                        setField('Nombre_Cliente', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.nombre}
                                />
                            </Form.Group>
                        </Col>
                        
                    </Row>
                   <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-semibold">
                                    RTN
                                </Form.Label>
                                <Form.Control
                                     defaultValue={dataF?.RTN_cliente || ''}
                                    type="text"
                                    placeholder="Número de RTN "
                                    required
                                    maxLength="13"
                                    minLength="13"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    onChange={(e) =>
                                        setField('RTN_cliente', e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Example;


