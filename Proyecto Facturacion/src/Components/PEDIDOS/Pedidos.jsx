import BarraLateral from '../common/index.js';
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
    FormControl,
    InputGroup,
} from 'react-bootstrap';

import { Typeahead } from 'react-bootstrap-typeahead';
import Swal from 'sweetalert2';
import { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import { TruckFlatbed } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
import { getproduct } from '../../services/Product';
import {
    addproduct,
    removeproduct,
    sumQuantity,
} from '../../features/pedidosSlice';
import { useSelector, useDispatch } from 'react-redux';
function PEDIDOS() {
    const [smShow, setSmShow] = useState(true);

    let selectedRows;
    let MesasTitulos;
    const [AllSelectedRows, setSelectedRows] = useState([]);
    let productnames = [];
    const [DATO, setData] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState('');
    const dispatch = useDispatch();
    const pedidos1 = useSelector((state) => state.pedidos).value;

    const [dataSelect, setDataselect] = useState([]);

    //=================MESAS======================================
    const [value, setValue] = useState('(Seleccionar Mesa)');
    const [show, setShow] = useState(false);

    const handleSelect = () => {
        setShow(false);
        <Nav.Link eventKey="/mesas">Link</Nav.Link>;
    };

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let Tarjet;

    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:

    const handleMesas = (e) => {
        console.log(e);
        MesasTitulos = 'Mesa ' + e;
        setValue(e);
    };

    //INICIAR MESAS HARCODEADO
    let DROPDOWN_Items = [];
    var array1 = [];
    for (let i = 0; i < 12; i++) {
        array1.push({ numero: i + 1, estado: false });
        DROPDOWN_Items[i] = (
            <Dropdown.Item eventKey={i + 1} onClick={() => handleMesas(i + 1)}>
                {i + 1}
            </Dropdown.Item>
        );
    }

    const handleChange2 = (props) => {
        console.log(props);
        dispatch(removeproduct(props.id));
    };

    const changeC = (row, cantidad2) => {
        console.log(cantidad2);
        const payload = { id: row.id, quantity: cantidad2 };

        dispatch(sumQuantity(payload));
    };
    const columns = [
        {
            name: 'Codigo',
            selector: (row) => row.codigo_producto,
        },
        {
            name: 'Nombre',
            selector: (row) => row.nombre_producto,
        },
        {
            name: 'Precio',
            selector: (row) => row.precio_producto,
        },
        {
            name: 'Cantidad',
            cell: (row) => (
                <Form.Control
                    type="number"
                    min="0"
                    required
                    defaultValue={1}
                    value={row.cantidad}
                    onChange={(e) => changeC(row, e.target.value)}
                />
            ),
        },
        {
            name: 'Eliminar',
            cell: (props) => (
                <Button variant="danger" onClick={() => handleChange2(props)}>
                    -
                </Button>
            ),
        },
    ];

    const newOrder = async () => {
        let listaprod = [];
        for (let i = 0; i < pedidos1.length; i++) {
            const producto = await getproduct(
                pedidos1[i].codigo_producto
            ).catch((error) => {
                console.error(error);
            });

            console.log(producto);
            console.log(pedidos1[i].cant_producto);
            listaprod.push({
                idProducto: producto.products[0].id,
                cantidad: pedidos1[i].cant_producto,
            });
        }

        await fetch('http://localhost:3000/orders/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                tableId: value,
                waiterId: 37,
                products: listaprod,
                delivery: 0,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data);

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: data.msg,
                    showConfirmButton: false,
                    timer: 1500,
                });
            });

        setSelectedRows([]);
        setValue('(Seleccionar Mesa)');
    };

    useEffect(() => {
        const getAllProducts = async () => {
            await fetch('http://localhost:3000/products/activeproducts')
                .then((response) => response.json())
                .then((data) => {
                    setData(data.allProducts);
                });
        };

        getAllProducts();
    }, []);

    useEffect(() => {
        productnames = DATO.forEach((product) => {
            console.log(product.nombre_producto);
            productnames.push(product.nombre_producto);
        });
    }, []);

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);

    const handleProductChange = (selected) => {
        setSelectedProduct(selected[0]);
    };

    console.log(selectedProduct);

    const handleAddClick = async () => {
        if (selectedProduct) {
            let string = selectedProduct;
            let valorB = string.split(' - ')[0];

            await getproduct(valorB).then((dataproduct) => {
                dispatch(addproduct(dataproduct.products));
            });
        } else {
            setSelectedProduct(null);
        }
    };
    return (
        <Container>
            <BarraLateral />

            <Form>
                <Row>
                    <Col>
                        <Button variant="secondary" size="lg">
                            Atras
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            href="/ListaPedidos"
                            variant="secondary"
                            size="lg"
                        >
                            Mostrar Pedidos
                        </Button>
                    </Col>
                </Row>
            </Form>
            <h1>PEDIDOS</h1>

            <Row>
                <Col>
                    <DataTable
                        title="Ordenes"
                        columns={columns}
                        data={pedidos1}
                        pagination
                        paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                        subHeader
                        subHeaderComponent={
                            <InputGroup className="mb-3">
                                <Typeahead
                                    style={{ width: '85%' }}
                                    id="basic-example"
                                    options={DATO.map(
                                        (product) =>
                                            `${product.codigo_producto} - ${product.nombre_producto}`
                                    )}
                                    placeholder="Buscar Producto para orden"
                                    onChange={handleProductChange}
                                />

                                <Button
                                    className="bg-blue"
                                    id="button-addon2"
                                    onClick={handleAddClick}
                                >
                                    Agregar
                                </Button>
                            </InputGroup>
                        }
                        noDataComponent={
                            <div className="p-4">
                                No se encuentran productos en este pedido
                            </div>
                        }
                        persistTableHead
                    />
                </Col>

                <div class="p-3 mb-2 bg-light text-dark">
                    {' '}
                    <div>
                        <Row>
                            <Col>
                                {' '}
                                <h7>Mesa: {value}</h7>
                            </Col>
                            <Col>
                                <Dropdown>
                                    <Dropdown.Toggle
                                        variant="outline-primary"
                                        id="dropdown-basic"
                                    >
                                        Seleccionar
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {DROPDOWN_Items}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Col>
                        </Row>
                    </div>
                    <p></p>
                    <p></p>
                    <Button href="/home" variant="outline-danger" size="lg">
                        Cancelar
                    </Button>{' '}
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => newOrder()}
                    >
                        Crear Pedido
                    </Button>
                </div>
            </Row>
        </Container>
    );
}

export default PEDIDOS;
