import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button , Image} from 'react-bootstrap';
import "./Editp.css";


function EditarPerf() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [celular, setCelular] = useState("");
  const [rol, setRol] = useState("");
  const [fechaNacimiento, setFechaNacimiento] = useState("");
  const [lugarNacimiento, setLugarNacimiento] = useState("");
  const [numeroIdentidad, setNumeroIdentidad] = useState("");
  const [genero, setGenero] = useState("");

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleApellidoChange = (event) => {
    setApellido(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCelularChange = (event) => {
    setCelular(event.target.value);
  };

  const handleRolChange = (event) => {
    setRol(event.target.value);
  };

  const handleFechaNacimientoChange = (event) => {
    setFechaNacimiento(event.target.value);
  };

  const handleLugarNacimientoChange = (event) => {
    setLugarNacimiento(event.target.value);
  };

  const handleNumeroIdentidadChange = (event) => {
    setNumeroIdentidad(event.target.value);
  };

  const handleGeneroChange = (event) => {
    setGenero(event.target.value);
  };
  return (
    <div className="center">
      <Container>
        <Row className="gutters">
        
        
          <Col xl={9} lg={9} md={12} sm={12} xs={12}>
            <Card className="h-100">
              <Card.Body>
                <Row className="gutters">
                  <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                    <h6 className="card-title">EDITAR PERFIL</h6>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                    <Form.Group controlId="fullName">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu primer nombre "className="text-center" />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                    <Form.Group controlId="fullName">
                      <Form.Label>Apellido</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu primer apellido"className="text-center" />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                    <Form.Group controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Ingresa tu email " className="text-center"/>
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                    <Form.Group controlId="phone">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="text" placeholder="Ingresa tu numero de celular" className="text-center"/>
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                    <Form.Group controlId="website">
                    <Form.Label>Rol</Form.Label>
                    <Form.Control type="Rol" placeholder="Rol" readOnly defaultValue="ADMINISTRADOR"className="text-center" />
                    </Form.Group>

                  </Col>
                </Row>
                <Row className="gutters">
                  <Col xl={12} lg={12} md={12} sm={12} xs={12}className="mb-3">
                    <h6 className="card-title">INFORMACIÓN</h6>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                    <Form.Group controlId="Street">
                      <Form.Label>Lugar de nacimiento</Form.Label>
                      <Form.Control type="text" readOnly defaultValue="San pedro sula"className="text-center" />
                    </Form.Group>
                  </Col>
                  <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                    <Form.Group>
                      <Form.Label>Fecha de nacimiento</Form.Label>
                      <Form.Control type="text" readOnly defaultValue="02/02/23" className="text-center"/>
                    </Form.Group>
                    </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                <Form.Group>
                  <Form.Label>Numero de identidad</Form.Label>
                  <Form.Control type="text"readOnly defaultValue="0501200109050211 "className="text-center" />
                </Form.Group>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} xs={12}className="mb-3">
                <Form.Group>
                  <Form.Label>Genero</Form.Label>              
                  <Form.Control type="text" readOnly defaultValue="Masculino"className="text-center" />
            </Form.Group>
          </Col>
        </Row>
        <Row className="gutters">
          <Col xl={12} lg={12} md={12} sm={12} xs={12}>
            <div className="text-right">
              <Button variant="secondary" className="mr-2">
                Cancelar
              </Button>
              <Button variant="primary">
              Actualizar
              </Button>
          </div>
      </Col>
      </Row>
  </Card.Body>
  </Card>
  </Col>
  </Row>
  </Container>
  </div>
  );
}
export default EditarPerf;
