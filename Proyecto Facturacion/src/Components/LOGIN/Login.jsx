import React, { useState, useEffect } from 'react';
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import './LOGIN.css';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/LOGIN';
function LOGIN(props) {
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
        let { user, userpassword } = form;

        if ((!user && user !== '') || user == '') {
            //En realidad es username
            newErrors.user = 'Espacio de Username Vacio !';
            //email = "";
        }
        // validate with regex
        if ((!userpassword && userpassword !== '') || userpassword == '') {
            newErrors.userpassword = 'Espacio de contrasena vacio !';
            //password = "";
        }

        return newErrors;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            console.log(form.user);
            console.log(form.userpassword);
            try {
                const data = await login(form.user, form.userpassword);

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Bienvenido',
                    showConfirmButton: false,
                    timer: 1500,
                });
                localStorage.setItem('USERNAME', JSON.stringify(form.user));
                navigate('/home');
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o contrasena no valido',
                });
            }
        }
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={88} lg={6} xs={15}>
                        <Card className="shadow p-0">
                            <Card.Header className="bg-blue">
                                <Row>
                                    <Col>
                                        <img
                                            class="logo"
                                            src="/assets/images/logo.png"
                                            alt=""
                                        />
                                    </Col>
                                </Row>
                            </Card.Header>
                            <Card.Body>
                                <div className="">
                                    <h2 className="fw-bold mb-2 text-uppercase ">
                                        Iniciar Sesion
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
                                                    Nombre de usuario
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ingrese usuario"
                                                    onChange={(e) =>
                                                        setField(
                                                            'user',
                                                            e.target.value
                                                        )
                                                    }
                                                    isInvalid={!!errors.user}
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicPassword"
                                            >
                                                <Form.Label>
                                                    Contraseña
                                                </Form.Label>
                                                <Form.Control
                                                    type="password"
                                                    placeholder="Ingrese contraseña"
                                                    onChange={(e) =>
                                                        setField(
                                                            'userpassword',
                                                            e.target.value
                                                        )
                                                    }
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
                                        <div className="mt-3">
                                            <p className="mb-0  text-center">
                                                ¿Desea recuperar contraseña?{' '}
                                                <a
                                                    href="/Recuperar"
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

export default LOGIN;
