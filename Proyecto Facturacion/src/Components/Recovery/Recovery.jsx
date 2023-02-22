import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

function Recovery() {
    const [form, setForm] = useState({});

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    function findErrors() {
        const newErrors = {};
        let { userPassword, confirmpassword } = form;

        if ((!userPassword && userPassword !== '') || userPassword == '') {
            //En realidad es username
            newErrors.userPassword = 'Espacio de userPassword Vacio !';
            //email = "";
        }
        // validate with regex
        const passwordPattern = new RegExp(
            /^(.{0,7}|[^0-9]*|[^A-Z]*|[^a-z]*|[a-zA-Z0-9]*)$/
        );

        if (passwordPattern.test(userPassword)) {
            newErrors.password = 'Formato de contraseña inválido.';
        }
        if (
            (!confirmpassword && confirmpassword !== '') ||
            confirmpassword == ''
        ) {
            newErrors.confirmpassword = 'Espacio de contrasena vacio !';
            //password = "";
        }

        if (userPassword != confirmpassword) {
            newErrors.confirmpassword = 'No coindeden las contrasenas';
        }

        return newErrors;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            console.log(newErrors);
        } else {
            //console.log(form.user);
            //console.log(form.userpassword);
        }
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={88} lg={6} xs={15}>
                        <Card className="shadow p-0">
                            <Card.Header className="bg-blue"></Card.Header>
                            <Card.Body>
                                <div className="">
                                    <h2 className="fw-bold mb-2 text-uppercase ">
                                        Recuperacion de contraseña
                                    </h2>
                                    {/* <p>
                                        Por favor ingrese correo electronico y
                                        Contrasena
                                    </p> */}
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="text-center">
                                                    contraseña
                                                </Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Ingrese la nueva contraseña"
                                                    onChange={(e) =>
                                                        setField(
                                                            'userPassword',
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    isInvalid={!!errors.user}
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>
                                                    Confirmar contraseña
                                                </Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Ingrese de nuevo la contraseña"
                                                    onChange={(e) =>
                                                        setField(
                                                            'confirmpassword',
                                                            e.target.value
                                                        )
                                                    }
                                                    required
                                                    isInvalid={
                                                        !!errors.userpassword
                                                    }
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
                                                    Ingresar
                                                </Button>
                                            </div>
                                        </Form>
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

export default Recovery;
