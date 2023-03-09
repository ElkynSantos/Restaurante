import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row, Form, CloseButton } from 'react-bootstrap';
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
                    <Modal.Title>Completar Información de factura</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <CREARUSUARIO></CREARUSUARIO>
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

function CREARUSUARIO() {
    const [DATA, setData] = useState([]);
    const dispatch = useDispatch();
    const handleAddUser = (user) => {
        dispatch(addUser(user));
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
    useEffect(() => {
        const getAllActiveRoles = async () => {
            await fetch('http://localhost:3000/users/activeroles')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data), setData(data.allActiveRoles);
                });
        };

        getAllActiveRoles();
    }, []);
    async function handleSubmit(e) {
        //LLAMEN A LA API

        try {
            // let rol = parseInt(form.rol);
            // let dni = parseInt(form.DNI);
            // let numero = parseInt(form.numero);
            // console.log(form.rol);
            const data = await Register(
                form.nombre,

                form.DNI
            );

            const { status, newUser } = data;
            if (status == 'Ok') {
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
            const { message } = error.response.data;
            Swal.fire({
                icon: 'warning',
                title: 'No se pudo crear el usuario',
                text: message,
            });
        }

        // e.target.reset();
    }

    return (
        <div className="mb-3 mt-md-3">
            <h4 className="mb-3 text-blue fw-bold">
                Complete los datos del cliente al que se le facturará.{' '}
            </h4>
            <h5 className="mb-3 text-blue fw-bold">
                Atendido por: {localStorage.getItem('USER')}{' '}
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
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-semibold">
                                    RTN
                                </Form.Label>
                                <Form.Control
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
                                    {DATA.map((option) => (
                                        <option value={option.id}>
                                            {option.Nomb_Rol}
                                        </option>
                                    ))}
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
