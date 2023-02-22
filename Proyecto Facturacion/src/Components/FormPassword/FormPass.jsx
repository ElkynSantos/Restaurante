import React from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useState } from 'react';
import Swal from 'sweetalert2';
import { resetPassword } from '../../services/Recovery';
function FormPassword() {
    const [form, setForm] = useState({});

    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            //console.log('entro');
            const data = await resetPassword(form.email);
            console.log(data);
            if (data.status == 'ok') {
                console.log('entro');
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Se envió correo',
                    showConfirmButton: true,

                    text: 'Revisa tu correo electrónico',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No existe el email',
                });
            }
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un problema en el servidor',
            });
        }
    }
    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={88} lg={6} xs={15}>
                        <Card className="shadow p-0">
                            <Card.Header className="bg-blue text-white">
                                <Row>
                                    <Col>
                                        <h2 className="fw-bold mb-2 text-uppercase p-3">
                                            Recuperacion de Contraseña
                                        </h2>
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <div className="mb-3">
                                        <Form
                                            onSubmit={handleSubmit}
                                            name="test"
                                            id="test"
                                        >
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label>
                                                    Correo electrónico
                                                </Form.Label>
                                                <Form.Control
                                                    type="email"
                                                    placeholder="Ingresar correo"
                                                    onChange={(e) =>
                                                        setField(
                                                            'email',
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            ></Form.Group>
                                            <div className="d-grid">
                                                <Button
                                                    className="bg-blue"
                                                    type="submit"
                                                >
                                                    Enviar
                                                </Button>
                                            </div>
                                        </Form>
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                Para regresar haga{' '}
                                                <a
                                                    href="/"
                                                    className="text-blue fw-bold"
                                                >
                                                    Click aquí
                                                </a>
                                            </p>
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

export default FormPassword;
