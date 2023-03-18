import { useEffect, useState } from 'react';
import {
    Container,
    Row,
    Col,
    Card,
    Form,
    Button,
    Image,
} from 'react-bootstrap';
import './Editp.css';
import BarraLateral from '../common/index';
import { editUser, getUser } from '../../services/users';
import Swal from 'sweetalert2';
function EditarPerf() {
    const [form, setForm] = useState({});
    const setField = (field, value) => {
        setForm({
            ...form,
            [field]: value,
        });
    };
    const [DATA, setData] = useState([]);
    const User = localStorage.getItem('USER');

    useEffect(() => {
        const getuser = async () => {
            await getUser(User).then((dataUser) => {
                setData(dataUser.user);
                setForm(dataUser.user);
            });
        };
        getuser();
    }, [getUser]);

    //console.log(DATA);
    console.log(form);

    async function handleSubmit(e) {
        //LLAMEN A LA API

        try {
            await editUser({
                userIdDb: form.userIdDb,
                name: form.Name,
                lastName: form.LastName,
                userName: form.UserName,
                rol: form.Rol,
                dni: form.DNI,
                gender: form.Gender,
                birthday: form.Birthday,
                placeofBirth: form.PlaceofBirth,
                phone: form.Phone,
                email: form.Email,

                userStatus: form.userStatus,
            })
                .then((data) => {
                    if (data.status == 'Ok') {
                        Swal.fire({
                            text: data.msg,
                            icon: 'success',
                        });
                        return;
                    }

                    Swal.fire({
                        text: data.msg,
                        icon: 'error',
                    });
                })
                .catch((error) => {
                    console.error('Saracatunga:', error);
                });
        } catch (error) {
            console.log(error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo un problema al crear el producto',
            });
        }
    }
    return (
        <div className="center">
            <BarraLateral />
            <Container>
                <Row className="gutters">
                    <Col xl={9} lg={9} md={12} sm={12} xs={12}>
                        <Form onSubmit={handleSubmit} name="test" id="test">
                            <Card className="h-100">
                                <Card.Body>
                                    <Row className="gutters">
                                        <Col
                                            xl={12}
                                            lg={12}
                                            md={12}
                                            sm={12}
                                            xs={12}
                                        >
                                            <h6 className="card-title">
                                                EDITAR PERFIL
                                            </h6>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <Form.Group controlId="fullName">
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control
                                                    defaultValue={DATA?.Name}
                                                    type="text"
                                                    placeholder="Ingresa tu primer nombre "
                                                    className="text-center"
                                                    required
                                                    onChange={(e) =>
                                                        setField(
                                                            'Name',
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <Form.Group controlId="fullName">
                                                <Form.Label>
                                                    Apellido
                                                </Form.Label>
                                                <Form.Control
                                                    defaultValue={
                                                        DATA?.LastName
                                                    }
                                                    type="text"
                                                    placeholder="Ingresa tu primer apellido"
                                                    className="text-center"
                                                    required
                                                    onChange={(e) =>
                                                        setField(
                                                            'LastName',
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <Form.Group controlId="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    defaultValue={DATA?.Email}
                                                    type="email"
                                                    placeholder="Ingresa tu email "
                                                    className="text-center"
                                                    required
                                                    onChange={(e) =>
                                                        setField(
                                                            'Email',
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <Form.Group controlId="phone">
                                                <Form.Label>Celular</Form.Label>
                                                <Form.Control
                                                    defaultValue={DATA?.Phone}
                                                    type="text"
                                                    placeholder="Ingresa tu numero de celular"
                                                    className="text-center"
                                                    pattern="[0-9]*"
                                                    required
                                                    maxLength={8}
                                                    onKeyPress={(e) => {
                                                        if (
                                                            isNaN(
                                                                parseInt(e.key)
                                                            )
                                                        ) {
                                                            e.preventDefault();
                                                        }
                                                    }}
                                                    title="Debe contener 8 números"
                                                    onChange={(e) =>
                                                        setField(
                                                            'Phone',
                                                            e.target.value
                                                        )
                                                    }
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        ></Col>
                                    </Row>

                                    <Row className="gutters">
                                        <Col
                                            xl={12}
                                            lg={12}
                                            md={12}
                                            sm={12}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <h6 className="card-title">
                                                INFORMACIÓN
                                            </h6>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <Form.Group controlId="Street">
                                                <Form.Label>
                                                    Lugar de nacimiento
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    required
                                                    readOnly
                                                    defaultValue={
                                                        DATA.PlaceofBirth
                                                    }
                                                    className="text-center"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <Form.Group>
                                                <Form.Label>
                                                    Fecha de nacimiento
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    readOnly
                                                    defaultValue={
                                                        DATA?.Birthday
                                                    }
                                                    className="text-center"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        >
                                            <Form.Group>
                                                <Form.Label>
                                                    Numero de identidad
                                                </Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    readOnly
                                                    defaultValue={DATA.DNI}
                                                    className="text-center"
                                                />
                                            </Form.Group>
                                        </Col>
                                        <Col
                                            xl={6}
                                            lg={6}
                                            md={6}
                                            sm={6}
                                            xs={12}
                                            className="mb-3"
                                        ></Col>
                                    </Row>
                                    <Row className="gutters">
                                        <Col
                                            xl={12}
                                            lg={12}
                                            md={12}
                                            sm={12}
                                            xs={12}
                                        >
                                            <div className="text-right">
                                                <Button
                                                    variant="secondary"
                                                    className="mr-2"
                                                >
                                                    Cancelar
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    onClick={handleSubmit}
                                                >
                                                    Actualizar
                                                </Button>
                                            </div>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default EditarPerf;
