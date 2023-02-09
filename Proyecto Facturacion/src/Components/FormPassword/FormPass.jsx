import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


function FormPassword() {
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
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Correo electrónico</Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Ingresar correo"
                          onChange={(e) => setField("email", e.target.value)}
                        />
                      </Form.Group>

                      
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                     <div className="d-grid">
                        <Button className="bg-blue" type="submit">
                          Enviar
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Para regresar haga {" "}
                        <a href="/" className="text-blue fw-bold">
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