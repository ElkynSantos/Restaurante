import ListGroup from 'react-bootstrap/ListGroup';
import Order from '../../Components/MENU/Card/Order';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Button from 'react-bootstrap/Button';

function MENU() {
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
                onClick={() => setOrder(props.estadoMesa)}
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

                                    {button}
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
/*
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
