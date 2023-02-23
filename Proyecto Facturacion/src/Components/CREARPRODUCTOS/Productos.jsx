import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { CloseButton } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import { showModalCP, closeModalCP } from '../../features/CreateProduct';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProduct } from '../../services/Product';
import Swal from 'sweetalert2';
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
            <Modal
                show={show2}
                size="lg"
                onHide={handleClose}
                className="modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Nuevo Producto</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <BasicExample></BasicExample>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Salir
                    </Button>
                    <Button variant="primary" form="test" type="submit">
                        Guardar producto
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function BasicExample() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    function findErrors() {
        const newErrors = {};
        let { productName, productPrice } = form;

        if ((!productName && productName !== '') || productName == '') {
            //En realidad es username
            newErrors.productName = 'ingrese nombre del producto!';
        }
        if ((!productPrice && productPrice !== '') || productPrice == '') {
            //En realidad es username
            newErrors.productPrice = 'Ingrese precio del producto!';
        }

        console.log(newErrors.password);
        return newErrors;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();
        // console.log(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            //LLAMEN A LA API
            console.log('entro');
            try {
                console.log('entro');
                const data = await CreateProduct(
                    form.productName,
                    form.productPrice
                );
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Producto Creado',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un problema al crear el producto',
                });
            }
        }

        e.target.reset();
    }
    return (
        <Form onSubmit={handleSubmit} name="test" id="test">
            <br></br>

            <Form.Group>
                <Form.Label>Nombre del producto</Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Ingrese nombre del producto"
                    required
                    minLength="0"
                    maxLength="200"
                    onChange={(e) => setField('productName', e.target.value)}
                />
            </Form.Group>
            <InputGroup className="mb-3">
                <Form.Label>Precio del producto</Form.Label>
                <InputGroup className="mb-3"></InputGroup>
                <InputGroup.Text>Lps</InputGroup.Text>
                <Form.Group>
                    <FormControl
                        aria-label="Amount (to the nearest dollar)"
                        placeholder="Ingrese el precio"
                        required
                        minLength="0"
                        maxLength="4"
                        onChange={(e) =>
                            setField('productPrice', e.target.value)
                        }
                        onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                                event.preventDefault();
                            }
                        }}
                    />
                </Form.Group>
                <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>
        </Form>
    );
}

export default modalCrearP;
