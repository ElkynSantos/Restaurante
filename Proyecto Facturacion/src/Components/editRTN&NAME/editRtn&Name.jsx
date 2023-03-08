

import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Button, Row, Form, CloseButton } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useDispatch, useSelector } from 'react-redux';

//import { Register } from '../../services/REGISTER';
//import { addUser } from '../../features/usersSlice';
import { showModalFactura, closeModalFactura } from '../../features/editFacturaSlice';
function Example() {
    const dispatch = useDispatch();

    // const [show, setShow] = useState(false);
    const handleClose = () => {
        dispatch(closeModalFactura());
    };

    const handleShow = () => {
        dispatch(showModalFactura());
    };

    const showF = useSelector((state) => state.editFactura);
    console.log("show2:" + JSON.stringify(showF));
    return (
        <>
            <Modal
                show={showF.modalState}
                size="lg"
                onHide={handleClose}
                // class="modal-dialog modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Editar Información de factura</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <EditRTN></EditRTN>
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

function EditRTN() {
    const dispatch = useDispatch();

    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };


    async function handleSubmit(e) {
        
            //LLAMEN A LA API

            try {
                // let rol = parseInt(form.rol);
                // let dni = parseInt(form.DNI);
                // let numero = parseInt(form.numero);
                // console.log(form.rol);
                const data = await Register(
                    form.nombre,
                    
                    form.DNI,
                    
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
                Edite los datos del cliente actual.{' '}
            </h4>
            <h5 className="mb-3 text-blue fw-bold">
                Atendido por: {  localStorage.getItem('USER')}{' '}
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
                        
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Example;


