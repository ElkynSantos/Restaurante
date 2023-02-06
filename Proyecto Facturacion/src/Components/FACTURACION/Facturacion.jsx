import BarraLateral from '../common/index.js';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';

function PEDIDOS() {
    return (
        <Container>
            <BarraLateral />
            <h1>PEDIDOS</h1>
        </Container>
    );
}

export default PEDIDOS;
