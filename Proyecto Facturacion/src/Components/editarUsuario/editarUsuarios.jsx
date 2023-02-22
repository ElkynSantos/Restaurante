import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Row, Col, CloseButton } from 'react-bootstrap';

import { showModal, closeModal } from '../../features/editUserSlice';


function Example() {
    // const [show, setShow] = useState(true);
    // const handleClose = () => {
    //     console.log("HANDLE CLOSEEEEE")
    //     setShow(false)
    // };
    // const handleShow = () => setShow(true);

    const dispatch = useDispatch();
    // const [show, setShow] = useState(false);
    const handleClose = () => {
        dispatch(closeModal());
    };

    const modalState = useSelector((state) => state.modalEditUserState);

    return (
        <>
            <Modal
                show={modalState}
                size="lg"
                onHide={handleClose}
                // className="modal-dialog modal-dialog-scrollable"
                //onSubmit={handleSubmit}
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Edición de Usuario</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <CREARUSUARIO></CREARUSUARIO>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" type="button" onClick={() => handleClose()}>
                        Salir
                    </Button>

                    <Button className='bg-blue' form="test" type="submit">
                        Guardar cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function CREARUSUARIO() {
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
        let { email, password, fecha } = form;
        const hoy = new Date().toISOString().split('T')[0];
        console.log(email);
        if ((!email && email !== '') || email == '') {
            //En realidad es username
            newErrors.email = 'Espacio de correo electrónico vacío !';
            //email = "";
        }
        const pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(email)) {
            newErrors.email = 'Formato de correo electrónico inválido.';
        }
        if ((!password && password !== '') || password == '') {
            newErrors.password = 'Espacio de contraseña vacío !';
        }
        const passwordPattern = new RegExp(
            /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
        );
        if (passwordPattern.test(password)) {
            newErrors.password = 'Formato de contraseña inválido.';
        }
        if (fecha >= hoy) {
            newErrors.fecha = 'Fecha inválida.';
        }
        console.log(newErrors.email);
        return newErrors;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();
        console.log(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            //LLAMEN A LA API
            alert('FUNCIONA');
        }
    }

    return (
        <div className="mb-3 mt-md-4">
            <h5 className="mb-3 text-blue fw-bold">
                Por favor ingrese todos los nuevos datos que asignará al usuario
                actual.
            </h5>
            {/* <h5 className="text-center">Usuario actual: ------</h5> */}
            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    Nuevo nombre
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nuevo nombre"
                                    onChange={(e) => setField('nombre', e.target.value)}
                                    required
                                    // isInvalid={!!errors.nombre}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    Apellido
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nuevo apellido"
                                    onChange={(e) =>
                                        setField('apellido', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.apellido}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    Lugar de nacimiento
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el lugar"
                                    required
                                    onChange={(e) => setField('lugar', e.target.value)}
                                    //isInvalid={!!errors.email}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label className="text-center fw-bold">Género</Form.Label>
                            <Form.Group>
                                <Form.Select aria-label="Género">
                                    <option disabled selected value>
                                        No definido
                                    </option>
                                    <option value="2">Masculino</option>
                                    <option value="3">Femenino</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label className="text-center fw-bold">Fecha de nacimiento</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Ingresar fecha de nacimiento"
                                    required
                                    onChange={(e) => setField('fecha', e.target.value)}
                                    isInvalid={!!errors.fecha}
                                ></Form.Control>
                                <Form.Control.Feedback type="invalid">
                                    {errors.fecha}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    DNI
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Número de identidad "
                                    required
                                    maxlength="13"
                                    onChange={(e) =>
                                        setField('DNI', e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold">
                                    Nuevo número de teléfono
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese Numero"
                                    required
                                    maxLength="8"
                                    minLength="8"
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-center fw-bold">
                                    Nueva dirección de correo electrónico
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingrese correo personal"
                                    onChange={(e) => setField('email', e.target.value)}
                                    isInvalid={!!errors.email}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label className="text-center fw-bold">
                                Nuevo rol que asignará al usuario
                            </Form.Label>
                            <Form.Select aria-label="Asignar impuesto">
                                <option value="1">Administrador de sistema</option>
                                <option value="2">Gerente</option>
                                <option value="3">Facturador</option>
                            </Form.Select>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicCheckbox"
                                required
                            ></Form.Group>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Example;
