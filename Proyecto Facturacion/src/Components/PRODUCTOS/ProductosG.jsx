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

import { MdOutlinePlaylistAdd } from 'react-icons/md';
import Swal from 'sweetalert2';

import { showModalEP, closeModalEP } from '../../features/EditarProducto';
import { showModalCP, closeModalCP } from '../../features/CreateProduct';
import { guardar } from '../../features/sendeditableproduct';
import { editar, getproduct, EditStatus } from '../../services/Product';

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
    const show2 = useSelector((state) => state.EditarProducto);
    const show = useSelector((state) => state.CreateProduct);
    const [DATA, setData] = useState([]);
    const [count, setcount] = useState(0);
    const [selectedRow, setSelectedRow] = useState(null);
    const [filterText, setFilterText] = useState('');
    const valores = useSelector((state) => state.sendeditableproduct).value;

    const handleShowEditModal = async (codigo_producto) => {
        await getproduct(codigo_producto).then((dataproduct) => {
            // console.log("userRespModal", dataUser)
            dispatch(guardar(dataproduct.products[0]));
            dispatch(showModalEP());
        });
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

    useEffect(() => {
        dispatch(fetchProducts()).then((data) =>
            setData(data.payload.allProducts)
        );
    }, [dispatch, show2, show, count]);

    const handleDelete = (codigo_producto, status) => {
        Swal.fire({
            icon: 'info',
            text: `¿Desea ${
                status == 1 ? 'desactivar' : 'activar'
            } el producto con el DNI ${codigo_producto}?`,
            showCancelButton: true,
            cancelButtonColor: '#DC3545',
            cancelButtonText: 'Cancelar',
            confirmButtonColor: 'var(--blue)',
            confirmButtonText: 'Si',
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (status == 0) {
                    console.log('entro');

                    status = 1;
                } else {
                    status = 0;
                }

                await EditStatus(codigo_producto, status)
                    .then((data) => {
                        if (data.status != 'Ok') {
                            Swal.fire({
                                text: data.message,
                                icon: 'error',
                            });
                            return;
                        }

                        Swal.fire({
                            text: data.msg,
                            icon: 'success',
                        });
                        setcount(count + 1);
                    })
                    .catch((error) => {
                        console.error(error);
                    });
            }
        });
    };

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
            name: 'Impuesto',
            selector: (row) => row.name,
        },
        {
            name: 'Habilitado',
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
                                onClick={() =>
                                    handleShowEditModal(row.codigo_producto)
                                }
                            >
                                <PencilFill />
                            </button>
                        </Col>
                        <Col>
                            <button
                                className="btn-transparent text-danger p-0"
                                title="Eliminar"
                                onClick={() =>
                                    handleDelete(
                                        row.codigo_producto,
                                        row.status
                                    )
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
                            <MdOutlinePlaylistAdd title="Agregar Producto" />
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
                        <div className="p-4">No se encontraron productos</div>
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
