import React, { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "./LOGIN.css";

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
      //En realidad es username
      newErrors.email = "Espacio de Username Vacio !";
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
                    Iniciar Sesion
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit={handleSubmit}>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Nombre de usuario
                        </Form.Label>
                        <Form.Control
                          onChange={(e) => setField("email", e.target.value)}
                          isInvalid={!!errors.email}
                        />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >

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
