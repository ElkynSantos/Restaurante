import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import {
  BsFillPersonPlusFill,
  BsFillFileEarmarkBarGraphFill,
  BsHouseFill,
  BsFillBookmarkFill,
} from "react-icons/bs";
import { AiFillCalculator } from "react-icons/ai";
import { IoIosExit } from "react-icons/io";
import { IoRestaurantSharp } from "react-icons/io5";

import "./BarraLateral.css";
import imagenes from "./imagenes/pantalla.jpeg";

function Example() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Button variant="primary" size="xxl" onClick={handleShow}>
            <List></List>
            Menu
          </Button>
          <p>Garifunas Food</p>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Container fluid>
            <img src={imagenes} className="imagen"></img>
          </Container>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Container>
            <div className="d-grid gap-2">
              <Button variant="primary" size="lg">
                <BsHouseFill></BsHouseFill>
                <p>Inicio</p>
              </Button>
              <Button variant="primary" size="lg">
                <IoRestaurantSharp></IoRestaurantSharp>
                <p>Pedidos</p>
              </Button>
              <Button variant="primary" size="lg">
                <BsFillBookmarkFill></BsFillBookmarkFill>
                <p>Roles</p>
              </Button>
              <Button variant="primary" size="lg">
                <BsFillPersonPlusFill></BsFillPersonPlusFill>
                <p> Usuarios</p>
              </Button>
              <Button variant="primary" size="lg">
                <BsFillFileEarmarkBarGraphFill></BsFillFileEarmarkBarGraphFill>
                <p>Reportes</p>
              </Button>
              <Button variant="primary" size="lg">
                <IoIosExit></IoIosExit>
                <p>Salir</p>
              </Button>
            </div>
          </Container>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;
