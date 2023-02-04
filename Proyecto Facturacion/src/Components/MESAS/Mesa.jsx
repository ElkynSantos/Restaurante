import ListGroup from 'react-bootstrap/ListGroup';
import Order from './Card/Order';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

import React, { useState, useEffect } from 'react';

import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function MENU() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let Tarjet;

    const [count, setCount] = useState(0);

    // Similar to componentDidMount and componentDidUpdate:
    useEffect(() => {
        // Update the document title using the browser API
        alert(`You clicked ${count} times`);
    });

    //INICIAR MESAS HARCODEADO
    var array1 = [];
    for (let i = 0; i < 12; i++) {
        array1.push({ numero: i + 1, estado: false });
    }
    //_____________________________
    let button;
    if (true) {
        button = (
            <Button
                variant="outline-success"
                onClick={() => setCount(count + 1)}
            >
                Disponible
            </Button>
        );
    } else {
        button = (
            <Button
                variant="outline-danger"
                onClick={() => setOrder(props.estadoMesa)}
            >
                Ocupada
            </Button>
        );
    }

    return (
        <Container>
            {' '}
            <Row className="add-space">
                {array1.map((mesa) => (
                    <Col lg>
                        <p>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src="mesa.png" />
                                <Card.Body>
                                    <Card.Title>Mesa {mesa.numero}</Card.Title>
                                    <Card.Text>Disponible</Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => setCount(mesa.numero)}
                                    >
                                        Disponible
                                    </Button>

                                    <>
                                        <Button
                                            variant="primary"
                                            onClick={handleShow}
                                        >
                                            Launch demo modal
                                        </Button>

                                        <Modal show={show} onHide={handleClose}>
                                            <Modal.Header closeButton>
                                                <Modal.Title>
                                                    Modal heading
                                                </Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                                <Form>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlInput1"
                                                    >
                                                        <Form.Label>
                                                            Email address
                                                        </Form.Label>
                                                        <Form.Control
                                                            type="email"
                                                            placeholder="name@example.com"
                                                            autoFocus
                                                        />
                                                    </Form.Group>
                                                    <Form.Group
                                                        className="mb-3"
                                                        controlId="exampleForm.ControlTextarea1"
                                                    >
                                                        <Form.Label>
                                                            Example textarea
                                                        </Form.Label>
                                                        <Form.Control
                                                            as="textarea"
                                                            rows={3}
                                                        />
                                                    </Form.Group>
                                                </Form>
                                            </Modal.Body>
                                            <Modal.Footer>
                                                <Button
                                                    variant="secondary"
                                                    onClick={handleClose}
                                                >
                                                    Close
                                                </Button>
                                                <Button
                                                    variant="primary"
                                                    onClick={handleClose}
                                                >
                                                    Save Changes
                                                </Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </>
                                </Card.Body>
                            </Card>
                        </p>
                    </Col>
                ))}
            </Row>
        </Container>
    );

    // return <h1>PANTALLA MENU</h1>;
}

export default MENU;
//<Order numMesa={mesa.numero} estadoMesa={mesa.estado} />
/*{button}
 <Container>
      {" "}
     <Row>
       {allProducts.map((product) => (
        //  <Col lg>
         //   <CharCardsOrders _id={product._id} items={product.items} />
       //   </Col>
        ))}
      </Row>
    </Container>
*/

/*

import ListGroup from 'react-bootstrap/ListGroup';

function DefaultExample() {
  return (
    <ListGroup>
      <ListGroup.Item>Cras justo odio</ListGroup.Item>
      <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
      <ListGroup.Item>Morbi leo risus</ListGroup.Item>
      <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
      <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    </ListGroup>
  );
}

export default DefaultExample;

*/
