import BarraLateral from '../common/index.js';
import DataTable from 'react-data-table-component';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
const columns = [
    {
        name: 'Title',
        selector: (row) => row.title,
        sortable: true,
    },
    {
        name: 'Year',
        selector: (row) => row.year,
        sortable: true,
    },
];

const data = [
    {
        id: 1,
        title: 'Factura 1',
        year: '01/03',
    },
    {
        id: 2,
        title: 'Factura 2',
        year: '02/03',
    },
];

const columns2 = [
    {
        name: 'Id',
        selector: (row) => row.id,
    },
    {
        name: 'Factura',
        selector: (row) => row.title,
    },
    {
        name: 'Fecha',
        selector: (row) => row.year,
    },

    {
        name: 'Eliminar',
        cell: (props) => (
            <Button
                variant="danger"
                //     onClick={() => handleChange2(props)}
                id={props.ID}
            >
                -
            </Button>
        ),
    },
];

function LISTAFACTURACION() {
    return (
        <Container>
            <BarraLateral />
            <h1>Lista Facturacion</h1>

            <DataTable columns={columns2} data={data} />
        </Container>
    );
}

export default LISTAFACTURACION;
