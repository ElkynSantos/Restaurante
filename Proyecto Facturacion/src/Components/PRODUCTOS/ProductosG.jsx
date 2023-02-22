import React, { useState, useEffect, useMemo } from 'react';
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

import { showModalEP, closeModalEP } from '../../features/EditarProducto';
import { showModalCP, closeModalCP } from '../../features/CreateProduct';
import { guardar } from '../../features/sendeditableproduct';

import BarraLateral from '../common/index';
import CREARPRODUCTO from '../CREARPRODUCTOS/index';

import { fetchProducts } from '../../features/Productos';

const paginationComponentOptions = {
    rowsPerPageText: 'Filas por página',
    rangeSeparatorText: 'de',
    selectAllRowsItem: true,
    selectAllRowsItemText: 'Todos',
};

function PRODUCTOT() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products);
    const show2 = useSelector((state) => state.EditarProducto).value;
    const [count, setCount] = useState();
    const [DATA, setData] = useState([]);
    const [selectedRow, setSelectedRow] = useState(null);
    const [filterText, setFilterText] = useState('');

    const handleRowClicked = (row) => {
        if (products == null) {
            setSelectedRow(row);
        } else {
            setSelectedRow(row);
        }
    };
    useEffect(() => {
        // Do something with the selected row data each time it changes

        console.log(selectedRow);
        dispatch(guardar(selectedRow));
        //setSelectedRow(null);
    }, [selectedRow]);

    const handleNewProduct = () => {
        setCount(count + 1);
    };

    const handleShowEP = () => {
        dispatch(guardar(selectedRow));
        dispatch(showModalEP());
    };
    const handleCloseCP = () => {
        dispatch(closeModalCP());
    };

    const handleShowCP = () => {
        dispatch(showModalCP());
    };

    useEffect(() => {
        dispatch(fetchProducts()).then((data) =>
            setData(data.payload.allProducts)
        );
    }, [dispatch, count]);

    useEffect(() => {
        if (products.allProducts && products.allProducts[0]) {
            const DATOS = products.allProducts.filter(
                (item) =>
                    item.nombre_producto &&
                    item.nombre_producto
                        .toLowerCase()
                        .includes(filterText.toLowerCase())
            );

            setData(DATOS);
        }
    }, [filterText]);

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
                                onClick={() => {
                                    handleRowClicked(row);
                                    handleShowEP();
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
            <EDITARPRODUCTO />

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
                            <Form.Control
                                aria-label="Dollar amount (with dot and two decimal places)"
                                placeholder="BUSCAR"
                                value={filterText}
                                onChange={(e) => setFilterText(e.target.value)}
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
                    data={DATA}
                    customStyles={customStyles}
                    noDataComponent={
                        <div className="p-4">No se encontraron usuarios</div>
                    }
                    pagination
                    paginationComponentOptions={paginationComponentOptions}
                    selectableRowsSingle
                    //onSelectedRowsChange={handleRowSelected}
                />
            </Container>
        </div>
    );
}

export default PRODUCTOT;