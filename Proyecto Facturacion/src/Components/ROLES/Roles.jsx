import React, { useState, useEffect } from 'react';
import EDITARROLES from '../EDITARROLES/index';
import CREARROL from '../CREARROL/index';
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
    BsFillFileEarmarkPersonFill,
    Search,
    PencilFill,
    BookmarkDashFill,
    Display,
} from 'react-bootstrap-icons';
import Swal from 'sweetalert2';

import { initRoles, addRoles, editRoles } from '../../features/rolesSlice';
import { showModalCR, closeModalCR } from '../../features/creacionRoles';

import { showModalER, closeModalER } from '../../features/editarRoles';

import BarraLateral from '../common/index';

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

function ROLES() {
    const dispatch = useDispatch();
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const show2 = useSelector((state) => state.createrol);
    const show1 = useSelector((state) => state.editrol);
    // const users = useSelector((state) => state.users);
    const roles = useSelector((state) => state.roles);
    const handleClose = () => {
        dispatch(closeModalCR());
    };

    const handleShow = () => {
        dispatch(showModalCR());
    };

    const handleShowEDIT = () => {
        dispatch(showModalER());
    };

    const handleInitRoles = (data) => {
        dispatch(initRoles(data));
    };

    useEffect(() => {
        const getAllRoles = async () => {
            await fetch('http://localhost:3000/roles')
                .then((response) => response.json())
                .then((data) => {
                    console.log('================================');
                    console.log(data.allRoles);

                    handleInitRoles(data.allRoles);
                    setData(data.allRoles);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        getAllRoles();
    }, [modalVisible, dispatch, show2, show1]);

    const deshabilitar_habilitar = async (NRol, habil_deshabil) => {
        try {
            const response = await fetch(
                'http://localhost:3000/roles/unable_enable_role',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({ id_Rol: NRol }),
                }
            );
            const data = await response.json();
            console.log('==============JUAN ARIAS==================');

            if (data.result[0].resultado.resultado) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: habil_deshabil
                        ? 'Rol Deshabilitado'
                        : 'Rol Habilitado',
                    showConfirmButton: false,
                    timer: 1500,
                });
            } else {
                Swal.fire({
                    position: 'top-center',
                    icon: 'Oops...',
                    title: 'No es posible deshabilitar un rol asignado a un usuario',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            if (modalVisible) {
                setModalVisible(false);
            } else {
                setModalVisible(true);
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
    };

    const handleDelete = (props, habil_deshabil) => {
        // reale.stopPropagation();

        deshabilitar_habilitar(props, habil_deshabil);
    };

    const columns = [
        {
            name: 'id',
            selector: (row) => row.id,
        },
        {
            name: 'Nombre de Rol',
            selector: (row) => row.Nomb_Rol,
        },
        {
            name: 'Fecha de creación',
            selector: (row) => row.Fecha_Creacion,
        },

        {
            name: 'Acciones',
            selector: (row) => {
                if (row.habilitado) {
                    return (
                        <Row>
                            <Col>
                                <button
                                    className="btn-transparent text-blue p-0"
                                    title="Editar"
                                    onClick={() => {
                                        localStorage.setItem(
                                            'ROLaEDITAR',
                                            row.id
                                        );
                                        localStorage.setItem(
                                            'N_ROLaEDITAR',
                                            row.Nomb_Rol
                                        );
                                        handleShowEDIT();
                                    }}
                                >
                                    <PencilFill />
                                </button>
                            </Col>
                            <Col>
                                <button
                                    className="btn-transparent text-success p-0"
                                    title="Eliminar"
                                    onClick={() =>
                                        handleDelete(row.id, row.habilitado)
                                    }
                                >
                                    <BookmarkDashFill />
                                </button>
                            </Col>
                        </Row>
                    );
                } else {
                    return (
                        <Row>
                            <Col>
                                <button
                                    className="btn-transparent text-blue p-0"
                                    title="Editar"
                                    onClick={() => {
                                        localStorage.setItem(
                                            'ROLaEDITAR',
                                            row.id
                                        );
                                        localStorage.setItem(
                                            'N_ROLaEDITAR',
                                            row.Nomb_Rol
                                        );
                                        handleShowEDIT();
                                    }}
                                >
                                    <PencilFill />
                                </button>
                            </Col>
                            <Col>
                                <button
                                    className="btn-transparent text-danger p-0"
                                    title="Eliminar"
                                    onClick={() =>
                                        handleDelete(row.id, row.habilitado)
                                    }
                                >
                                    <BookmarkDashFill />
                                </button>
                            </Col>
                        </Row>
                    );
                }
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
            <CREARROL />
            <EDITARROLES />;
            <BarraLateral />
            <Container className="mt-5 rounded bg-white pt-5 pb-5">
                <Row>
                    <Col>
                        <h2 className="text-start">Roles</h2>
                    </Col>
                    <Col md="auto">
                        <button className="btn-transparent h3 text-dark">
                            <BsFillFileEarmarkPersonFill
                                title="Agregar Rol"
                                onClick={() => {
                                    handleShow();
                                }}
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
                    data={data}
                    customStyles={customStyles}
                    noDataComponent={
                        <div className="p-4">No se encontraron roles</div>
                    }
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                />
            </Container>
        </div>
    );
}

export default ROLES;
