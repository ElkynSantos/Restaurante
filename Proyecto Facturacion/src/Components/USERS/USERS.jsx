import React, { useState, useEffect } from 'react';
import EDITARUSUARIOS from '../editarUsuario/index';
import {
    Button,
    Col,
    Row,
    Container,
    Card,
    Form,
    InputGroup,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import {
    PersonPlusFill,
    Search,
    PencilFill,
    Trash3Fill,
    Display,
} from 'react-bootstrap-icons';
import Swal from 'sweetalert2';

import {
    initUsers,
    addUser,
    changeUserStatus,
} from '../../features/usersSlice';
import { showModal, closeModal } from '../../features/createUserSlice';

import BarraLateral from '../common/index';
import CREARUSUARIO from '../CREARUSUARIO';

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

function USUARIOS() {
    let formRICARDIO;

    const [buttonPressed, setbuttonPressed] = useState(false);

    if (buttonPressed) {
        formRICARDIO = <EDITARUSUARIOS />;
    }

    useEffect(() => {
        console.log('Count ' + buttonPressed);
    }, buttonPressed);

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const users = useSelector((state) => state.users);

    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleShow = () => {
        dispatch(showModal());
    };

    const handleAdd = () => {
        dispatch(
            addUser({
                Birthday: '1995-01-28',
                DNI: '458378',
                Email: 'juadn@gmil.com',
                FullName: 'Daniel Ponce',
                Gender: 'H',
                Phone: '9393',
                PlaceofBirth: 'Choloma',
                Rol: 'Administrador',
                UsernName: 'JUAR453',
            })
        );
    };

    const handleDelete = (DNI, status) => {
        Swal.fire({
            icon: 'info',
            text: `¿Desea ${
                status == 1 ? 'activar' : 'desactivar'
            } al usuario con el DNI ${DNI}?`,
            showCancelButton: true,
            cancelButtonColor: '#DC3545',
            confirmButtonColor: 'var(--blue)',
            confirmButtonText: 'Si',
        }).then((result) => {
            if (result.isConfirmed) {
                fetch('http://localhost:3000/users/status', {
                    method: 'PATCH',
                    body: JSON.stringify({
                        userDni: DNI,
                        opt: status == 1 ? 0 : 1,
                    }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                    .then((response) => response.json())
                    .then((data) => {
                        if (data.status != 'Ok') {
                            Swal.fire({
                                text: `¡No se pudo ${
                                    status == 1 ? 'desactivar' : 'activar'
                                } el usuario!`,
                                icon: 'error',
                            });
                            return;
                        }

                        dispatch(changeUserStatus(DNI));
                        Swal.fire({
                            text: `¡Usuario ${
                                status == 1 ? 'activado' : 'desactivado'
                            }!`,
                            icon: 'success',
                        });
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };

    const handleInitUsers = (data) => {
        dispatch(initUsers(data));
    };

    useEffect(() => {
        const getAllUsers = async () => {
            await fetch('http://localhost:3000/users')
                .then((response) => response.json())
                .then((data) => {
                    handleInitUsers(data.allUsers);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        getAllUsers();
    }, []);

    const columns = [
        {
            name: 'Nombre de usuario',
            selector: (row) => row.UsernName,
        },
        {
            name: 'Nombre Completo',
            selector: (row) => row.FullName,
        },
        {
            name: 'Rol',
            selector: (row) => row.Rol,
        },
        {
            name: 'Género',
            selector: (row) => row.Gender,
        },
        {
            name: 'Fecha de nacimiento',
            selector: (row) => row.Birthday,
        },
        {
            name: 'Teléfono',
            selector: (row) => row.Phone,
        },
        {
            name: 'Correo',
            selector: (row) => row.Email,
        },
        {
            name: 'Esta',
            selector: (row) => {
                return row.status == 1 ? 'Inactivo' : 'Activo';
            },
        },
        {
            name: 'Acciones',
            selector: (row) => {
                return (
                    <Row>
                        <Col>
                            <button
                                className="btn-transparent text-blue p-0"
                                title="Editar"
                                onClick={() => setbuttonPressed(true)}
                            >
                                <PencilFill />
                            </button>
                        </Col>
                        <Col>
                            <button
                                className="btn-transparent text-danger p-0"
                                title="Eliminar"
                                onClick={() =>
                                    handleDelete(row.DNI, row.status)
                                }
                            >
                                <Trash3Fill />
                            </button>
                        </Col>
                    </Row>
                );
            },
        },
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor: 'var(--blue)',
                fontWeight: 'bold',
                justifyContent: 'center',
                color: 'white',
            },
        },
        cells: {
            style: {
                justifyContent: 'center',
            },
        },
        rows: {
            style: {
                // backgroundColor: "var(--yellow-light)"
            },
        },
    };

    return (
        <div>
            <CREARUSUARIO />
            {formRICARDIO}

            <BarraLateral />
            <Container className="mt-5 rounded bg-white pt-5 pb-5">
                <Row>
                    <Col>
                        <h2 className="text-start">Usuarios</h2>
                    </Col>
                    <Col md="auto">
                        <button className="btn-transparent h3 text-dark">
                            <PersonPlusFill
                                title="Agregar usuario"
                                onClick={() => handleShow()}
                            />
                        </button>
                    </Col>
                    <Col sm={4}>
                        <InputGroup>
                            <Form.Control aria-label="Dollar amount (with dot and two decimal places)" />
                            <InputGroup.Text>
                                <Search />
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <DataTable
                    className="mt-3"
                    columns={columns}
                    data={users}
                    customStyles={customStyles}
                    noDataComponent={
                        <div className="p-4">No se encontraron usuarios</div>
                    }
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </Container>
        </div>
    );
}

export default USUARIOS;
