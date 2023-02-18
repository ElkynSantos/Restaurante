import React, { useState, useEffect } from 'react';
import EDITARPRODUCTO from '../EditarProducto/index';
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
import { showModalEP, closeModalEP } from '../../features/EditarProducto';
import { showModalCP, closeModalCP } from '../../features/CreateProduct';

import BarraLateral from '../common/index';
import CREARPRODUCTO from '../CREARPRODUCTOS/index';
import { initproducts } from '../../features/Productos';

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
    const products = useSelector((state) => state.products);

    const handleClose = () => {
        dispatch(closeModalEP());
    };

    const handleShowEP = () => {
        dispatch(showModalEP());
    };
    const handleCloseCP = () => {
        dispatch(closeModalCP());
    };

    const handleShowCP = () => {
        dispatch(showModalCP());
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

    const handleInitUsers = (data) => {
        dispatch(initproducts(data));
    };

    useEffect(() => {
        const getAllUsers = async () => {
            await fetch('http://localhost:3000/products/')
                .then((response) => response.json())
                .then((data) => {
                    handleInitUsers(data.allProducts);
                })
                .catch((error) => {
                    console.error(error);
                });
        };

        getAllUsers();
    }, []);

    const columns = [
        {
            name: 'Codigo del producto',
            selector: (row) => row.codigo_producto,
        },
        {
            name: 'Nombre del producto',
            selector: (row) => row.nombre_producto,
        },
        {
            name: 'Precio',
            selector: (row) => row.precio_producto,
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
                                onClick={handleShowEP}
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
            <CREARPRODUCTO />
            {formRICARDIO}

            <BarraLateral />
            <Container className="mt-5 rounded bg-white pt-5 pb-5">
                <Row>
                    <Col>
                        <h2 className="text-start">Productos</h2>
                    </Col>
                    <Col md="auto">
                        <button
                            className="btn-transparent h3 text-dark"
                            onClick={handleShowCP}
                        >
                            <PersonPlusFill title="Agregar Producto" />
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
                    data={products}
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
