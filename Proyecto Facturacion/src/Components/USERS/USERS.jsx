import React, { useState, useEffect, useMemo } from 'react';
import EDITARUSUARIOS from '../editarUsuario/index';
import {
    Button,
    Col,
    Row,
    Container,
    Card,
    Form,
    FormControl,
    InputGroup,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import {
    PersonPlusFill,
    PersonFillSlash,
    PersonCheckFill,
    Search,
    PencilFill,
    Trash3Fill,
    Display,
} from 'react-bootstrap-icons';
import Swal from 'sweetalert2';

import {
    initUsers,
    initActiveRoles,
    addUser,
    changeUserStatus,
} from '../../features/usersSlice';
import { showModal, closeModal } from '../../features/createUserSlice';
import {
    setCurrentEditUser,
    showModal as showEditModal,
    closeModal as closeEditModal,
} from '../../features/editUserSlice';
import {
    getAllUsers,
    getAllActiveRoles,
    getUser,
    editUserStatus,
} from '../../services/users';
import BarraLateral from '../common/index';
import CREARUSUARIO from '../CREARUSUARIO';

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

function USUARIOS() {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users);
    const modalState = useSelector((state) => state.modalAddUserState);

    const handleShowEditModal = async (DNI) => {
        await getUser(DNI).then((dataUser) => {
            // console.log("userRespModal", dataUser)
            dispatch(setCurrentEditUser(dataUser.user));
            dispatch(showEditModal());
        });
    };

    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleShow = () => {
        dispatch(showModal());
    };

    const handleDelete = (DNI, status) => {
        Swal.fire({
            icon: 'info',
            text: `¿Desea ${
                status == 1 ? 'desactivar' : 'activar'
            } al usuario con el DNI ${DNI}?`,
            showCancelButton: true,
            cancelButtonColor: '#DC3545',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: 'var(--blue)',
            confirmButtonText: 'Si',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await editUserStatus(DNI, status)
                    .then((data) => {
                        if (data.status != 'Ok') {
                            Swal.fire({
                                text: data.message,
                                icon: 'error',
                            });
                            return;
                        }

                        dispatch(changeUserStatus(DNI));
                        Swal.fire({
                            text: data.msg,
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

    const handleInitActiveRoles = (dataRoles) => {
        dispatch(initActiveRoles(dataRoles));
    };

    useEffect(() => {
        const response = Promise.all([getAllUsers()])
            .then((data) => {
                handleInitUsers(data[0].allUsers);
            })
            .catch((error) => {
                console.log(error);
                Swal.fire({
                    text: 'No se pudieron cargar los usuarios',
                    icon: 'error',
                });
            });
    }, []);

    const columns = [
        {
            name: 'DNI',
            selector: (row) => row.DNI,
        },
        {
            name: 'Nombre de usuario',
            selector: (row) => row.UserName,
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
            name: 'Estado',
            selector: (row) => {
                return row.status == 1 ? 'Activo' : 'Inactivo';
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
                                onClick={() => handleShowEditModal(row.DNI)}
                            >
                                <PencilFill />
                            </button>
                        </Col>
                        <Col>
                            <button
                                className="btn-transparent p-0 fs-5"
                                onClick={() =>
                                    handleDelete(row.DNI, row.status)
                                }
                            >
                                {row.status == 0 ? (
                                    <PersonFillSlash
                                        className="text-danger"
                                        title="Desactivar usuario"
                                    />
                                ) : (
                                    <PersonCheckFill
                                        className="text-success"
                                        title="Activar usuario"
                                    />
                                )}
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

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = users.filter(
        (item) =>
            item.UserName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.FullName.toLowerCase().includes(filterText.toLowerCase()) ||
            item.DNI.includes(filterText)
    );

    return (
        <div>
            <link rel="stylesheet" href="/css/tables.css" />
            <CREARUSUARIO />
            <EDITARUSUARIOS />

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
                            <FormControl
                                placeholder="Buscar..."
                                onChange={(e) => setFilterText(e.target.value)}
                            />
                            <InputGroup.Text>
                                <Search />
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <DataTable
                    className="mt-3 sticky-right-column"
                    columns={columns}
                    data={filteredItems}
                    customStyles={customStyles}
                    noDataComponent={
                        <div className="p-4">No se encontraron usuarios</div>
                    }
                    persistTableHead
                    pagination
                    paginationResetDefaultPage={resetPaginationToggle}
                    paginationComponentOptions={paginationComponentOptions}
                />
            </Container>
        </div>
    );
}

export default USUARIOS;
