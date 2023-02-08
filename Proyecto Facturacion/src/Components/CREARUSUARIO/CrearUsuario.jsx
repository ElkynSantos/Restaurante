import React, { useState } from 'react';
import {
    Col,
    Button,
    Row,
    Container,
    Card,
    Form,
    FormControl,
    FormLabel,
} from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import './CREARUSUARIO.css';

function CREARUSUARIO() {
    const [date, setDate] = useState(new Date());
    const [form, setForm] = useState({});
    const [errors, setErrors] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    function findErrors() {
        const newErrors = {};
        let { email, password } = form;

        if ((!email && email !== '') || email == '') {
            //En realidad es username
            newErrors.email = 'Espacio de ID Vacio !';
            //email = "";
        }
        // validate with regex
        /*if ((!password && password !== "") || password == "") {
      newErrors.password = "Espacio de contrasena vacio !";
      //password = "";
    }*/

        console.log(newErrors.password);
        return newErrors;
    }
    async function handleSubmit(e) {
        e.preventDefault();
        let newErrors = findErrors();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            //LLAMEN A LA API
        }
    }

    return (
        <div>
            <Container>
                <Row className="vh-100 d-flex justify-content-center align-items-center">
                    <Col md={88} lg={6} xs={15}>
                        <div className="border border-3 border-primary"></div>
                        <Card className="shadow">
                            <Card.Body>
                                <div className="mb-3 mt-md-4">
                                    <h2 className="fw-bold mb-2 text-uppercase ">
                                        Creacion de Usuario
                                    </h2>
                                    <p>
                                        Por favor ingrese todos los datos
                                        correspondientes del nuevo usuario.
                                    </p>
                                    <div className="mb-3">
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="text-center">
                                                    Nombre
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ingrese el nombre"
                                                    onChange={(e) =>
                                                        setField(
                                                            'email',
                                                            e.target.value
                                                        )
                                                    }
                                                    isInvalid={!!errors.email}
                                                />
                                            </Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="text-center">
                                                    Apellido
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ingrese el apellido"
                                                    onChange={(e) =>
                                                        setField(
                                                            'email',
                                                            e.target.value
                                                        )
                                                    }
                                                    isInvalid={!!errors.email}
                                                />
                                            </Form.Group>

                                            <Form.Label className="text-center">
                                                Genero
                                            </Form.Label>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title="Seleccionar"
                                            >
                                                <Dropdown.Item href="#/action-1">
                                                    Masculino
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    Femenino
                                                </Dropdown.Item>
                                            </DropdownButton>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            ></Form.Group>

                                            <Form.Group>
                                                <Form.Label>
                                                    Fecha de nacimiento
                                                </Form.Label>
                                                <Form.Control
                                                    type="date"
                                                    placeholder="Ingresar fecha de nacimiento"
                                                ></Form.Control>
                                            </Form.Group>
                                            <br></br>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="text-center">
                                                    Lugar de nacimiento
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ingrese el lugar"
                                                    onChange={(e) =>
                                                        setField(
                                                            'email',
                                                            e.target.value
                                                        )
                                                    }
                                                    isInvalid={!!errors.email}
                                                />
                                            </Form.Group>
                                            <br></br>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="text-center">
                                                    Numero de teléfono
                                                </Form.Label>
                                                <OnlyNumbersTextField></OnlyNumbersTextField>
                                            </Form.Group>
                                            <br></br>

                                            <h6 class="shadow p-3 mb-5 bg-white rounded">
                                                {' '}
                                                El ID asignado a este usuario se
                                                creará automáticamente{' '}
                                            </h6>

                                            <Form.Label className="text-center">
                                                Rol que asignará al usuario
                                            </Form.Label>
                                            <DropdownButton
                                                id="dropdown-basic-button"
                                                title="Seleccionar"
                                            >
                                                <Dropdown.Item href="#/action-1">
                                                    Administrador del sistema
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-2">
                                                    Gerente
                                                </Dropdown.Item>
                                                <Dropdown.Item href="#/action-3">
                                                    Facturador
                                                </Dropdown.Item>
                                            </DropdownButton>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicCheckbox"
                                            ></Form.Group>
                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="text-center">
                                                    Direccion de correo
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ingrese correo personal"
                                                    onChange={(e) =>
                                                        setField(
                                                            'email',
                                                            e.target.value
                                                        )
                                                    }
                                                    isInvalid={!!errors.email}
                                                />
                                            </Form.Group>

                                            <Form.Group
                                                className="mb-3"
                                                controlId="formBasicEmail"
                                            >
                                                <Form.Label className="text-center">
                                                    Constraseña
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    placeholder="Ingrese contraseña del usuario"
                                                    onChange={(e) =>
                                                        setField(
                                                            'email',
                                                            e.target.value
                                                        )
                                                    }
                                                    isInvalid={!!errors.email}
                                                />
                                            </Form.Group>
                                            <br></br>
                                            <br></br>

                                            <div className="d-grid">
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                >
                                                    Crear usuario
                                                </Button>
                                            </div>
                                            <br></br>

                                            <div className="d-grid">
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                >
                                                    Salir
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

const OnlyNumbersTextField = () => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        const newValue = event.target.value;
        if (/^\d+$/.test(newValue)) {
            setValue(newValue);
        }
    };

    return (
        <Form>
            <FormControl
                value={value}
                onChange={handleChange}
                required
                minlength="8"
                maxlength="8"
                placeholder="00000000"
            />
        </Form>
    );
};

const BirthdayTextField2 = () => {
    const [birthday, setBirthday] = useState('');

    const handleChange = (event) => {
        const input = event.target.value;
        if (input.length === 2 || input.length === 5) {
            setBirthday(input + '/');
        } else {
            setBirthday(input);
        }
    };

    return (
        <Form>
            <FormLabel>Fecha de Nacimiento</FormLabel>
            <FormControl
                type="date"
                value={birthday}
                onChange={handleChange}
                required
            />
        </Form>
    );
};

export default CREARUSUARIO;
