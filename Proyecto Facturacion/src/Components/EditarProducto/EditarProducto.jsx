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
import Swal from 'sweetalert2';
import { showModalEP, closeModalEP } from '../../features/EditarProducto';
import { useDispatch, useSelector } from 'react-redux';

function EditarProducto(props) {
    const valores = useSelector((state) => state.sendeditableproduct);
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
                className="modal-dialog-scrollable"
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
    const valores = useSelector((state) => state.sendeditableproduct).value;

    const [data, setDATA] = useState([]);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    useEffect(() => {
        setDATA(valores);
    }, [valores]);

    useEffect(() => {
        setForm(data);
    }, [data]);

    function findErrors() {
        const newErrors = {};
        let { nombre_producto, precio_producto } = form;

        if (
            (!nombre_producto && nombre_producto !== '') ||
            nombre_producto == ''
        ) {
            newErrors.nombre = 'ingrese nombre del producto!';
        }
        if (
            (!precio_producto && precio_producto !== '') ||
            nombre_producto == ''
        ) {
            newErrors.price = 'Ingrese precio del producto!';
        }

        return newErrors;
    }
    console.log(form);
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();
        console.log(newErrors);

        console.log(form);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            //LLAMEN A LA API
        }
    }
    return (
        <div className="mb-3 mt-md-3">
            <h5 className="mb-3 text-blue fw-bold">
                Por favor ingrese todos los datos.{' '}
            </h5>
            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">
                                    Codigo
                                </Form.Label>
                                <Form.Control
                                    value={data.codigo_producto || ''}
                                    type="text"
                                    placeholder="Ingrese el codigo"
                                    onChange={(e) =>
                                        setField(
                                            'codigo_producto',
                                            e.target.value
                                        )
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
                                    defaultValue={data.nombre_producto || ''}
                                    placeholder="Ingrese Nombre del producto"
                                    onChange={(e) => {
                                        setField(
                                            'nombre_producto',
                                            e.target.value
                                        );
                                    }}
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
                                    placeholder="Ingrese precio del producto"
                                    defaultValue={data.precio_producto || ''}
                                    onChange={(e) =>
                                        setField(
                                            'precio_producto',
                                            e.target.value
                                        )
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
