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
    PersonPlusFill,
    Search,
    PencilFill,
    Trash3Fill,
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
    // const users = useSelector((state) => state.users);
    const roles = useSelector((state) => state.roles);
    const handleClose = () => {
        dispatch(closeModalCR());
    };

    const handleShow = () => {
        dispatch(showModalCR());
    };

    const handleShowEDIT = () => {
        console.log('Prueba2');
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
    }, []);

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
            name: 'id categoría',
            selector: (row) => row.id_categoria,
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
                                onClick={handleShowEDIT}
                            >
                                <PencilFill />
                            </button>
                        </Col>
                        <Col>
                            <button
                                className="btn-transparent text-danger p-0"
                                title="Eliminar"
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
                            <PersonPlusFill
                                title="Agregar usuario"
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
