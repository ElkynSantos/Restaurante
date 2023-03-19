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
import { useSelector, useDispatch } from 'react-redux';
import {
    PencilFill,
    BookmarkCheckFill,
    ArrowRightCircle,
    ArrowLeftCircle,
} from 'react-bootstrap-icons';

import { useState, useEffect, useMemo, useRef } from 'react';

import Modal from 'react-bootstrap/Modal';
import DataTable from 'react-data-table-component';

import {
    showbillconfirmslice,
    closebillconfirmslice,
} from '../../features/billconfirmslice';

import { updatepedidoseleccionados } from '../../features/pedidoseleccionados';

import Swal from 'sweetalert2';
import CREARFACTURA from '../CrearFactura/index';
import CONFIRMBILL from '../ConfirmarPedidosTotal/index';
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
    const dispatch = useDispatch();
    const miTablaRef = useRef(null);
    const [smShow, setSmShow] = useState(false);
    const [facturador, setFacturador] = useState(true);
    const [DATA, setData] = useState([]);

    const [dataPending, setDataPending] = useState([]);
    const [SelectedRows, setSelectedRows] = useState([]);

    const [PedidosaFacturar, setPedidosaFacturar] = useState([]);
    const show2 = useSelector((state) => state.createbill);

    const handleCloseCBill = () => {
        dispatch(closebillconfirmslice());
        //  deseleccionarFilas;
    };

    const handleShowCBill = () => {
        console.log('handleShowCBill');
        dispatch(showbillconfirmslice());
        //  deseleccionarFilas;
        console.log(show2);
    };

    const updatePedidos = (data) => {
        console.log('handleShowCBill');
        dispatch(updatepedidoseleccionados(data));

        console.log(show2);
    };

    //HANDLERS
    /*
    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');

            const Cocinado = async (idPedido) => {
                await fetch(`http://localhost:3000/orders/ready`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },

                    body: JSON.stringify({ id: idPedido }),
                });
            };
        }, 5000);
        return () => clearInterval(interval);
    }, []);*/

    const handleChangeFact = async () => {
        if (SelectedRows.length === 0) {
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Favor debe seleccionar un pedidos',
                showConfirmButton: false,
                timer: 1500,
            });

            return;
        }
        updatePedidos(SelectedRows);
        //  updatePedidos(row.numero_pedido);
        handleShowCBill();

        /*

        const hoy = new Date().toISOString().split('T')[0];
        console.log(hoy);
        await fetch(`http://localhost:3000/bills/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({
                numeroFactura: '100',
                nombreCliente: 'Josue',
                RtnCliente: '0501200302608',
                fechaCreacion: hoy,
                subtotal: 22.0,
                total: 25.0,
                tarjetaEfectivo: 0,
                cambio: 20.0,
                anular: 0,
                pendiente: 0, //
                pagado: 0, //
                idConfiguracionFactura: 1,
                listapedidos: '46',
                usuarioAtiende: 'JORO7226',
            }),
        });*/
    };

    const handleFacturar = () => {};

    const DevolverNoCocinado = async (idPedido) => {
        await fetch(`http://localhost:3000/orders/132`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ id: idPedido }),
        });
    };

    /*  const getProductos = async () => {
        await fetch('http://localhost:3000/orders/')
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
            });
    };*/
    /*
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
*/

    useEffect(() => {
        const interval = setInterval(() => {
            console.log('This will run every second!');

            const getAllPedidos = async () => {
                try {
                    await fetch('http://localhost:3000/orders/ready')
                        .then((response) => response.json())
                        .then((data1) => {
                            console.log(data1.status);
                            console.log('=========ReadytoFact===========');
                            if (data1.status != 'fail') {
                                console.log(data1.order.orders),
                                    setData(data1.order.orders);
                            } else {
                                setData([]);
                            }
                        });
                } catch (error) {
                    setData([]);
                }
            };

            getAllPedidos();
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    /*
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
    }, []);*/

    let FormtatoTabla;
    let TablaFacturador;
    let TablaCocinaDerecha;
    let TablaCocinaIzquierda;

    const handleChange = ({ selectedRows }) => {
        console.log(selectedRows);

        const arraytemp = [];
        for (let i = 0; i < selectedRows.length; i++) {
            arraytemp.push(selectedRows[i].numero_pedido);
        }

        setSelectedRows(arraytemp);

        console.log('Selected Rows: ', selectedRows);
    };

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
            cell: (row) => (
                <Row>
                    <Col>
                        <button
                            className="btn-transparent text-success p-0"
                            title="Facturar"
                            onClick={() => {
                                console.log('SelectedRows');
                                console.log(SelectedRows);
                                //updatePedidos(SelectedRows);
                                updatePedidos(row.numero_pedido);
                                handleShowCBill();
                            }}
                        >
                            <BookmarkCheckFill />
                            Facturar
                        </button>
                    </Col>
                </Row>
            ),
        },
    ];
    /*
 <Col>
                            <button
                                className="btn-transparent text-blue p-0"
                                title="Editar"
                            >
                                <PencilFill />
                            </button>
                        </Col>
*/
    FormtatoTabla = (
        <Container>
            <Row>
                <Col>
                    {' '}
                    {/*   <Button
                            variant="outline-secondary"
                            onClick={() => handleChangeFact()}
                        >
                            Ver como Cocina
        </Button>*/}
                </Col>
                <Col></Col>
            </Row>
            <Row>
                <Col>
                    <h6>Pedidos Seleccionados: {SelectedRows.toString()}</h6>
                </Col>

                <Col></Col>

                <Col>
                    {' '}
                    <Button
                        variant="outline-success"
                        onClick={() => handleChangeFact()}
                    >
                        Facturar Seleccion
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

    const deseleccionarFilas = () => {
        // const dataTable = miTablaRef.current;
        miTablaRef.current.toggleAllRowsSelected(false);
    };

    // const ExpandedComponent = OrdenarPedido(data);
    // console.log(data[[0]].Pedido.Producto);

    const rowSelectCritera = (row) => {
        SelectedRows.includes(row.numero_pedido);
    };

    return (
        <div>
            <CONFIRMBILL />
            <CREARFACTURA />

            <BarraLateral />
            <Container className="mt-5">
                <h1>Lista PEDIDOS</h1>

                {FormtatoTabla}
                <DataTable
                    //   title="Mi tabla"
                    columns={columns}
                    data={DATA}
                    //   theme="solarized"
                    expandableRows
                    selectableRows
                    expandableRowsComponent={ExpandedComponent}
                    //onSelectedRowsChange={handleChange}
                    selectableRowSelected={rowSelectCritera}
                    ref={miTablaRef}
                />

                <Row>
                    <Col>{TablaCocinaIzquierda}</Col>;
                    <Col>{TablaCocinaDerecha}</Col>
                </Row>
            </Container>
        </div>
                <Row>
                    <Col>{TablaCocinaIzquierda}</Col>;
                    <Col>{TablaCocinaDerecha}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default LISTAPEDIDOS;
