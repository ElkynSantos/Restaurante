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

function PEDIDOS() {
    let selectedRows;
    const [AllSelectedRows, setSelectedRows] = useState([]);
    const [DATO, setData] = useState([]);

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

    useEffect(() => {
        const getAllProducts = async () => {
            await fetch('http://localhost:3000/productos')
                .then((response) => response.json())
                .then((data) => {
                    console.log(data), setData(data);
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
        <Container>
            <BarraLateral />
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
                    {' '}
                    <DataTable
                        title="Orden"
                        columns={columns2}
                        data={AllSelectedRows}
                        onRowClicked={handleChange2}
                    />
                    <div class="p-3 mb-2 bg-light text-dark">
                        {' '}
                        <Button href="/home" variant="outline-danger" size="lg">
                            Cancelar
                        </Button>{' '}
                        <Button
                            href="/mesas"
                            variant="outline-success"
                            size="lg"
                        >
                            Facturar
                        </Button>{' '}
                    </div>
                </Col>
            </Row>
        </Container>
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
