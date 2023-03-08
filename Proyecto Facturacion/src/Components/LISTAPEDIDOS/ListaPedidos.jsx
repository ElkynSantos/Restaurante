import BarraLateral from '../common/index.js';
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
    FormControl,
} from 'react-bootstrap';

import { PencilFill, BookmarkCheckFill } from 'react-bootstrap-icons';
import { useState, useEffect, useMemo } from 'react';

import Modal from 'react-bootstrap/Modal';
import DataTable from 'react-data-table-component';

function OrdenarPedido(arrayPedido) {
    let Formato = '';
    for (let i = 0; i < arrayPedido.Pedido.length(); i++) {
        Formato +=
            arrayPedido[0].Pedido[i].Producto +
            ' ' +
            arrayPedido[0].Pedido[i].Cantidad +
            '\n';
    }
    return Formato;
}

function LISTAPEDIDOS() {
    const [smShow, setSmShow] = useState(false);
    const [facturador, setFacturador] = useState(true);
    const [DATA, setData] = useState([]);

    const [dataPending, setDataPending] = useState([]);
    const [SelectedRows, setSelectedRows] = useState([]);

    const [PedidosaFacturar, setPedidosaFacturar] = useState([]);
    //HANDLERS
    const handleChangeFact = () => {
        if (facturador) {
            setFacturador(false);
        } else {
            setFacturador(true);
        }
    };

    const handleFacturar = () => {};

    useEffect(() => {
        console.log(`Facturado ` + facturador);
    }, []);

    const DevolverNoCocinado = async (idPedido) => {
        await fetch(`http://localhost:3000/orders/132`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ id: idPedido }),
        });
    };

    const Cocinado = async (idPedido) => {
        await fetch(`http://localhost:3000/orders/ready`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ id: idPedido }),
        });
    };

    const getProductos = async () => {
        await fetch('http://localhost:3000/orders/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };

    useEffect(() => {
        const getAllPendingPedidos = async () => {
            await fetch('http://localhost:3000/orders/pending')
                .then((response) => response.json())
                .then((dataPending) => {
                    console.log('=========PENDING===========');
                    console.log(dataPending.order.orders),
                        setDataPending(dataPending.order.orders);
                });
        };

        getAllPendingPedidos();
    }, []);

    useEffect(() => {
        const getAllPedidos = async () => {
            await fetch('http://localhost:3000/orders/ready')
                .then((response) => response.json())
                .then((data1) => {
                    console.log(data1.status);
                    console.log('=========ReadytoFact===========');
                    if (data1.status != 'fail') {
                        console.log(data1.order.orders),
                            setData(data1.order.orders);
                    }
                });
        };

        getAllPedidos();
    }, []);

    //IFS

    let FormtatoTabla;
    let TablaFacturador;
    let TablaCocinaDerecha;
    let TablaCocinaIzquierda;
    if (facturador) {
        const handleChange = ({ selectedRows }) => {
            console.log(selectedRows);

            const arraytemp = [];
            for (let i = 0; i < selectedRows.length; i++) {
                arraytemp.push(selectedRows[i].numero_pedido);
            }

            setSelectedRows(arraytemp);

            console.log('Selected Rows: ', selectedRows);
        };

        const data = [
            {
                NPedido: 1,
                Cliente: 'Josue',
                Fecha: 'Hoy',
                Pedido: [
                    { Producto: 'Pollo', Cantidad: 1 },
                    { Producto: 'Pepsi', Cantidad: 2 },
                ],
            },
            {
                NPedido: 2,
                Cliente: 'Juan',
                Fecha: 'Hoy se fia',
                Pedido: [
                    { Producto: 'Pollo', Cantidad: 1 },
                    { Producto: 'Coca', Cantidad: 14 },
                ],
            },
        ];

        //INFO COLUMNAS
        const columns = [
            {
                name: 'N_Pedido',
                selector: (row) => row.numero_pedido,
            },

            {
                name: 'Mesa',
                selector: (row) => row.mesaID,
            },

            {
                name: 'Fecha',
                selector: (row) => row.fecha,
            },

            {
                name: 'Acciones',
                cell: (props) => (
                    <Row>
                        <Col>
                            <button
                                className="btn-transparent text-blue p-0"
                                title="Editar"
                            >
                                <PencilFill />
                            </button>
                        </Col>
                        <Col>
                            <button
                                className="btn-transparent text-success p-0"
                                title="Facturar"
                            >
                                <BookmarkCheckFill />
                            </button>
                        </Col>
                    </Row>
                ),
            },
        ];

        FormtatoTabla = (
            <Container>
                <Row>
                    <Col>
                        {' '}
                        <Button
                            variant="outline-secondary"
                            onClick={() => handleChangeFact()}
                        >
                            Ver como Cocina
                        </Button>
                    </Col>
                    <Col>2 of 2</Col>
                </Row>
                <Row>
                    <Col>
                        <h6>
                            Pedidos Seleccionados: {SelectedRows.toString()}
                        </h6>
                    </Col>

                    <Col>2 of 3</Col>

                    <Col>
                        {' '}
                        <Button
                            variant="outline-secondary"
                            onClick={() => handleChangeFact()}
                        >
                            Facturar
                        </Button>
                    </Col>
                </Row>
                <p></p>
            </Container>
        );
        const productos = [];

        DATA.forEach((order) => {
            order.productos.forEach((producto) => {
                productos.push(producto);
            });
        });

        const ExpandedComponent = ({ data }) => {
            console.log(data.productos);

            let ContenidoPedido = '==========Pedido==========\n';
            for (let i = 0; i < data.productos.length; i++) {
                ContenidoPedido +=
                    data.productos[i].nombre_producto +
                    '-' +
                    data.productos[i].cantidad +
                    '\n';
            }
            ContenidoPedido += '==========================';
            return <pre>{ContenidoPedido}</pre>;
        };
        // const ExpandedComponent = OrdenarPedido(data);
        // console.log(data[[0]].Pedido.Producto);
        TablaFacturador = (
            <DataTable
                columns={columns}
                data={DATA}
                expandableRows
                selectableRows
                expandableRowsComponent={ExpandedComponent}
                onSelectedRowsChange={handleChange}
            />
        );
    } else {
        FormtatoTabla = (
            <Button
                variant="outline-secondary"
                onClick={() => handleChangeFact()}
            >
                Ver como Facturador
            </Button>
        );

        const data = [
            {
                NPedido: 1,
                Cliente: 'Josue',
                Fecha: 'Hoy',
                Pedido: ['Pollo', 'Papas', 'Coca'],
            },
            {
                NPedido: 2,
                Cliente: 'Juan',
                Fecha: 'Hoy se fia',
                Pedido: ['Pollo', 'Papas', 'Coca (En litros)'],
            },
        ];

        //INFO COLUMNAS
        const columns = [
            {
                name: 'N_Pedido',
                selector: (row) => row.numero_pedido,
            },

            {
                name: 'Mesa',
                selector: (row) => row.mesaID,
            },

            {
                name: 'Fecha',
                selector: (row) => row.fecha,
            },

            {
                name: 'Acciones',

                cell: (props) => (
                    <Button
                        variant="success"
                        onClick={() => Cocinado(props.numero_pedido)}
                        id={props.ID}
                    >
                        +
                    </Button>
                ),
            },
        ];

        const columns2 = [
            {
                name: 'Eliminar',
                cell: (props) => (
                    <Button
                        variant="danger"
                        onClick={() => DevolverNoCocinado(props.numero_pedido)}
                        id={props.ID}
                    >
                        -
                    </Button>
                ),
            },
            {
                name: 'N_Pedido',
                selector: (row) => row.numero_pedido,
            },

            {
                name: 'Mesa',
                selector: (row) => row.mesaID,
            },
        ];

        const ExpandedComponent = ({ data }) => {
            console.log('==================PRODUCTOS==============');
            console.log(data.productos);

            let ContenidoPedido = '==========Pedido==========\n';
            for (let i = 0; i < data.productos.length; i++) {
                ContenidoPedido +=
                    data.productos[i].nombre_producto +
                    '-' +
                    data.productos[i].cantidad +
                    '\n';
            }
            ContenidoPedido += '==========================';
            return <pre>{ContenidoPedido}</pre>;
        };

        const rowPreExpanded = (row) => (row.all = true);

        TablaCocinaIzquierda = (
            <DataTable
                columns={columns}
                data={dataPending}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
                expandableRowExpanded={rowPreExpanded}
            />
        );

        TablaCocinaDerecha = (
            <DataTable
                columns={columns2}
                data={DATA}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
            />
        );
    }

    return (
        <Container>
            <BarraLateral />
            <h1>Lista PEDIDOS</h1>

            {FormtatoTabla}
            {TablaFacturador}

            <Row>
                <Col>{TablaCocinaIzquierda}</Col>;
                <Col>{TablaCocinaDerecha}</Col>
            </Row>
        </Container>
    );
}

export default LISTAPEDIDOS;
