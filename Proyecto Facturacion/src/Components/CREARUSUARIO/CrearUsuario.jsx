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
} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Modal
                show={true}
                onHide={handleClose}
                class="modal-dialog modal-dialog-scrollable"
            >
                <Modal.Header>
                    <Modal.Title>Creación de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <CREARUSUARIO></CREARUSUARIO>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" href="/home">
                        Salir
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar usuarios
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
        let { email, password } = form;

        if ((!email && email !== '') || email == '') {
            //En realidad es username
            newErrors.email = 'Espacio de ID Vacio !';
            //email = "";
        }

        console.log(newErrors.password);
        return newErrors;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            //LLAMEN A LA API
        }
    }

    return (
        <div className="mb-3 mt-md-4">
            <p>
                Por favor ingrese todos los datos correspondientes del nuevo
                usuario.
            </p>
            <div className="mb-3">
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre"
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid={!!errors.email}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                            Apellido
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el apellido"
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid={!!errors.email}
                        />
                    </Form.Group>

                    <Form.Label className="text-center">Genero</Form.Label>
                    <Form.Group>
                        <Form.Select aria-label="Genero">
                            <option value="1"></option>
                            <option value="2">Masculino</option>
                            <option value="3">Femenino</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha de nacimiento</Form.Label>
                        <Form.Control
                            type="date"
                            placeholder="Ingresar fecha de nacimiento"
                        ></Form.Control>
                    </Form.Group>
                    <br></br>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                            Lugar de nacimiento
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el lugar"
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid={!!errors.email}
                        />
                    </Form.Group>
                    <br></br>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                            Número de teléfono
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese Numero"
                            maxLength="8"
                        />
                    </Form.Group>
                    <br></br>

                    <Form.Label className="text-center">
                        Rol que asignará al usuario
                    </Form.Label>
                    <Form.Select aria-label="Asignar impuesto">
                        <option value="1">Administrador de sistema</option>
                        <option value="2">Gerente</option>
                        <option value="3">Facturador</option>
                    </Form.Select>
                    <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                    ></Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                            Dirección de correo electrónico
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese correo personal"
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid={!!errors.email}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                            Contraseña
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese contraseña del usuario"
                            onChange={(e) => setField('email', e.target.value)}
                            isInvalid={!!errors.email}
                        />
                    </Form.Group>
                    <br></br>
                    <br></br>
                </Form>
            </div>
        </div>
    );
}

export default Example;
