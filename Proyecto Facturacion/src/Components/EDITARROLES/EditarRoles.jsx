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

//import { Register } from '../../services/REGISTER';

import { showModalER, closeModalER } from '../../features/editarRoles';
import { useDispatch, useSelector } from 'react-redux';

function Example() {
    const dispatch = useDispatch();
    const handleClose = () => {
        dispatch(closeModalER());
    };

    const handleShow = () => {
        dispatch(showModalER());
    };

    const show1 = useSelector((state) => state.editrol);

    return (
        <>
            <Modal
                show={show1}
                size="lg"
                onHide={handleClose}
                class="modal-dialog modal-dialog-scrollable"
                backdrop="static"
            >
                <Modal.Header className="bg-blue text-white">
                    <Modal.Title>Edición de Roles</Modal.Title>
                    <CloseButton variant="white" onClick={handleClose} />
                </Modal.Header>
                <Modal.Body>
                    <EDITARROL></EDITARROL>
                </Modal.Body>
                <Modal.Footer>
                    {' '}
                    <Button variant="danger" onClick={handleClose}>
                        Salir
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

function EDITARROL() {
    const dispatch = useDispatch();
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});

    const [checkedList, setCheckedList] = useState([]);
    const [DATA, setData] = useState([]);
    const [NombreNuevo, setNombreNuevo] = useState([]);

    const handleClose = () => {
        dispatch(closeModalER());
    };

    useEffect(() => {
        const getAllPermisos = async () => {
            await fetch('http://localhost:3000/roles/permits')
                .then((response) => response.json())
                .then((data) => {
                    console.log('================================');
                    console.log(data.allRoles);
                    setData(data.allRoles);
                    setNombreNuevo(localStorage.getItem('N_ROLaEDITAR'));
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        getAllPermisos();
    }, []);

    useEffect(() => {
        const PermitsdeRol = async () => {
            const response = await fetch(
                'http://localhost:3000/roles/PermisosdeRol',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        idrol: localStorage.getItem('ROLaEDITAR'),
                    }),
                }
            );
            const data = await response.json();

            let ArrayTemp = [];
            for (let i = 0; i < data.Permisos.length; i++) {
                ArrayTemp.push(data.Permisos[i].id);
            }
            setCheckedList(ArrayTemp);
        };

        PermitsdeRol();
    }, []);

    const setPermisos = async (idRol, NNombre, arrayPermisos) => {
        try {
            const response = await fetch(
                'http://localhost:3000/roles/NuevosPermisos',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({
                        idrol: idRol,
                        NuevoNombre: NNombre,
                        ArrayPermisos: arrayPermisos,
                    }),
                }
            );
            const data = await response.json();

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

    let listaPermisos = [];
    for (let i = 0; i < DATA.length; i++) {
        listaPermisos.push({ id: DATA[i].id, value: DATA[i].N_Permiso });
    }
    /*
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };*/
    function findErrors() {
        const newErrors = {};
        return newErrors;
    }
    useEffect(() => {}, [checkedList]);

    function handleSelect(id, event) {
        const isChecked = event.target.checked;
        if (isChecked) {
            setCheckedList([...checkedList, id]);
        } else {
            setCheckedList(checkedList.filter((item) => item !== id));
        }
    }

    async function handleSubmit(e) {
        e.preventDefault();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        }
    }

    return (
        <div className="mb-3 mt-md-3">
            <h5 className="mb-3 text-blue fw-bold">
                Por favor ingrese todos los datos correspondientes del rol a
                editar.{' '}
            </h5>
            <br></br>

            <div className="mb-3">
                <Form onSubmit={handleSubmit} name="test" id="test">
                    <Row>
                        <Col>
                            <Form.Group className="mb-3">
                                <Form.Label className="fw-bold">
                                    Nuevo nombre
                                </Form.Label>
                                <Form.Control
                                    type="text"
                                    placeholder={localStorage.getItem(
                                        'N_ROLaEDITAR'
                                    )}
                                    onChange={(e) =>
                                        setNombreNuevo(e.target.value)
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
                                <Form.Label className="text-center fw-bold">
                                    Seleccionar permisos
                                </Form.Label>
                                {listaPermisos.map((item, index) => {
                                    return (
                                        <div
                                            key={item.id}
                                            className="checkbox-container"
                                        >
                                            <input
                                                type="checkbox"
                                                name="permisos"
                                                value={item.value}
                                                onChange={(event) =>
                                                    handleSelect(item.id, event)
                                                }
                                                checked={checkedList.includes(
                                                    item.id
                                                )}
                                            />
                                            <label>&nbsp;{item.value}</label>
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
                                setPermisos(
                                    localStorage.getItem('ROLaEDITAR'),
                                    NombreNuevo,
                                    checkedList
                                );
                            }}
                        >
                            Guardar cambios
                        </Button>
                    </Row>
                </Form>
            </div>
        </div>
    );
}

export default Example;
