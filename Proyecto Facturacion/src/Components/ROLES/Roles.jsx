import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import "./ROLES.css";

function ROLES() {
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

    if ((!email && email !== "") || email == "") {
      //En realidad es username
      newErrors.email = "Espacio de ID Vacio !";
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
                    Asignación de roles
                  </h2>
                  <p>Por favor ingrese El ID del usuario y el rol que asignará</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          ID de usuario
                        </Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Ingrese Usuario"
                          onChange={(e) => setField("email", e.target.value)}
                          isInvalid={!!errors.email}
                        />
                      </Form.Group>
                      <Form.Label className="text-center">
                          Roles posibles
                        </Form.Label>
                      <DropdownButton id="dropdown-basic-button" title="Roles">
      <Dropdown.Item href="#/action-1">Administrador del sistema</Dropdown.Item>
      <Dropdown.Item href="#/action-2">Gerente</Dropdown.Item>
      <Dropdown.Item href="#/action-3">Facturador</Dropdown.Item>
    </DropdownButton>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Añadir rol a usuario 
                        </Button>
                      </div>
                      <br></br>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
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

export default ROLES;