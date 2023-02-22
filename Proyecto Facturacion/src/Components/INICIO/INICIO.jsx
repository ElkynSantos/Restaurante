import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';

import BarraLateral from '../common/index';

function INICIO() {
    const [fecha, setFecha] = useState(null);
    const [hour, setHora] = useState(null);
    const [user, setUser] = useState();
    const fechita = new Date();
    const ahora = fechita.toLocaleDateString();
    function getHour() {
        const h = new Date();
        const hours = (h.getHours() < 10 ? '0' : '') + h.getHours();
        const minutes = (h.getMinutes() < 10 ? '0' : '') + h.getMinutes();
        const secs = (h.getSeconds() < 10 ? '0' : '') + h.getSeconds();

        return hours + ':' + minutes + ':' + secs;
    }
    const getData = () => {
        return localStorage.getItem('USERNAME');
    };
    const updateTime = () => {
        setHora(getHour);
    };
    useEffect(() => {
        setFecha(ahora);
        setUser(getData());
    }, [fecha, user]);
    //

    setInterval(updateTime, 1000);

    return (
        <div>
            <BarraLateral />
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={88} lg={6} xs={15}>
                        <div className="border border-3 border-primary"></div>

                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <Container
                                        fluid
                                        className="bg-blue rounded p-2"
                                    >
                                        <img
                                            src="/assets/images/logo.png"
                                            className="imagen2"
                                        ></img>
                                    </Container>
                                    <h2 className="fw-bold mb-2 text-uppercase ">
                                        <br></br>
                                        {user}
                                    </h2>

                                    <div className="mb-3">
                                        <div className="mt-3">
                                            <h4>Fecha : {fecha}</h4>
                                            <h4>Hora : {hour}</h4>
                                        </div>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default INICIO;
