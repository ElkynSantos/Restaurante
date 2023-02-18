import React, { useState } from 'react';
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
import Swal from 'sweetalert2';
import { showModalEP, closeModalEP } from '../../features/EditarProducto';
import { useDispatch, useSelector } from 'react-redux';

function EditarProducto(props) {
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(closeModalEP());
    };

    const handleShow = () => {
        dispatch(showModalEP());
    };
    const show2 = useSelector((state) => state.EditarProducto);

    return (
        <>
            <Modal
                show={show2}
                size="lg"
                onHide={handleClose}
                class="modal-dialog modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Editar Producto</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Edit></Edit>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>

                    <Button className="bg-blue" form="test" type="submit">
                        Guardar Producto
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function Edit() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    return (
        <div className="mb-3 mt-md-3">
            <h5 className="mb-3 text-blue fw-bold">
                Por favor ingrese todos los datos correspondientes del nuevo
                usuario.{' '}
            </h5>
            <div className="mb-3">
                <Form name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">
                                    Codigo
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    onChange={(e) =>
                                        setField('code', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.nombre}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    Nombre del producto
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el apellido"
                                    onChange={(e) =>
                                        setField('Namepro', e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    Precio
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el apellido"
                                    onChange={(e) =>
                                        setField('price', e.target.value)
                                    }
                                    required
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}
export default EditarProducto;
