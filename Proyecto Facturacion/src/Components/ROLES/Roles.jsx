import React, { useState, useEffect } from 'react';

import CREARROL from '../CREARROL/index';
import EDITARROLES from '../EDITARROLES/index';
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
    initRoles,
    addRoles,
    editRoles
} from '../../features/rolesSlice';
import { showModal, closeModal } from '../../features/createUserSlice';

import BarraLateral from '../common/index';


const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

function ROLES() {
    let formRICARDIO;

    const [buttonPressed, setbuttonPressed] = useState(false);

    if (buttonPressed) {
        formRICARDIO = <EDITARROLES />;
    }

    useEffect(() => {
        console.log('Count ' + buttonPressed);
    }, buttonPressed);

    const dispatch = useDispatch();
    const [data, setData] = useState([]);
   // const users = useSelector((state) => state.users);
    const roles = useSelector((state) => state.roles);
    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleShow = () => {
        dispatch(showModal());
    };


    const handleInitRoles = (data) => {
        dispatch(initRoles(data));
       
    };

    useEffect(() => {
        const getAllRoles = async () => {
            await fetch('http://localhost:3000/roles')
                .then((response) => response.json())
                .then((data) => {
                    handleInitRoles(data.allRoles[0]);
                   setData(data.allRoles[0]);
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
                                onClick={() => setbuttonPressed(true)}
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
