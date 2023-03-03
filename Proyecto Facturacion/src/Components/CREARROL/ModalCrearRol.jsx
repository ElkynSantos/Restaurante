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
import Swal from 'sweetalert2';

import { Register } from '../../services/REGISTER';
import { showModalCR, closeModalCR } from '../../features/creacionRoles';
import { useDispatch, useSelector } from 'react-redux';

function Example() {
    const dispatch = useDispatch();
    // const [show, setShow] = useState(false);
    const handleClose = () => {
        dispatch(closeModalCR());
    };

    const show2 = useSelector((state) => state.createrol);
    console.log(show2);
    return (
        <>
            <Modal
                show={show2}
                size="lg"
                onHide={handleClose}
                class="modal-dialog modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Creación de Roles</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <CREARROL></CREARROL>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function CREARROL() {
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const [Vsend, setVsend] = useState('');
    const [checkedList, setCheckedList] = useState([]);
    const [PERMISOS, setPERMISOS] = useState([]);

    useEffect(() => {
        const getAllPermisos = async () => {
            await fetch('http://localhost:3000/roles/permits')
                .then((response) => response.json())
                .then((data) => {
                    console.log('================================');
                    console.log(data.allRoles);

                    //   handleInitRoles(data.allRoles);
                    setPERMISOS(data.allRoles);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        console.log(PERMISOS);
        getAllPermisos();
    }, []);

    const setNuevoRol = async (NR) => {
        console.log('PERMISOS');

        console.log(checkedList);
        try {
            const response = await fetch(
                'http://localhost:3000/roles/CreateNewRole',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        NombreRol: NR,
                        ArrayPermisos: checkedList,
                    }),
                }
            );
            const data = await response.json();
            const getAllPermisos = async () => {
                await fetch('http://localhost:3000/roles/permits')
                    .then((response) => response.json())
                    .then((data) => {
                        console.log('================================');
                        console.log(data.allRoles);

                        //   handleInitRoles(data.allRoles);
                        setPERMISOS(data.allRoles);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            };
            getAllPermisos();
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: data,
                showConfirmButton: false,
                timer: 1500,
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    };

    const listaPermisos = [];
    for (let i = 0; i < PERMISOS.length; i++) {
        listaPermisos.push(PERMISOS[i]);
    }

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    function findErrors() {
        const newErrors = {};
        return newErrors;
    }
    const handleSelect = (id) => {
        const value = id;
        const isChecked = event.target.checked;
        console.log('Antes');
        console.log(value);
        if (isChecked) {
            //Add checked item into checkList
            checkedList.push(value);
            setCheckedList(checkedList);
            console.log('======CHEQUIADOS======');
            console.log(checkedList);
        } else {
            //Remove unchecked item from checkList
            const filteredList = checkedList.filter((item) => item !== value);
            setCheckedList(filteredList);
        }
    };
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();
        // console.log(newErrors);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log('FUNCIONA');
        }
    }

    return (
        <div className="mb-3 mt-md-3">
            <h5 className="mb-3 text-blue fw-bold">
                Por favor ingrese todos los datos correspondientes del nuevo
                rol.{' '}
            </h5>
            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">
                                    Nombre
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder="Ingrese el nombre del rol"
                                    onChange={(e) => setVsend(e.target.value)}
                                    required
                                    // isInvalid={!!errors.nombre}
                                />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="text-center fw-bold"></Form.Label>
                                {listaPermisos.map((item, index) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="checkbox-container"
                                        >
                                            <input
                                                type="checkbox"
                                                name="permisos"
                                                value={item.N_Permiso}
                                                onChange={() =>
                                                    handleSelect(item.id)
                                                }
                                            />
                                            <label>
                                                &nbsp;{item.N_Permiso}
                                            </label>
                                        </div>
                                    );
                                })}
                            </Form.Group>
                        </Col>

                        <Button
                            className="bg-blue"
                            form="test"
                            type="submit"
                            onClick={() => {
                                setNuevoRol(Vsend);
                            }}
                        >
                            Guardar rol
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Example;
