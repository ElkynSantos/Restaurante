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
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';

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
    const [data1, setData] = useState([]);

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
                    console.log(dataPending.order),
                        setDataPending(dataPending.order.reverse());
                });
        };

        getAllPendingPedidos();
    }, []);

    useEffect(() => {
        const getAllPedidos = async () => {
            await fetch('http://localhost:3000/orders/')
                .then((response) => response.json())
                .then((data1) => {
                    console.log(data1.order), setData(data1.order.reverse());
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
                name: 'Id',
                selector: (row) => row.id,
            },
            {
                name: 'Numero de Mesa',
                selector: (row) => row.numeroMesa,
            },
            {
                name: 'Estado',
                selector: (row) => row.estadoCocina,
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
        const ExpandedComponent = ({ data }) => (
            <pre>{JSON.stringify(data.Pedido, null, 2)}</pre>
        );
        // const ExpandedComponent = OrdenarPedido(data);
        console.log(data[[0]].Pedido.Producto);
        TablaFacturador = (
            <DataTable
                columns={columns}
                data={data1}
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
                name: 'Id',
                selector: (row) => row.id,
            },
            {
                name: 'Numero de Mesa',
                selector: (row) => row.numeroMesa,
            },
            {
                name: 'Estado',
                selector: (row) => row.estadoCocina,
            },

            {
                name: 'Añadir',

                cell: (props) => (
                    <Button onClick={() => handleChange(props)} id={props.ID}>
                        +
                    </Button>
                ),
            },
        ];

        const columns2 = [
            {
                name: 'Id',
                selector: (row) => row.id,
            },
            {
                name: 'Numero de Mesa',
                selector: (row) => row.numeroMesa,
            },
            {
                name: 'Estado',
                selector: (row) => row.estadoCocina,
            },

            {
                name: 'Eliminar',
                cell: (props) => (
                    <Button
                        variant="danger"
                        onClick={() => handleChange2(props)}
                        id={props.ID}
                    >
                        -
                    </Button>
                ),
            },
        ];

        const ExpandedComponent = ({ data }) => (
            <pre>{JSON.stringify(data.Pedido, null, 2)}</pre>
        );

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
                data={data1}
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
