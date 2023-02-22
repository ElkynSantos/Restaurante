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
        title: 'Beetlejuice',
        year: '1988',
    },
    {
        id: 2,
        title: 'Ghostbusters',
        year: '1984',
    },
];

function LISTAFACTURACION() {
    return (
        <Container>
            <BarraLateral />
            <h1>Lista Facturacion</h1>

            <DataTable columns={columns} data={data} />
        </Container>
    );
}

export default LISTAFACTURACION;
