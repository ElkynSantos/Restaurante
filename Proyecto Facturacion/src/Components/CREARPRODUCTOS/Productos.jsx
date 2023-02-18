import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import { showModalCP, closeModalCP } from '../../features/CreateProduct';
import { useDispatch, useSelector } from 'react-redux';

function modalCrearP() {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeModalCP());
    };

    const handleShow = () => {
        dispatch(showModalCP());
    };
    const show2 = useSelector((state) => state.CreateProduct);
    return (
        <>
            <Modal show={show2} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Nuevo Producto</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <BasicExample></BasicExample>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Salir
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar producto
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function BasicExample() {
    return (
        <Form>
            <br></br>
            <Form.Group>
                <Form.Label>Código del producto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="letras y/o numeros no mas de 5 caracteres"
                    required
                    minlength="6"
                    maxlength="6"
                    pattern="[a-z]{1,}"
                />
                <Form.Text className="text-muted">
                    Añada un código que cumpla con las siguientes condiciones
                </Form.Text>
            </Form.Group>
            <Form.Group>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese nombre del producto"
                    required
                    pattern="[a-z]{1,}"
                />
            </Form.Group>
            <InputGroup className="mb-3">
                <Form.Label>Precio del producto</Form.Label>
                <InputGroup className="mb-3"></InputGroup>
                <InputGroup.Text>Lps</InputGroup.Text>
                <Form>
                    <FormControl
                        aria-label="Amount (to the nearest dollar)"
                        required
                        minlength="0"
                        maxlength="4"
                    />
                </Form>
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
        </Form>
    );
}

export default modalCrearP;
