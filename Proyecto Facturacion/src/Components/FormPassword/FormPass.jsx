import React from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";


function FormPassword() {
  return (

    <div>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={88} lg={100} xs={15}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">
                   Recuperacion de Contraseña
                  </h2>
                
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                        <Form.Label className="text-center">
                         
                         </Form.Label>
                        </Form.Label>
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
                        <Button variant="primary" type="submit">
                          Enviar
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Para regresar haga {" "}
                        <a href="/" className="text-primary fw-bold">
                          Click aqui
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