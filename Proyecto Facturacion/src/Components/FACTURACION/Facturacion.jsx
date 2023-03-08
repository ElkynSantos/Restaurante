import BarraLateral from '../common/index.js';

import { Container } from 'react-bootstrap';

function FACTURACION() {
    return (
        <div>
            <BarraLateral />
            <Container className='mt-5'>
                <h1>Factura Generada</h1>

                <p></p>

                <h4>Info Generada</h4>
            </Container>
        </div>
    );
}

export default FACTURACION;
