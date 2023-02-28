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

    //HANDLERS
    const handleChangeFact = () => {
        if (facturador) {
            setFacturador(false);
        } else {
            setFacturador(true);
        }
    };

    useEffect(() => {
        console.log(`Facturado ` + facturador);
    });

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
        await fetch(`http://localhost:3000/orders/Listo`, {
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
            await fetch('http://localhost:3000/orders/Pending')
                .then((response) => response.json())
                .then((dataPending) => {
                    console.log(dataPending.order.orders),
                        setDataPending(dataPending.order.orders);
                });
        };

        getAllPendingPedidos();
    }, [DevolverNoCocinado]);

    useEffect(() => {
        const getAllPedidos = async () => {
            await fetch('http://localhost:3000/orders/')
                .then((response) => response.json())
                .then((data1) => {
                    console.log(data1.order.orders),
                        setData(data1.order.orders);
                });
        };

        getAllPedidos();
    }, [DevolverNoCocinado]);

    //IFS

    let FormtatoTabla;
    let TablaFacturador;
    let TablaCocinaDerecha;
    let TablaCocinaIzquierda;
    if (facturador) {
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
                name: 'Eliminar',
                cell: (props) => (
                    <Button
                        variant="danger"
                        //    onClick={() => handleChange2(props)}
                        id={props.ID}
                    >
                        Eliminar
                    </Button>
                ),
            },
            {
                name: 'Editar',
                cell: (props) => (
                    <Button
                        variant="primary"
                        //    onClick={() => handleChange2(props)}
                        id={props.ID}
                    >
                        Editar
                    </Button>
                ),
            },

            {
                name: 'Facturar',
                cell: (props) => (
                    <Button
                        variant="outline-success"
                        //    onClick={() => handleChange2(props)}
                        href="/ListaFacturacion"
                        id={props.ID}
                    >
                        Facturar
                    </Button>
                ),
            },
        ];
        FormtatoTabla = (
            <Button
                variant="outline-secondary"
                onClick={() => handleChangeFact()}
            >
                Ver como Cocina
            </Button>
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
                expandableRowsComponent={ExpandedComponent}
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
                name: 'Listo',

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

        TablaCocinaIzquierda = (
            <DataTable
                columns={columns}
                data={dataPending}
                expandableRows
                expandableRowsComponent={ExpandedComponent}
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
