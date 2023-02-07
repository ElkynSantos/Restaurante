import BarraLateral from '../common/index.js';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

function PEDIDOS() {
    let selectedRows;
    const [AllSelectedRows, setSelectedRows] = useState([]);

    const handleChange = ({ selectedRows }) => {
        // You can set state or dispatch with something like Redux so we can use the retrieved data
        setSelectedRows(selectedRows);

        console.log('Selected Rows: ', selectedRows);
    };

    const handleChange2 = ({}) => {
        // You can set state or di spatch with something like Redux so we can use the retrieved data

        console.log('Selected Rows 2: ');
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
            name: 'Añadir',
            cell: (row) => (
                <button onClick={clickHandler} id={row.ID}>
                    Action
                </button>
            ),
        },
        {
            name: 'Eliminar',
            cell: (row) => (
                <button onClick={clickHandler} id={row.ID}>
                    Action
                </button>
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

    const [DATO, setData] = useState([]);

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

    return (
        <Container>
            <BarraLateral />
            <h1>PEDIDOS</h1>

            <Row>
                <Col>
                    {' '}
                    <DataTable
                        columns={columns}
                        data={DATO}
                        // selectableRows

                        onRowClicked={handleChange}
                    />
                </Col>

                <Col>
                    {' '}
                    <DataTable
                        columns={columns2}
                        data={AllSelectedRows}
                        onRowClicked={handleChange2}
                    />
                    <p></p>
                    <p></p>
                    <Button href="/mesas" variant="outline-secondary">
                        Secondary
                    </Button>{' '}
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
