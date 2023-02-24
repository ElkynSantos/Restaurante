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

import Swal from 'sweetalert2';
import { showModalEP, closeModalEP } from '../../features/EditarProducto';
import { guardar } from '../../features/sendeditableproduct';
import { editar, getproduct } from '../../services/Product';
import { useDispatch, useSelector } from 'react-redux';
import { FileEarmarkRichtext } from 'react-bootstrap-icons';

function EditarProducto() {
    const valores = useSelector((state) => state.sendeditableproduct).value;
    const [codeold, setcodeold] = useState([]);
    const [data, setDATA] = useState([]);
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const dispatch = useDispatch();

    const handleClose = () => {
        dispatch(guardar(null));
        dispatch(closeModalEP());
    };

    const handleShow = () => {
        dispatch(showModalEP());
    };
    const show2 = useSelector((state) => state.EditarProducto);

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    useEffect(() => {
        // console.log(valores);
        setDATA(valores);
        setForm(valores);
        setcodeold(valores);
    }, [valores]);

    function findErrors() {
        const newErrors = {};
        let { nombre_producto, precio_producto } = form;

        if (
            (!nombre_producto && nombre_producto !== '') ||
            nombre_producto == ''
        ) {
            //En realidad es username
        }

        if (
            (!precio_producto && precio_producto !== '') ||
            precio_producto == ''
        ) {
            console.log('entro');
            newErrors.productName = 'ingrese nombre del producto!';
        }

        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            //LLAMEN A LA API

            try {
                //console.log(form);
                const data = await getproduct(codeold.codigo_producto);

                if (data.status == 'Ok') {
                    const data2 = await editar(
                        data.products[0].id,
                        form.codigo_producto,
                        form.nombre_producto,
                        form.precio_producto
                    );

                    console.log(data2);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }

                //dispatch(closeModalEP());
            } catch (error) {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un problema al crear el producto',
                });
            }
        }
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
                    <Modal.Title>Editar Producto</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit} name="test" id="test">
                        <br></br>

                        <Form.Group>
                            <Form.Label>Codigo producto</Form.Label>
                            <Form.Control
                                defaultValue={data?.codigo_producto || ''}
                                type="text"
                                placeholder="Ingrese nombre del producto"
                                required
                                minLength="0"
                                maxLength="200"
                                onChange={(e) =>
                                    setField('codigo_producto', e.target.value)
                                }
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>Nombre producto</Form.Label>
                            <Form.Control
                                defaultValue={data?.nombre_producto || ''}
                                type="text"
                                placeholder="Ingrese nombre del producto"
                                required
                                minLength="0"
                                maxLength="200"
                                onChange={(e) =>
                                    setField('nombre_producto', e.target.value)
                                }
                            />
                        </Form.Group>
                        <InputGroup className="mb-3">
                            <Form.Label>Precio del producto</Form.Label>
                            <InputGroup className="mb-3"></InputGroup>
                            <InputGroup.Text>Lps</InputGroup.Text>
                            <Form.Group>
                                <FormControl
                                    defaultValue={data?.precio_producto || ''}
                                    aria-label="Amount (to the nearest dollar)"
                                    placeholder="Ingrese el precio"
                                    required
                                    type="double"
                                    min="0"
                                    max="9999999.99"
                                    onChange={(e) =>
                                        setField(
                                            'precio_producto',
                                            parseFloat(e.target.value).toFixed(
                                                2
                                            )
                                        )
                                    }
                                />
                            </Form.Group>
                        </InputGroup>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleSubmit}>
                        Guardar producto
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Salir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default EditarProducto;
