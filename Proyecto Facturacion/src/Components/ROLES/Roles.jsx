import React, { useState, useEffect } from 'react';
import EDITARROLES from '../EDITARROLES/index';
import CREARROL from '../CREARROL/index';
import {
    // Button,
    Col,
    Row,
    Container,
    //  Card,
    Form,
    InputGroup,
} from 'react-bootstrap';
import DataTable from 'react-data-table-component';
import { useSelector, useDispatch } from 'react-redux';
import {
    Clipboard2Plus,
    Search,
    PencilFill,
    BookmarkDashFill,
    // Display,
} from 'react-bootstrap-icons';
import Swal from 'sweetalert2';
import { initRoles, addRoles, editRoles } from '../../features/rolesSlice';
import { showModalCR, closeModalCR } from '../../features/creacionRoles';
import { showModalER, closeModalER } from '../../features/editarRoles';
import BarraLateral from '../common/index';
//import { getAllRoles } from '../../services/roles';

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

function ROLES() {
    const dispatch = useDispatch();
    const roles = useSelector((state) => state.roles);
    const createrolState = useSelector((state) => state.createrol);
    const editrolState = useSelector((state) => state.editrol);
    const [ChangesUnEnabled, setChangesUnEnabled] = useState(false);

    // const [data, setData] = useState([]);
    // const show2 = useSelector((state) => state.createrol);
    //const show1 = useSelector((state) => state.editrol);

    //Handlers
    const handleShow = () => {
        dispatch(showModalCR());
    };
    const handleShowEDIT = () => {
        dispatch(showModalER());
    };
    const handleInitRoles = (data) => {
        dispatch(initRoles(data));
    };
    const handleDelete = (props, habil_deshabil) => {
        deshabilitar_habilitar(props, habil_deshabil);
    };

    //UseEffect Obtener Roles y Deshabilitar/Habilitar
    useEffect(() => {
        const getAllRoles = async () => {
            await fetch('http://localhost:3000/roles')
                .then((response) => response.json())
                .then((data) => {
                    handleInitRoles(data.allRoles);
                })
                .catch((error) => {
                    console.error(error);
                });
        };
        getAllRoles();
    }, [createrolState, editrolState, ChangesUnEnabled]);

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
                    icon: 'error',
                    title: 'No es posible deshabilitar un rol asignado a un usuario',
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
            setChangesUnEnabled(!ChangesUnEnabled);
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error,
            });
        }
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

    //Filtro para el texfield Buscar
    const [filterText, setFilterText] = useState('');
    const handleFilterChange = (e) => {
        setFilterText(e.target.value);
    };

    const filteredItems = roles.filter((item) =>
        item.Nomb_Rol.toLowerCase().includes(filterText.toLowerCase())
    );

    return (
        <div>
            <CREARROL />
            <EDITARROLES />
            <BarraLateral />
            <Container className="mt-5 rounded bg-white pt-5 pb-5">
                <Row>
                    <Col>
                        <h2 className="text-start">Roles</h2>
                    </Col>
                    <Col md="auto">
                        <button className="btn-transparent h3 text-dark">
                            <Clipboard2Plus
                                title="Agregar Rol"
                                onClick={() => {
                                    handleShow();
                                }}
                            />
                        </button>
                    </Col>
                    <Col sm={4}>
                        <InputGroup>
                            <Form.Control
                                aria-label="Dollar amount (with dot and two decimal places)"
                                onChange={handleFilterChange}
                                value={filterText}
                            />
                            <InputGroup.Text>
                                <Search />
                            </InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <DataTable
                    className="mt-3"
                    columns={columns}
                    data={filteredItems}
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

/* useEffect(() => {
        getAllRoles().then((data1) => setData(data1));
        /*const getAllRoles = async () => {
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
    }, [ChangesUnEnabled, dispatch, show2, show1]);*/
