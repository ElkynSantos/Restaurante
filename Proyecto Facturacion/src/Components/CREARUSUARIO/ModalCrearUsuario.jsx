import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import {
    Col,
    Button,
    Row,
    Form,
    CloseButton,
} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

import { Register } from '../../services/REGISTER';
import { addUser } from '../../features/usersSlice';
import { showModal, closeModal } from '../../features/createUserSlice';

function Example() {
    const dispatch = useDispatch();
    // const [show, setShow] = useState(false);
    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleShow = () => {
        dispatch(showModal());
    };

    // const handleAddUser = (user) => {
    //     dispatch(
    //         addUser(user)
    //     );
    // };

    const show2 = useSelector((state) => state.modalAddUserState);

    return (
        <>
            <Modal
                show={show2}
                size="lg"
                onHide={handleClose}
                // class="modal-dialog modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Creación de Usuario</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <CREARUSUARIO></CREARUSUARIO>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>

                    <Button className="bg-blue" form="test" type="submit">
                        Guardar usuario
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function CREARUSUARIO() {
    const dispatch = useDispatch();
    const handleAddUser = (user) => {
        dispatch(
            addUser(user)
        );
    };

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
        // console.log(email);
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
        // console.log(newErrors.email);
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

            try {
                // let rol = parseInt(form.rol);
                // let dni = parseInt(form.DNI);
                // let numero = parseInt(form.numero);
                // console.log(form.rol);
                const data = await Register(
                    form.nombre,
                    form.apellido,
                    form.rol,
                    form.DNI,
                    form.genero,
                    form.fecha,
                    form.lugar,
                    form.numero,
                    form.email,
                    form.password
                );
                
                const {status, newUser} = data;
                if(status == "Ok") {
                    handleAddUser({
                        FullName: `${newUser.Nombre} ${newUser.Apellido}`,
                        UserName: newUser.Nom_Usuario,
                        Rol: newUser.id_rol,
                        DNI: newUser.N_Identidad,
                        Gender: newUser.Genero,
                        Birthday: newUser.Fecha_Nacimiento,
                        PlaceofBirth: newUser.Lugar_Nacimiento,
                        Phone: newUser.N_Celular,
                        Email: newUser.Correo,
                        status: newUser.status,
                    });
                    
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Usuario Creado',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } catch (error) {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Hubo un problema al crear usuario',
                });
            }
        }
    }

    return (
        <div className="mb-3 mt-md-3">
            <h5 className="mb-3 text-blue fw-bold">
                Por favor ingrese todos los datos correspondientes del nuevo
                usuario.{' '}
            </h5>
            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-semibold">
                                    Nombre
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nombre"
                                    onChange={(e) =>
                                        setField('nombre', e.target.value)
                                    }
                                    required
                                    // isInvalid={!!errors.nombre}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-semibold">
                                    Apellido
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el apellido"
                                    onChange={(e) =>
                                        setField('apellido', e.target.value)
                                    }
                                    required
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-semibold">
                                    Lugar de nacimiento
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el lugar"
                                    required
                                    onChange={(e) =>
                                        setField('lugar', e.target.value)
                                    }
                                    //isInvalid={!!errors.email}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label className="text-center fw-semibold">
                                Género
                            </Form.Label>
                            <Form.Group>
                                <Form.Select
                                    aria-label="Género"
                                    onChange={(e) =>
                                        setField('genero', e.target.value)
                                    }
                                >
                                    <option disabled selected value="X">
                                        Escoger género
                                    </option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label className="fw-semibold">
                                    Fecha de nacimiento
                                </Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Ingresar fecha de nacimiento"
                                    required
                                    onChange={(e) =>
                                        setField('fecha', e.target.value)
                                    }
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
                                <Form.Label className="text-center fw-semibold">
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
                                    onChange={(e) =>
                                        setField('numero', e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group
                                className="mb-3"
                                controlId="formBasicEmail"
                            >
                                <Form.Label className="text-center fw-semibold">
                                    Dirección de correo electrónico
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingrese correo personal"
                                    onChange={(e) =>
                                        setField('email', e.target.value)
                                    }
                                    isInvalid={!!errors.email}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Label className="text-center fw-semibold">
                                Rol que asignará al usuario
                            </Form.Label>
                            <Form.Group>
                                <Form.Select
                                    aria-label="Asignar impuesto"
                                    onChange={(e) =>
                                        setField('rol', e.target.value)
                                    }
                                >
                                    <option disabled selected value>
                                        Escoger Rol
                                    </option>
                                    <option value="1">
                                        Administrador de sistema
                                    </option>
                                    <option value="2">Gerente</option>
                                    <option value="3">Facturador</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-semibold">
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
                                <Form.Label className="text-center fw-semibold">
                                    Contraseña
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Contraseña del usuario"
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
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Example;
