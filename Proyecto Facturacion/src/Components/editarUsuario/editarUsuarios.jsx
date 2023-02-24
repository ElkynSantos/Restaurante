import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { Button, Form, Row, Col, CloseButton } from 'react-bootstrap';
import Swal from 'sweetalert2';

import { editUser } from '../../services/users';
import { editUser as editUserState } from '../../features/usersSlice';
import { showModal, closeModal, setField } from '../../features/editUserSlice';


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

    const modalState = useSelector((state) => state.modalEditUser.modalState);

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
    const dispatch = useDispatch();
    let {Birthday, DNI, Email, Name, LastName, Gender, Phone, PlaceofBirth, Rol, RolName, UserName, userIdDb, userStatus} = useSelector((state) => state.modalEditUser.currentUser);
    const [errors, setErrors] = useState({});

    const handleEditUser = (newDataUser) => {
        dispatch(editUserState(newDataUser))
    }

    const handleSetField = (field, value) => {
        dispatch(setField({field, value}));
    }

    function findErrors() {
        const newErrors = {};
        // let { email, password, fecha } = form;
        const hoy = new Date().toISOString().split('T')[0];
        if ((!Email && Email !== '') || Email == '') {
            //En realidad es username
            newErrors.email = 'Espacio de correo electrónico vacío !';
            //email = "";
        }
        const pattern = new RegExp(
            /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
        );
        if (!pattern.test(Email)) {
            newErrors.email = 'Formato de correo electrónico inválido.';
        }
        // if ((!Password && Password !== '') || Password == '') {
        //     newErrors.password = 'Espacio de contraseña vacío !';
        // }
        // const passwordPattern = new RegExp(
        //     /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
        // );
        // if (passwordPattern.test(Password)) {
        //     newErrors.password = 'Formato de contraseña inválido.';
        // }
        if (Birthday >= hoy) {
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
            await editUser({
                name: Name,
                lastName: LastName,
                userName: UserName,
                rol: Rol,
                dni: DNI,
                gender: Gender,
                birthday: Birthday,
                placeofBirth: PlaceofBirth,
                phone: Phone,
                email: Email,
                userIdDb,
                userStatus
            })
                .then((data) => {
                    if(data.status == "Ok") {
                        handleEditUser({
                            FullName: `${Name} ${LastName}`,
                            UserName,
                            Rol: RolName,
                            DNI,
                            Gender,
                            Birthday,
                            PlaceofBirth,
                            Phone,
                            Email,
                            status: userStatus
                        })
                        Swal.fire({
                            text: data.msg,
                            icon: "success"
                        })
                        return;
                    }

                    Swal.fire({
                        text: data.msg,
                        icon: "error"
                    })
                })
                .catch((error) => {
                    console.error("Saracatunga:", error)
                })
        }
    }

    // console.log("qqqq", Birthday, DNI, Email, Name, LastName, Gender, Phone, PlaceofBirth, Rol, UserName);
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
                                <Form.Label className="text-center fw-semibold">
                                    Nuevo nombre
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nuevo nombre"
                                    onChange={(e) => handleSetField('Name', e.target.value)}
                                    value = {Name}
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
                                    placeholder="Ingrese el nuevo apellido"
                                    onChange={(e) =>
                                        handleSetField('LastName', e.target.value)
                                    }
                                    value={LastName}
                                    required
                                    // isInvalid={!!errors.apellido}
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
                                    onChange={(e) => handleSetField('PlaceofBirth', e.target.value)}
                                    value={PlaceofBirth}
                                    //isInvalid={!!errors.email}
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label className="text-center fw-semibold">Género</Form.Label>
                            <Form.Group>
                                <Form.Select aria-label="Género" 
                                    onChange={(e) => handleSetField('Gender', e.target.value)}
                                >
                                    <option selected disabled value={Gender}>
                                        {Gender}
                                    </option>
                                    <option value="X">
                                        No definido
                                    </option>
                                    <option value="M">Masculino</option>
                                    <option value="F">Femenino</option>
                                </Form.Select>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group>
                                <Form.Label className="text-center fw-semibold">Fecha de nacimiento</Form.Label>
                                <Form.Control
                                    type="date"
                                    placeholder="Ingresar fecha de nacimiento"
                                    required
                                    onChange={(e) => handleSetField('Birthday', e.target.value)}
                                    value={Birthday}
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
                                    DNI
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Número de identidad "
                                    required
                                    maxlength="13"
                                    value={DNI}
                                    onChange={(e) =>
                                        handleSetField('DNI', e.target.value)
                                    }
                                />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-semibold">
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
                                    onChange={(e) => handleSetField('Phone', e.target.value)}
                                    value={Phone}
                                />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className="text-center fw-semibold">
                                    Nueva dirección de correo electrónico
                                </Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Ingrese correo personal"
                                    onChange={(e) => handleSetField('Email', e.target.value)}
                                    value={Email}
                                    isInvalid={!!errors.email}
                                    required
                                />
                                <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label className="text-center fw-semibold">
                                Nuevo rol que asignará al usuario
                            </Form.Label>
                            <Form.Select aria-label="Rol"
                                onChange={(e) => {
                                    handleSetField("RolName", e.target.options[e.target.selectedIndex].text)
                                    handleSetField('Rol', e.target.value)
                                }}
                            >
                                <option value={Rol} selected disabled>{RolName}</option>
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
