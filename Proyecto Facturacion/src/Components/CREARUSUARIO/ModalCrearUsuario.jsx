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
                //onSubmit={handleSubmit}
            >
                <Modal.Header>
                    <Modal.Title>Creación de Usuario</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CREARUSUARIO></CREARUSUARIO>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" href="/home">
                        Salir
                    </Button>

                    <Button variant="primary" form="test" type="submit">
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
    console.log('entro');
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
            <p>
                Por favor ingrese todos los datos correspondientes del nuevo
                usuario.
            </p>
            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">Nombre</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el nombre"
                            onChange={(e) => setField('nombre', e.target.value)}
                            required
                            // isInvalid={!!errors.nombre}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                            Apellido
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese el apellido"
                            onChange={(e) =>
                                setField('apellido', e.target.value)
                            }
                            required
                            // isInvalid={!!errors.apellido}
                        />
                    </Form.Group>

                    <Form.Label className="text-center">Género</Form.Label>
                    <Form.Group>
                        <Form.Select aria-label="Género">
                            <option disabled selected value>
                                Escoger género
                            </option>
                            <option value="2">Masculino</option>
                            <option value="3">Femenino</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Fecha de nacimiento</Form.Label>
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
                    <br></br>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">
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
                    <br></br>

                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                            Número de teléfono
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
                        required
                    ></Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                            Dirección de correo electrónico
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

                    <Form.Group className="mb-3">
                        <Form.Label className="text-center">
                            Contraseña
                        </Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese contraseña del usuario"
                            onChange={(e) =>
                                setField('password', e.target.value)
                            }
                            isInvalid={!!errors.password}
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>

                    <br></br>
                    <br></br>
                </Form>
            </div>
        </div>
    );
}

export default Example;
