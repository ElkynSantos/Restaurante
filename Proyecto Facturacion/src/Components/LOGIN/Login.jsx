import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

function LOGIN() {
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
      newErrors.email = "Espacio de correo vacio !";
      //email = "";
    }
    // validate with regex
    if ((!password && password !== "") || password == "") {
      newErrors.password = "Espacio de contrasena vacio !";
      //password = "";
    }

    console.log(newErrors.password);
    return newErrors;
  }
  async function handleSubmit(e) {
    e.preventDefault();
    let newErrors = findErrors();

    if (Object.keys(newErrors).length > 0) {
      console.log("entro");
      setErrors(newErrors);
    } else {
      //LLAMEN A LA API
    }
  }

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
                    Iniciar Sesion
                  </h2>
                  <p>Por favor ingrese el correo electronico y Contrasena</p>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Direccion de correo
                        </Form.Label>
                        <Form.Control
                          type="email"
                          placeholder="Enter email"
                          onChange={(e) => setField("email", e.target.value)}
                          isInvalid={!!errors.email}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Contrasena</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Password"
                          onChange={(e) => setField("password", e.target.value)}
                          isInvalid={!!errors.password}
                        />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Ingresar
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Desea recuperar contrasena?{" "}
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

export default LOGIN;
