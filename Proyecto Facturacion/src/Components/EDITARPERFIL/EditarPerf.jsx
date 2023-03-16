import { useState } from 'react';
import { Container, Row, Col, Card, Form, Button , Image} from 'react-bootstrap';
import "./Editp.css";


function EditarPerf() {
  return (
    <Container>
      <Row className="gutters">
        <Col xl={3} lg={3} md={12} sm={12} xs={12}>
          <Card className="h-100">
            <Card.Body>
              <div className="account-settings">
                <div className="user-profile">
                  <div className="user-avatar"></div>
                  <h5 className="user-name">Ricardo Vasquez</h5>
                  <h6 className="user-email">ricardokr@unitec.edu</h6>
                </div>
                <div className="about">
                  <h5>Informacion</h5>
                  <p>Yo me llamo ricardo y soy el facturador principal de garifunas food.</p>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col xl={9} lg={9} md={12} sm={12} xs={12}>
          <Card className="h-100">
            <Card.Body>
              <Row className="gutters">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <h6 className="card-title">EDITAR PERFIL</h6>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Form.Group controlId="fullName">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu nombre completo" />
                  </Form.Group>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Form.Group controlId="eMail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresa tu email " />
                  </Form.Group>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Form.Group controlId="phone">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa tu numero de celular" />
                  </Form.Group>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Form.Group controlId="website">
                  <Form.Label>Rol</Form.Label>
                  <Form.Control type="Rol" placeholder="Rol" readOnly defaultValue="ADMINISTRADOR" />
                  </Form.Group>

                </Col>
              </Row>
              <Row className="gutters">
                <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                  <h6 className="card-title">DIRECCION</h6>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Form.Group controlId="Street">
                    <Form.Label>Calle</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa Calle" />
                  </Form.Group>
                </Col>
                <Col xl={6} lg={6} md={6} sm={6} xs={12}>
                  <Form.Group>
                    <Form.Label>Ciudad</Form.Label>
                    <Form.Control type="text" placeholder="Ingresa Ciudad" />
                  </Form.Group>
                  </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
              <Form.Group>
                <Form.Label>Estado</Form.Label>
                <Form.Control type="text" placeholder="Ingresa Estado " />
              </Form.Group>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6} xs={12}>
              <Form.Group>
                <Form.Label>Referencia</Form.Label>
                <Form.Control type="text" placeholder="Ingresa Referencia" />
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
  );
}
export default EditarPerf;
