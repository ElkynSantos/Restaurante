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
import Swal from 'sweetalert2';
import { useState, useEffect, useMemo } from 'react';
import DataTable from 'react-data-table-component';
import Modal from 'react-bootstrap/Modal';
import { TruckFlatbed } from 'react-bootstrap-icons';
import Dropdown from 'react-bootstrap/Dropdown';
function PEDIDOS() {
    const [smShow, setSmShow] = useState(true);
    let selectedRows;
    let MesasTitulos;
    const [AllSelectedRows, setSelectedRows] = useState([]);
    const [DATO, setData] = useState([]);

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
    useEffect(() => {
        // Update the document title using the browser API
        console.log('Mesa' + value);
        // alert(`You clicked ${count} times`);
    });

    //_____________________________
    let button;
    if (true) {
        button = (
            <Button
                variant="outline-success"
                onClick={() => setCount(count + 1)}
            >
                Disponible
            </Button>
        );
    } else {
        button = (
            <Button
                variant="outline-danger"
                onClick={() => setOrder(props.estadoMesa)}
            >
                Ocupada
            </Button>
        );
    }

    //==============================================

    const handleChange = (props) => {
        // reale.stopPropagation();

        let valueToPush = new Array();
        valueToPush[props.id - 1] = props;

        let outerArray = [];
        if (AllSelectedRows.length > 0) {
            outerArray = [...AllSelectedRows];
        }
        let ProductoEnLista = false;
        for (let i = 0; i < AllSelectedRows.length; i++) {
            //  if(){
            if (AllSelectedRows[i].codigo_producto == props.codigo_producto) {
                ProductoEnLista = true;
                console.log();
                AllSelectedRows[i].cant_producto += 1;
                setSelectedRows(AllSelectedRows);
                break;
            }

            //break;
            //}
        }
        if (!ProductoEnLista) {
            outerArray.push({
                codigo_producto: props.codigo_producto,
                nombre_producto: props.nombre_producto,
                precio_producto: props.precio_producto,
                cant_producto: 1,
            });
        }

        setSelectedRows(outerArray);
        console.log(AllSelectedRows);

        console.log('ALL SELECTED ROWS: ', AllSelectedRows);
    };

    const handleChange2 = (props) => {
        let valueToPush = new Array();
        valueToPush[props.id - 1] = props;

        let outerArray = [];
        if (AllSelectedRows.length > 0) {
            outerArray = [...AllSelectedRows];
        }
        let InidiceEliminar;
        for (let i = 0; i < AllSelectedRows.length; i++) {
            //  if(){
            if (AllSelectedRows[i].codigo_producto == props.codigo_producto) {
                if (AllSelectedRows[i].cant_producto > 1) {
                    AllSelectedRows[i].cant_producto -= 1;
                    setSelectedRows(AllSelectedRows);
                } else if (AllSelectedRows[i].cant_producto == 1) {
                    InidiceEliminar = i;
                }
            }
        }
        if (InidiceEliminar != null) {
            outerArray.splice(InidiceEliminar, 1);
        }

        //break;
        setSelectedRows(outerArray);
        console.log('ALL SELECTED ROWS 2: ', AllSelectedRows);
    };
    useEffect(() => {
        console.log(`You clicked ${AllSelectedRows} times`);
    });

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
            selector: (row) => row.cant_producto,
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

    /* const data = [
        {
            id: 1,
            title: 'Beetlejuice',
            year: '1988',
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ];*/

    const getProductId = async (productName) => {
        const response = await fetch(`http://localhost:3000/products/GG`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },

            body: JSON.stringify({ product: productName }),
        });
        const data = await response.json();

        console.log('==================DATA===============');
        console.log(data);

        return data.products[0].id;
    };

    const newOrder = async () => {
        console.log(AllSelectedRows);
        let listaprod = [];
        for (let i = 0; i < AllSelectedRows.length; i++) {
            const ProdID = await getProductId(
                AllSelectedRows[i].nombre_producto
            ).catch((error) => {
                console.error(error);
            });

            console.log(ProdID);
            console.log(AllSelectedRows[i].cant_producto);
            listaprod.push({
                idProducto: ProdID,
                cantidad: AllSelectedRows[i].cant_producto,
            });
        }

        console.log(
            JSON.stringify({
                tableId: value,
                waiterId: 21,
                products: listaprod,
                delivery: 0,
            })
        );
        console.log(listaprod);

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

        console.log('New Order: \n' + value + ' ' + AllSelectedRows);

        setSelectedRows([]);
        setValue('(Seleccionar Mesa)');
    };

    useEffect(() => {
        const getAllProducts = async () => {
            await fetch('http://localhost:3000/products')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data), setData(data.allProducts);
                });
        };

        getAllProducts();
    }, []);

    const [filterText, setFilterText] = useState('');
    const [resetPaginationToggle, setResetPaginationToggle] = useState(false);
    const filteredItems = DATO.filter(
        (item) =>
            item.nombre_producto &&
            item.nombre_producto
                .toLowerCase()
                .includes(filterText.toLowerCase())
    );

    const subHeaderComponentMemo = useMemo(() => {
        const handleClear = () => {
            if (filterText) {
                setResetPaginationToggle(!resetPaginationToggle);
                setFilterText('');
            }
        };

        return (
            /*
            <FilterComponent
                onFilter={(e) => setFilterText(e.target.value)}
                onClear={handleClear}
                filterText={filterText}
            />
*/

            <Form inline>
                <FormControl
                    type="text"
                    placeholder="Buscar Producto"
                    value={filterText}
                    onChange={(e) => setFilterText(e.target.value)}
                />
            </Form>
        );
    }, [filterText, resetPaginationToggle]);

    return (
        <div>
            <BarraLateral />
            <Container className='mt-5'>
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
                        {' '}
                        <DataTable
                            title="Lista de Productos"
                            columns={columns}
                            // selectableRows

                            onRowClicked={handleChange}
                            //   data={DATO}

                            data={filteredItems}
                            pagination
                            paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
                            subHeader
                            subHeaderComponent={subHeaderComponentMemo}
                            persistTableHead
                        />
                    </Col>

                    <Col>
                        <DataTable
                            title="Orden"
                            columns={columns2}
                            data={AllSelectedRows}
                            onRowClicked={handleChange2}
                        />
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
                                //       href="/ListaPedidos"
                                variant="primary"
                                size="lg"
                                onClick={() => newOrder()}
                                // href="\listaPedidos"
                            >
                                Facturar
                            </Button>
                            {handleChange2}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default PEDIDOS;

/*
  const [DATO, setData] = useState([]);

    useEffect(() => {
        const getAllProducts = async () => {
            const url = 'http://localhost:3000/api/v1/orders';

            const result = await axios.get(url);

            console.log(result.data);
            setData(result.data);
        };

        getAllProducts();
    }, []);

    console.log('DATOOOS: ' + DATO[0]);














  return (
            <ul>
                {data.map((item) => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        );
*/

/*











 <>
                <Modal
                    size="lg"
                    show={smShow}
                    onHide={() => setSmShow(false)}
                    aria-labelledby="example-modal-sizes-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="example-modal-sizes-title">
                            Seleccionar Mesa
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row className="add-space">
                            {array1.map((mesa) => (
                                <Col lg>
                                    <p>
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img
                                                variant="top"
                                                src="mesa.png"
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    Mesa {mesa.numero}
                                                </Card.Title>
                                                <Card.Text>
                                                    Disponible
                                                </Card.Text>

                                                <>
                                                    <Button
                                                        variant="primary"
                                                        //    onClick={handleShow}
                                                        href="/Pedidos"
                                                    >
                                                        Seleccionar
                                                    </Button>
                                                </>
                                            </Card.Body>
                                        </Card>
                                    </p>
                                </Col>
                            ))}
                        </Row>
                    </Modal.Body>
                </Modal>
            </>



*/
