import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import { Container } from 'react-bootstrap';
import { List } from 'react-bootstrap-icons';
import {
    BsFillPersonPlusFill,
    BsFillFileEarmarkBarGraphFill,
    BsHouseFill,
    BsFillBookmarkFill,
} from 'react-icons/bs';

import { IoIosExit } from 'react-icons/io';
import { IoRestaurantSharp } from 'react-icons/io5';
import CREARUSUARIO from '../CREARUSUARIO/index';
import './BarraLateral.css';

import MESA from '../MESAS/Mesa';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar className="bg-blue" expand="lg">
                <Container>
                    <Button
                        className="btn-navbar"
                        size="xxl"
                        onClick={handleShow}
                    >
                        <List></List>
                    </Button>
                    <a href="/home">
                        <img
                            id="nav-brand"
                            src="/assets/images/logo.png"
                            className="imagen"
                        ></img>
                    </a>

                    {/* <p>Garifunas Food</p> */}
                </Container>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header
                    className="bg-blue"
                    closeButton
                    closeVariant="white"
                >
                    <Container fluid>
                        <img
                            src="/assets/images/logo.png"
                            className="imagen"
                        ></img>
                    </Container>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Container>
                        <div className="d-grid gap-2">
                            <Button href="/home" className="bg-blue" size="lg">
                                <BsHouseFill></BsHouseFill> Inicio
                            </Button>
                            <Button
                                href="Pedidos"
                                className="bg-blue"
                                size="lg"
                            >
                                <IoRestaurantSharp></IoRestaurantSharp> Pedidos
                            </Button>
                            <Button href="Roles" className="bg-blue" size="lg">
                                <BsFillBookmarkFill></BsFillBookmarkFill> Roles
                            </Button>
                            <Button href="/users" className="bg-blue" size="lg">
                                <BsFillPersonPlusFill></BsFillPersonPlusFill>{' '}
                                Usuarios
                            </Button>
                            <Button
                                href="/Reportes "
                                className="bg-blue"
                                size="lg"
                            >
                                <BsFillFileEarmarkBarGraphFill></BsFillFileEarmarkBarGraphFill>{' '}
                                Reportes
                            </Button>
                            <Button href="/" className="bg-blue" size="lg">
                                <IoIosExit></IoIosExit> Salir
                            </Button>
                        </div>
                    </Container>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

function Borrar() {
    localStorage.removeItem('USERNAME');
}
export default Example;
