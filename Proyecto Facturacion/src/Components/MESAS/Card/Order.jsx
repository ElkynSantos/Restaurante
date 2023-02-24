import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Order(param) {
    let button;
    if (param.estadoMesa) {
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
        <p>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="mesa.png" />
                <Card.Body>
                    <Card.Title>Mesa {param.numMesa}</Card.Title>
                    <Card.Text>Disponible</Card.Text>

                    {button}
                </Card.Body>
            </Card>
        </p>
    );
}

export default Order;
