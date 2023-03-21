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
import PAGARFACURA from '../PagarFactura/index';
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
    const [selectedRows2, setSelectedRows2] = useState(false);
    const [toggledClearRows, setToggleClearRows] = useState(false);
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

        handleClearRows();
        handleShowCBill();
    };

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

    useEffect(() => {
        const interval = setInterval(() => {
            getAllPedidos();
            handleClearRows();
        }, 8000);
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        getAllPedidos();
        handleClearRows();
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
        setSelectedRows2(selectedRows);

        console.log(selectedRows);

        const arraytemp = [];
        for (let i = 0; i < selectedRows.length; i++) {
            if (SelectedRows.includes(selectedRows[i].numero_pedido)) {
                console.log('==============================');
                console.log(SelectedRows);
            } else {
                arraytemp.push(selectedRows[i].numero_pedido);
                console.log('=============Se Ingreso=================');
                console.log(SelectedRows);
            }
        }

        setSelectedRows(arraytemp);
        selectedRows = [];
        console.log('Selected Rows: ', SelectedRows);
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
            name: 'Hora',
            selector: (row) => {
                const date = new Date(row.fecha);
                return date.toLocaleTimeString([], {
                    hour: '2-digit',
                    minute: '2-digit',
                });
            },
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
    //   const rowSelectCritera = (row) => selectedRows2.includes(row);

    const rowSelectCritera = (row) => {
        SelectedRows.includes(row.numero_pedido);
    };
    const handleClearRows = () => {
        setSelectedRows([]);
        setToggleClearRows(!toggledClearRows);
        setSelectedRows([]);
    };

    return (
        <div>
            <CONFIRMBILL />
            <CREARFACTURA />
            <PAGARFACURA />
            <BarraLateral />
            <Container className="mt-5">
                <h1>Lista PEDIDOS</h1>

                {FormtatoTabla}
                <DataTable
                    //   title="Mi tabla"
                    columns={columns}
                    data={DATA}
                    //   theme="solarized"
                    noDataComponent={
                        <div className="p-4">Aun no hay pedidos cocinados</div>
                    }
                    expandableRows
                    expandableRowsComponent={ExpandedComponent}
                    selectableRows
                    onSelectedRowsChange={handleChange}
                    //  selectableRowSelected={rowSelectCritera}
                    clearSelectedRows={toggledClearRows}
                    ref={miTablaRef}
                />

                <Row>
                    <Col>{TablaCocinaIzquierda}</Col>;
                    <Col>{TablaCocinaDerecha}</Col>
                </Row>
            </Container>
        </div>
    );
}

export default LISTAPEDIDOS;
